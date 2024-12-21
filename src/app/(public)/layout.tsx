import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
	title: 'JocoteSV Blog',
	description: 'Discover insightful articles on web development and design',
};

export default function PublicLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<>
			<header className='bg-accent py-4 shadow-sm'>
				<nav className='container mx-auto flex items-center justify-between px-4'>
					<Link href='/' className='text-2xl font-bold'>
						JocoteSV
					</Link>
					<ul className='flex space-x-4'>
						<li>
							<Link href='/' className='hover:text-primary'>
								Home
							</Link>
						</li>
						<li>
							<Link href='/posts' className='hover:text-primary'>
								All Posts
							</Link>
						</li>
					</ul>
				</nav>
			</header>
			<main>{children}</main>
		</>
	);
}
