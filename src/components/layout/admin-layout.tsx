import { AdminContent } from '@/components/layout/admin-content';
import { AdminBreadcrumbs } from '@/components/layout/admin-breadcrumbs';
import { AdminSidebar } from '@/components/layout/admin-sidebar';
import { Children, isValidElement } from 'react';

export const AdminLayout = ({ children }: { children: React.ReactNode }) => {
	const Header = Children.toArray(children).find(
		(child) => isValidElement(child) && child.type === AdminBreadcrumbs
	);

	const Main = Children.toArray(children).find(
		(child) => isValidElement(child) && child.type !== AdminBreadcrumbs
	);

	return (
		<>
			<AdminSidebar />
			<main className='w-full'>
				{Header}
				<AdminContent>{Main}</AdminContent>
			</main>
		</>
	);
};
