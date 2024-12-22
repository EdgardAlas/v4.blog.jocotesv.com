import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { PostCard } from '@/components/ui/post-card';

export default function HomePage() {
	const featuredPosts = posts.filter((post) => post.featured).slice(0, 3);
	const recentPosts = posts.filter((post) => post.isPublished).slice(0, 6);

	return (
		<div className='container mx-auto px-4 py-8'>
			{/* Hero Section */}
			<section className='mb-12 rounded-lg bg-primary py-20 text-center'>
				<h1 className='mb-4 text-4xl font-bold text-white md:text-6xl'>
					Welcome to JocoteSV blog
				</h1>
				<p className='mb-8 text-xl text-white'>
					Discover insightful articles on web development and design
				</p>
				<Button asChild variant={'secondary'}>
					<Link href='/posts'>View All Posts</Link>
				</Button>
			</section>

			<div className='rounded-lg bg-accent p-8 shadow-sm'>
				{/* Featured Posts Section */}
				<section className='mb-12'>
					<h2 className='mb-6 text-3xl font-bold'>Featured Posts</h2>
					<div className='grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
						{featuredPosts.map((post) => (
							<PostCard
								key={post.id}
								post={{
									...post,
									url: `/${post.slug}`,
								}}
							/>
						))}
					</div>
				</section>

				{/* Recent Posts Section */}
				<section>
					<h2 className='mb-6 text-3xl font-bold'>Recent Posts</h2>
					<div className='grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
						{recentPosts.map((post) => (
							<PostCard
								key={post.id}
								post={{
									...post,
									url: `/${post.slug}`,
								}}
							/>
						))}
					</div>
					<div className='mt-8 text-center'>
						<Button asChild variant='outline'>
							<Link href='/posts'>View All Posts</Link>
						</Button>
					</div>
				</section>
			</div>
		</div>
	);
}

const posts = [
	{
		id: '1',
		title: 'Getting Started with Next.js',
		imageUrl: '/placeholder.svg?height=200&width=300',
		slug: 'getting-started-with-nextjs',
		categories: ['Web Development', 'React'],
		isPublished: true,
		featured: true,
		author: {
			name: 'John Doe',
			avatarUrl: '/placeholder.svg?height=40&width=40',
		},
	},
	{
		id: '2',
		title: 'The Power of Tailwind CSS',
		slug: 'the-power-of-tailwind-css',
		imageUrl: '/placeholder.svg?height=200&width=300',
		categories: ['CSS', 'Web Design'],
		featured: true,
		isPublished: false,
		author: {
			name: 'Jane Smith',
			avatarUrl: '/placeholder.svg?height=40&width=40',
		},
	},
	{
		id: '3',
		title: 'Building Scalable APIs with Node.js',
		imageUrl: '/placeholder.svg?height=200&width=300',
		slug: 'building-scalable-apis-with-nodejs',
		categories: ['Backend', 'Node.js'],
		isPublished: true,
		featured: true,
		author: {
			name: 'Bob Johnson',
			avatarUrl: '/placeholder.svg?height=40&width=40',
		},
	},
	{
		id: '4',
		title: 'Introduction to TypeScript',
		imageUrl: '/placeholder.svg?height=200&width=300',
		slug: 'introduction-to-typescript',
		categories: ['JavaScript', 'TypeScript'],
		isPublished: true,
		featured: true,
		author: {
			name: 'Alice Brown',
			avatarUrl: '/placeholder.svg?height=40&width=40',
		},
	},
	{
		id: '5',
		title: 'Mastering React Hooks',
		imageUrl: '/placeholder.svg?height=200&width=300',
		slug: 'mastering-react-hooks',
		categories: ['React', 'JavaScript'],
		isPublished: true,
		featured: true,
		author: {
			name: 'Charlie Wilson',
			avatarUrl: '/placeholder.svg?height=40&width=40',
		},
	},
	{
		id: '6',
		title: 'Advanced CSS Techniques',
		imageUrl: '/placeholder.svg?height=200&width=300',
		slug: 'advanced-css-techniques',
		categories: ['CSS', 'Web Design'],
		isPublished: true,
		featured: true,
		author: {
			name: 'Diana Martinez',
			avatarUrl: '/placeholder.svg?height=40&width=40',
		},
	},
];
