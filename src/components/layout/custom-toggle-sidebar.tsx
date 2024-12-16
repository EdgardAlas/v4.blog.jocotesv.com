'use client';

import { Button } from '@/components/ui/button';
import { useSidebar } from '@/components/ui/sidebar';
import { MenuIcon } from 'lucide-react';

export const CustomToggleSidebar = () => {
	const { toggleSidebar } = useSidebar();

	return (
		<Button
			size={'icon'}
			variant={'ghost'}
			onClick={toggleSidebar}
			aria-label='Toggle Sidebar'
		>
			<MenuIcon size={24} />
		</Button>
	);
};
