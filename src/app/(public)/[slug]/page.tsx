import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { RenderHTML } from '@/components/ui/render-html';
import { format } from 'date-fns';
import React from 'react';

const PostPage = () => {
	const code = `
    <p>This is the content of my first blog post. It's very exciting!</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
    <h2>A Subheading</h2>
    <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
    <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
  `;

	return (
		<div className='p-4'>
			<article className='mx-auto max-w-prose rounded-md bg-white p-4 shadow-md'>
				<h1 className='mb-4 text-4xl font-bold'>My First Blog Post</h1>
				<div className='mb-6 flex items-center'>
					<Avatar className='mr-4 h-10 w-10'>
						<AvatarImage
							src={'https://github.com/shadcn.png'}
							alt={"Test User's Avatar"}
						/>
						<AvatarFallback>{'T'}</AvatarFallback>
					</Avatar>
					<div>
						<p className='text-sm font-medium'>{'Test User'}</p>
						<p className='text-sm text-muted-foreground'>
							{format('2021-08-01T00:00:00.000Z', 'MMMM d, yyyy')}
						</p>
					</div>
				</div>
				<RenderHTML code={code} />
			</article>
		</div>
	);
};

export default PostPage;
