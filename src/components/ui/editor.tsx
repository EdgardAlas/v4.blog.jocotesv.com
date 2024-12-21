'use client';

import { AlignCenterToolbar } from '@/components/toolbars/align-center-toolbar';
import { AlignJustifyToolbar } from '@/components/toolbars/align-justify-toolbar';
import { AlignLeftToolbar } from '@/components/toolbars/align-left-toolbar';
import { AlignRightToolbar } from '@/components/toolbars/align-right-toolbar';
import { BlockquoteToolbar } from '@/components/toolbars/blockquote-toolbar';
import { BoldToolbar } from '@/components/toolbars/bold-toolbar';
import { BulletListToolbar } from '@/components/toolbars/bullet-list-toolbar';
import { ColorHighlightToolbar } from '@/components/toolbars/color-and-highlight';
import { HardBreakToolbar } from '@/components/toolbars/hard-break-toolbar';
import { HeadingToolbar } from '@/components/toolbars/heading-toolbar';
import { HorizontalRuleToolbar } from '@/components/toolbars/horizontal-rule-toolbar';
import { ItalicToolbar } from '@/components/toolbars/italic-toolbar';
import { OrderedListToolbar } from '@/components/toolbars/ordered-list-toolbar';
import { RedoToolbar } from '@/components/toolbars/redo-toolbar';
import { StrikeToolbar } from '@/components/toolbars/strike-toolbar';
import { ToolbarProvider } from '@/components/toolbars/toolbar-provider';
import { UnderlineToolbar } from '@/components/toolbars/underline-toolbar';
import { UndoToolbar } from '@/components/toolbars/undo-toolbar';
import { UploadImageToolbar } from '@/components/toolbars/upload-image-toolbar';
import Blockquote from '@tiptap/extension-blockquote';
import { CodeBlockLowlight } from '@tiptap/extension-code-block-lowlight';
import { Color } from '@tiptap/extension-color';
import HardBreak from '@tiptap/extension-hard-break';
import Highlight from '@tiptap/extension-highlight';
import HorizontalRule from '@tiptap/extension-horizontal-rule';
import Link from '@tiptap/extension-link';
import ListItem from '@tiptap/extension-list-item';
import Placeholder from '@tiptap/extension-placeholder';
import TextAlign from '@tiptap/extension-text-align';
import TextStyle from '@tiptap/extension-text-style';
import Underline from '@tiptap/extension-underline';
import {
	EditorContent,
	NodeViewProps,
	ReactNodeViewRenderer,
	useEditor,
} from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import { all, createLowlight } from 'lowlight';
import ImageResize from 'tiptap-extension-resize-image';

const lowlight = createLowlight(all);

import { CodeToolbar } from '@/components/toolbars/code-toolbar';
import { Separator } from '@/components/ui/separator';
import { Skeleton } from '@/components/ui/skeleton';
import { NodeViewContent, NodeViewWrapper } from '@tiptap/react';
import { useRef } from 'react';
import { LinkToolbar } from '@/components/toolbars/link-toolbar';

export const CodeBlockComponent = ({
	node: {
		attrs: { language: defaultLanguage },
	},
	updateAttributes,
	extension,
}: NodeViewProps) => (
	<NodeViewWrapper className='code-block'>
		<select
			className='h-8 rounded-md border border-input px-3 py-1 text-base shadow-sm focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring'
			contentEditable={false}
			defaultValue={defaultLanguage}
			onChange={(event) => updateAttributes({ language: event.target.value })}
			onClick={(event) => event.stopPropagation()}
		>
			{extension.options.lowlight
				.listLanguages()
				.map((lang: string, index: number) => (
					<option key={index} value={lang}>
						{lang}
					</option>
				))}
		</select>
		<pre>
			<NodeViewContent as='code' />
		</pre>
	</NodeViewWrapper>
);

interface EditorProps {
	onChange?: (e: {
		target: {
			value: string;
		};
	}) => void;
	value?: string;
	ref?: React.RefObject<HTMLDivElement>;
}

export const Editor = ({ onChange, value }: EditorProps) => {
	const debounce = useRef<NodeJS.Timeout | null>(null);

	const editor = useEditor({
		immediatelyRender: false,
		extensions: [
			StarterKit.configure({
				blockquote: false,
				codeBlock: false,
				horizontalRule: false,
				hardBreak: false,
				listItem: false,
			}),
			Placeholder.configure({
				placeholder: 'Write something …',
			}),
			Blockquote,
			TextAlign.configure({
				types: ['heading', 'paragraph'],
			}),
			Highlight.configure({
				multicolor: true,
			}),

			TextStyle,
			Color,
			Underline,
			HorizontalRule,
			HardBreak,
			ListItem,
			CodeBlockLowlight.extend({
				addNodeView() {
					return ReactNodeViewRenderer(CodeBlockComponent);
				},
			}).configure({ lowlight, defaultLanguage: 'plaintext' }),
			ImageResize.extend({
				addAttributes() {
					return {
						src: {
							default: null,
						},
						alt: {
							default: null,
						},
						style: {
							default: 'width: auto; height: auto; cursor: pointer;',
						},
					};
				},
			}).configure({}),
			Link.configure({
				openOnClick: false,
				autolink: true,
				defaultProtocol: 'https',
				protocols: ['http', 'https'],
				isAllowedUri: (url, ctx) => {
					try {
						// construct URL
						const parsedUrl = url.includes(':')
							? new URL(url)
							: new URL(`${ctx.defaultProtocol}://${url}`);

						// use default validation
						if (!ctx.defaultValidate(parsedUrl.href)) {
							return false;
						}

						// disallowed protocols
						const disallowedProtocols = ['ftp', 'file', 'mailto'];
						const protocol = parsedUrl.protocol.replace(':', '');

						if (disallowedProtocols.includes(protocol)) {
							return false;
						}

						// only allow protocols specified in ctx.protocols
						const allowedProtocols = ctx.protocols.map((p) =>
							typeof p === 'string' ? p : p.scheme
						);

						if (!allowedProtocols.includes(protocol)) {
							return false;
						}

						// all checks have passed
						return true;
						// eslint-disable-next-line @typescript-eslint/no-unused-vars
					} catch (error) {
						return false;
					}
				},
			}),
		],
		content: value,
		editorProps: {
			attributes: {
				class:
					'rounded-md min-h-[300px] p-4 bg-white shadow-sm border border-input focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring',
			},
		},

		onUpdate({ editor }) {
			if (debounce.current) {
				clearTimeout(debounce.current);
			}

			debounce.current = setTimeout(() => {
				onChange?.({
					target: {
						value: editor.getHTML().replaceAll('contenteditable="true"', ''),
					},
				});
			}, 300);
		},
		shouldRerenderOnTransaction: false,
	});

	if (!editor)
		return (
			<div>
				<Skeleton className='h-96' />
			</div>
		);

	return (
		<div className='relative'>
			<ToolbarProvider editor={editor}>
				<UndoToolbar />
				<RedoToolbar />
				<Separator orientation='vertical' className='h-9' />
				<HeadingToolbar />
				<BlockquoteToolbar />
				<BoldToolbar />
				<ColorHighlightToolbar />
				<StrikeToolbar />
				<ItalicToolbar />
				<UnderlineToolbar />
				<AlignLeftToolbar />
				<AlignCenterToolbar />
				<AlignRightToolbar />
				<AlignJustifyToolbar />
				<HorizontalRuleToolbar />
				<LinkToolbar />
				<UploadImageToolbar />
				<BulletListToolbar />
				<OrderedListToolbar />
				<HardBreakToolbar />
				<CodeToolbar />
			</ToolbarProvider>
			<div
				onClick={() => {
					editor?.chain().focus().run();
				}}
			>
				<EditorContent editor={editor} className='post mt-4' />
			</div>
		</div>
	);
};
