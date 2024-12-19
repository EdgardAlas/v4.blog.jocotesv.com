'use client';

import { AdminBreadcrumbs } from '@/components/layout/admin-breadcrumbs';
import { AdminCardTitle } from '@/components/layout/admin-card-title';
import { Button } from '@/components/ui/button';
import { SimpleCard } from '@/components/ui/card';
import { DataTableInputSearch } from '@/components/ui/data-table/data-table-input-search';
import { DataTablePagination } from '@/components/ui/data-table/data-table-pagination';
import { PostCard } from '@/components/ui/post-card';
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from '@/components/ui/select';
import Link from 'next/link';
import { useQueryState } from 'nuqs';

const PostsPage = () => {
	const [status, setStatus] = useQueryState('status', {
		defaultValue: 'all',
		shallow: false,
	});

	return (
		<>
			<AdminBreadcrumbs
				breadcrumbs={[{ link: '/admin/posts', title: 'Posts' }]}
			/>

			<SimpleCard>
				<div className='flex justify-between'>
					<AdminCardTitle title='Posts' />
					<Button asChild>
						<Link href='/admin/post/create'>Create Post</Link>
					</Button>
				</div>
				<DataTableInputSearch
					direction='end'
					className='flex-col-reverse gap-2 md:flex-row-reverse md:justify-start'
				>
					<Select defaultValue={status} onValueChange={setStatus}>
						<SelectTrigger className='max-w-md md:w-[100px]'>
							<SelectValue placeholder='Filter by status' />
						</SelectTrigger>
						<SelectContent>
							<SelectItem value='all'>All</SelectItem>
							<SelectItem value='published'>Published</SelectItem>
							<SelectItem value='draft'>Draft</SelectItem>
						</SelectContent>
					</Select>
				</DataTableInputSearch>

				<div className='grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
					{mockupPosts.map((post) => (
						<PostCard
							key={post.id}
							post={{
								id: post.id.toString(),
								title: post.title,
								imageUrl: post.image,
								categories: post.categories,
								isPublished: post.isPublished,
								author: post.author,
								url: `/admin/post/${post.id}`,
							}}
						/>
					))}
				</div>
				<DataTablePagination totalPages={10} />
			</SimpleCard>
		</>
	);
};

export default PostsPage;

const mockupPosts = [
	{
		id: 1,
		title: 'Post 1',
		created_at: '2024-01-01',
		updated_at: '2024-01-01',
		isPublished: true,
		publishDate: '2024-01-01',
		image: '/placeholder.svg',
		categories: ['Category 1', 'Category 2'],
		author: {
			name: 'Jane Smith',
			avatarUrl: '/placeholder.svg',
		},
	},
	{
		id: 2,
		title: 'Post 2',
		created_at: '2024-02-01',
		updated_at: '2024-02-01',
		isPublished: false,
		publishDate: '2024-02-15',
		image: '/placeholder.svg',
		categories: ['Category 3'],
		author: {
			name: 'John Doe',
			avatarUrl: '/placeholder.svg',
		},
	},
	{
		id: 3,
		title: 'Post 3',
		created_at: '2024-03-01',
		updated_at: '2024-03-01',
		isPublished: true,
		publishDate: '2024-03-10',
		image: '/placeholder.svg',
		categories: ['Category 1', 'Category 4'],
		author: {
			name: 'Alice Johnson',
			avatarUrl: '/placeholder.svg',
		},
	},
	{
		id: 4,
		title: 'Post 4',
		created_at: '2024-04-01',
		updated_at: '2024-04-01',
		isPublished: false,
		publishDate: '2024-04-15',
		image: '/placeholder.svg',
		categories: ['Category 2', 'Category 3'],
		author: {
			name: 'Michael Brown',
			avatarUrl: '/placeholder.svg',
		},
	},
	{
		id: 5,
		title: 'Post 5',
		created_at: '2024-05-01',
		updated_at: '2024-05-01',
		isPublished: true,
		publishDate: '2024-05-05',
		image: '/placeholder.svg',
		categories: ['Category 1', 'Category 5'],
		author: {
			name: 'Emma White',
			avatarUrl: '/placeholder.svg',
		},
	},
];
