'use client';

import {
	SidebarContent,
	SidebarGroup,
	SidebarGroupLabel,
	SidebarMenu,
	SidebarMenuButton,
	SidebarMenuItem,
} from '@/components/ui/sidebar';
import { menu } from '@/config/menu';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export const AdminSidebarMenu = () => {
	const pathname = usePathname();

	return (
		<SidebarContent>
			{menu.map((group) => (
				<SidebarGroup key={group.title}>
					<SidebarGroupLabel>{group.title}</SidebarGroupLabel>
					{group.options.map((option) => (
						<SidebarMenu key={option.title}>
							<SidebarMenuItem key={option.title}>
								<SidebarMenuButton asChild isActive={pathname === option.href}>
									<Link href={option.href}>
										<option.icon />
										{option.title}
									</Link>
								</SidebarMenuButton>
							</SidebarMenuItem>
						</SidebarMenu>
					))}
				</SidebarGroup>
			))}
		</SidebarContent>
	);
};
