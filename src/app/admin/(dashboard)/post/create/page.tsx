import { PostEditorForm } from '@/app/admin/(dashboard)/post/_components/post-editor-form';
import { AdminBreadcrumbs } from '@/components/layout/admin-breadcrumbs';
import React from 'react';

const CreatePostPage = () => {
	return (
		<>
			<AdminBreadcrumbs
				breadcrumbs={[
					{ title: 'Posts', link: '/admin/posts' },
					{ title: 'Create Post', link: '/admin/post/create' },
				]}
			/>

			<PostEditorForm />
		</>
	);
};

export default CreatePostPage;
