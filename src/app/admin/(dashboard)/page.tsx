import { AdminHeader } from '@/components/layout/admin-header';
import { SimpleCard } from '@/components/ui/card';

const DashboardHomePage = () => {
	return (
		<>
			<AdminHeader title='Dashboard' />
			<SimpleCard>
				<h2 className='text-xl font-semibold'>Welcome to the dashboard</h2>
				<p>This site is under construction. Please check back later.</p>
			</SimpleCard>
		</>
	);
};

export default DashboardHomePage;
