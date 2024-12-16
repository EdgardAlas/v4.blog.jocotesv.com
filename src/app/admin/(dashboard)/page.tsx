import { AdminBreadcrumbs } from '@/components/layout/admin-breadcrumbs';
import { SimpleCard } from '@/components/ui/card';

const DashboardHomePage = () => {
	return (
		<>
			<AdminBreadcrumbs />
			<SimpleCard>
				<h2 className='text-xl font-semibold'>Welcome to the dashboard</h2>
				<p>This site is under construction. Please check back later.</p>
			</SimpleCard>
		</>
	);
};

export default DashboardHomePage;
