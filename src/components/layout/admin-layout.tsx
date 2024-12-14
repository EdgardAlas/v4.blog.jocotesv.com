import { AdminHeader } from '@/components/layout/admin-header';
import { AdminSidebar } from '@/components/layout/admin-sidebar';
import { SidebarProvider } from '@/components/ui/sidebar';
import { Children, isValidElement } from 'react';

export const AdminLayout = ({ children }: { children: React.ReactNode }) => {
	const Header = Children.toArray(children).find(
		(child) => isValidElement(child) && child.type === AdminHeader
	);

	const Main = Children.toArray(children).find(
		(child) => isValidElement(child) && child.type !== AdminHeader
	);

	return (
		<SidebarProvider>
			<AdminSidebar />
			<main className='w-full'>
				{Header}
				<div className='flex max-h-[calc(100dvh-4rem)] flex-col gap-4 overflow-auto p-4'>
					{Main}
				</div>
			</main>
		</SidebarProvider>
	);
};
