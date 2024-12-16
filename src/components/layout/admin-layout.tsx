import { AdminContent } from '@/components/layout/admin-content';
import { AdminHeader } from '@/components/layout/admin-header';
import { AdminSidebar } from '@/components/layout/admin-sidebar';
import { Children, isValidElement } from 'react';

export const AdminLayout = ({ children }: { children: React.ReactNode }) => {
	const Header = Children.toArray(children).find(
		(child) => isValidElement(child) && child.type === AdminHeader
	);

	const Main = Children.toArray(children).find(
		(child) => isValidElement(child) && child.type !== AdminHeader
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
