import { AdminLayout } from '@/components/layout/admin-layout';
import { SidebarProvider } from '@/components/ui/sidebar';
import React from 'react';

const Layout = ({ children }: { children: React.ReactNode }) => {
	return (
		<SidebarProvider>
			<AdminLayout>{children}</AdminLayout>
		</SidebarProvider>
	);
};

export default Layout;
