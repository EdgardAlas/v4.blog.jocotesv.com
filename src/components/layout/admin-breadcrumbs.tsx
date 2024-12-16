import { CustomToggleSidebar } from '@/components/layout/custom-toggle-sidebar';
import {
	Breadcrumb,
	BreadcrumbItem,
	BreadcrumbLink,
	BreadcrumbList,
	BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';
import { generateBreadcrumbs } from '@/utils/generate-breadcrumbs';
import { DateTime } from 'luxon';
import Link from 'next/link';
import { Fragment } from 'react';

interface PageHeaderProps {
	breadcrumbs?: {
		title: string;
		link: string;
	}[];
}

export const AdminBreadcrumbs = ({ breadcrumbs = [] }: PageHeaderProps) => {
	const breandcrumbsToRender = [...generateBreadcrumbs(), ...breadcrumbs];
	return (
		<header className='flex h-16 items-center justify-between gap-4 bg-background py-4'>
			<div className='flex items-center gap-2'>
				<div className='md:hidden'>
					<CustomToggleSidebar />
				</div>
				<Breadcrumb>
					<BreadcrumbList>
						{breandcrumbsToRender?.map((breadcrumb, index) => (
							<Fragment key={breadcrumb.title}>
								<BreadcrumbItem>
									<BreadcrumbLink asChild>
										<Link href={breadcrumb.link}>{breadcrumb.title}</Link>
									</BreadcrumbLink>
								</BreadcrumbItem>

								{index < breandcrumbsToRender.length - 1 && (
									<BreadcrumbSeparator />
								)}
							</Fragment>
						))}
					</BreadcrumbList>
				</Breadcrumb>
			</div>
			<time dateTime={DateTime.now().toISO()} className='text-sm font-bold'>
				{DateTime.now().toFormat('LLL dd, yyyy')}
			</time>
		</header>
	);
};
