import {
	Book,
	ChartBar,
	Home,
	Info,
	LucideIcon,
	Settings,
	Users,
} from 'lucide-react';

interface MenuOption {
	title: string;
	icon: LucideIcon;
	href: string;
}

interface MenuGroup {
	title: string;
	options: MenuOption[];
}

export const menu: MenuGroup[] = [
	{
		title: 'Dashboard',

		options: [
			{
				title: 'Home',
				icon: Home,
				href: '/admin',
			},
		],
	},
	{
		title: 'Blog',
		options: [
			{
				title: 'Posts',
				icon: Book,
				href: '/admin/posts',
			},
			{
				title: 'Categories',
				icon: Info,
				href: '/admin/categories',
			},
		],
	},
	{
		title: 'Analytics',
		options: [
			{
				title: 'Overview',
				icon: ChartBar,
				href: '/admin/analytics',
			},
		],
	},
	{
		title: 'Settings',
		options: [
			{
				title: 'Users',
				icon: Users,
				href: '/admin/users',
			},
			{
				title: 'General',
				icon: Settings,
				href: '/admin/settings',
			},
		],
	},
];
