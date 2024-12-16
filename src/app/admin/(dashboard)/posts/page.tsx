import { AdminBreadcrumbs } from '@/components/layout/admin-breadcrumbs';

const PostsPage = () => {
	return (
		<>
			<AdminBreadcrumbs
				breadcrumbs={[{ link: '/admin/posts', title: 'Posts' }]}
			/>
		</>
	);
};

export default PostsPage;
