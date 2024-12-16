import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import {
	Card,
	CardContent,
	CardFooter,
	CardHeader,
} from '@/components/ui/card';
import Image from 'next/image';
import Link from 'next/link';

export function PostCard({
	post,
}: {
	post: {
		id: string;
		title: string;
		imageUrl: string;
		categories: string[];
		isPublished: boolean;
		url?: string;
		author: {
			name: string;
			avatarUrl: string;
		};
	};
}) {
	return (
		<Link href={post.url ?? '#'} className='group block'>
			<Card className='overflow-hidden transition-shadow hover:shadow-md'>
				<CardHeader className='p-0'>
					<Image
						src={post.imageUrl}
						alt={post.title}
						width={300}
						height={200}
						className='h-48 w-full object-cover transition-transform'
					/>
				</CardHeader>
				<CardContent className='p-4'>
					<h3 className='mb-2 text-lg font-semibold transition-colors group-hover:text-primary'>
						{post.title}
					</h3>
					<div className='mb-2 flex flex-wrap gap-2'>
						{post.categories.map((category) => (
							<Badge key={category} variant='secondary'>
								{category}
							</Badge>
						))}
					</div>
				</CardContent>
				<CardFooter className='flex items-center justify-between p-4 pt-0'>
					<Badge variant={post.isPublished ? 'default' : 'destructive'}>
						{post.isPublished ? 'Published' : 'Draft'}
					</Badge>
					<div className='flex items-center space-x-2'>
						<Avatar className='h-6 w-6'>
							<AvatarImage src={post.author.avatarUrl} alt={post.author.name} />
							<AvatarFallback>{post.author.name.charAt(0)}</AvatarFallback>
						</Avatar>
						<span className='text-sm text-muted-foreground'>
							{post.author.name}
						</span>
					</div>
				</CardFooter>
			</Card>
		</Link>
	);
}
