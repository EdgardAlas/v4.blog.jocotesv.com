import { PostEditorForm } from '@/app/admin/(dashboard)/post/_components/post-editor-form';
import { AdminBreadcrumbs } from '@/components/layout/admin-breadcrumbs';
import React from 'react';

const CreatePostPage = () => {
	return (
		<>
			<AdminBreadcrumbs
				breadcrumbs={[
					{ title: 'Posts', link: '/admin/posts' },
					{ title: 'Create Post', link: '/admin/post' },
				]}
			/>

			<PostEditorForm
				post={{
					title: '',
					content: `
							<h1>Post Title</h1>
						`,
					image: '',
					slug: '',
					description: '',
					id: '1',
					categories: [],
					status: 'draft',
					author: 'author-1',
					publicationDate: new Date(),
					date: new Date(),
				}}
			/>
		</>
	);
};

export default CreatePostPage;
