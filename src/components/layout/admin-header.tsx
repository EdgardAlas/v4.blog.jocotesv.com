import { SidebarTrigger } from '@/components/ui/sidebar';
import { DateTime } from 'luxon';

interface PageHeaderProps {
	title: string;
}

export const AdminHeader = ({ title }: PageHeaderProps) => {
	return (
		<header className='flex h-16 items-center justify-between gap-4 p-4'>
			<div className='flex items-center gap-4'>
				<SidebarTrigger />
				<h1 className='text-2xl font-bold'>{title}</h1>
			</div>
			<time dateTime={DateTime.now().toISO()} className='text-sm font-bold'>
				{DateTime.now().toFormat('LLL dd, yyyy')}
			</time>
		</header>
	);
};
