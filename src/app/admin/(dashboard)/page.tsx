import { AdminHeader } from '@/components/layout/admin-header';
import { Button } from '@/components/ui/button';
import { SimpleCard } from '@/components/ui/card';

const DashboardHomePage = async () => {
	return (
		<>
			<AdminHeader title='Dashboard' />
			<SimpleCard>
				<div className='flex items-center justify-between'>
					<h2 className='text-xl font-semibold'>Welcome to the dashboard</h2>
					<Button>Click me</Button>
				</div>
			</SimpleCard>
		</>
	);
};

export default DashboardHomePage;
