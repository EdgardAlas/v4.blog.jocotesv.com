import { RenderHTML } from '@/components/ui/render-html';

interface PreviewPageProps {
	searchParams: Promise<{
		code: string;
	}>;
}

const PreviewPage = async ({ searchParams }: PreviewPageProps) => {
	const params = await searchParams;
	const code = params.code;

	return (
		<div className='p-4'>
			<div className='mx-auto min-h-[calc(100dvh-32px)] max-w-prose rounded-md bg-white p-4 shadow-md'>
				<RenderHTML code={code} />
			</div>
		</div>
	);
};

export default PreviewPage;
