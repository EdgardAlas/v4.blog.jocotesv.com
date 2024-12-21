'use client';

import { PostClasificationFields } from '@/app/admin/(dashboard)/post/_components/post-clasification-fields';
import { PostGeneralFields } from '@/app/admin/(dashboard)/post/_components/post-general-fields';
import { PostSeoFields } from '@/app/admin/(dashboard)/post/_components/post-seo-fields';
import {
	PostSchema,
	postSchemaResolver,
} from '@/app/admin/(dashboard)/post/_lib/post.schema';
import { Editor } from '@/components/ui/editor';
import { AdminCardTitle } from '@/components/layout/admin-card-title';
import { Button } from '@/components/ui/button';
import { SimpleCard } from '@/components/ui/card';
import {
	FormControl,
	FormField,
	FormItem,
	FormMessage,
} from '@/components/ui/form';
import { FormProvider } from '@/components/ui/form-provider';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Monitor, Save } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';

interface PostEditorFormProps {
	post: PostSchema;
}

const tabFields = {
	general: ['status', 'title', 'slug', 'publicationDate', 'date'],
	content: ['description', 'image'],
	classification: ['categories', 'author'],
};

export const PostEditorForm = ({ post }: PostEditorFormProps) => {
	const form = useForm<PostSchema>({
		defaultValues: post,
		resolver: postSchemaResolver,
	});

	const [activeTab, setActiveTab] = useState('general');

	const id = form.watch('id');
	const content = form.watch('content');

	return (
		<FormProvider
			form={form}
			onSubmit={(data) => {
				console.log(data);
			}}
			onValidationError={(error) => {
				const firstKey = Object.keys(error)[0];

				const activeTab = Object.keys(tabFields).find((tab) =>
					tabFields[tab as keyof typeof tabFields].includes(firstKey)
				);

				if (activeTab) setActiveTab(activeTab);

				toast.error('Please check the form for errors.');
			}}
		>
			<div className='flex flex-col gap-4 md:max-w-[calc(100dvw-255px-32px)] xl:max-w-[unset] xl:flex-row xl:items-start'>
				<SimpleCard className='order-2 flex-1 overflow-y-auto xl:order-1 xl:max-h-[calc(100dvh-64px-48px)]'>
					<AdminCardTitle title={id ? 'Edit Post' : 'Create Post'} />

					<FormField
						control={form.control}
						name='content'
						render={({ field }) => (
							<FormItem>
								<FormControl>
									<Editor
										value={field.value}
										onChange={(e) => field.onChange(e.target.value)}
									/>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
				</SimpleCard>

				<SimpleCard className='order-1 flex-1 bg-white xl:order-2 xl:h-[calc(100dvh-64px-48px)] xl:max-w-[400px] xl:overflow-y-auto'>
					<div className='flex flex-col gap-2 md:flex-row md:items-center md:justify-between'>
						<Button
							type='submit'
							className='w-full'
							loading={form.formState.isSubmitting}
							icon={Save}
						>
							Save
						</Button>

						<Button
							className='w-full'
							variant='secondary'
							asChild
							icon={Monitor}
						>
							<Link href={`/post/preview?code=${content}`} target='_blank'>
								Preview
							</Link>
						</Button>
					</div>

					<Tabs
						defaultValue='general'
						className='h-full w-full'
						value={activeTab}
						onValueChange={setActiveTab}
					>
						<TabsList className='flex space-x-4 border-b'>
							<TabsTrigger value='general'>General</TabsTrigger>
							<TabsTrigger value='content'>SEO</TabsTrigger>
							<TabsTrigger value='classification'>Classification</TabsTrigger>
						</TabsList>

						<PostGeneralFields />
						<PostSeoFields />
						<PostClasificationFields />
					</Tabs>
				</SimpleCard>
			</div>
		</FormProvider>
	);
};
