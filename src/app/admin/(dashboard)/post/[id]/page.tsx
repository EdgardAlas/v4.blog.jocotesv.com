import { PostEditorForm } from '@/app/admin/(dashboard)/post/_components/post-editor-form';
import { AdminBreadcrumbs } from '@/components/layout/admin-breadcrumbs';

const CreateOrEditPostPage = () => {
	return (
		<>
			<AdminBreadcrumbs
				breadcrumbs={[
					{ title: 'Posts', link: '/admin/posts' },
					{ title: 'Edit Post', link: '/admin/post/create' },
				]}
			/>

			<PostEditorForm />
		</>
	);
};

export default CreateOrEditPostPage;
