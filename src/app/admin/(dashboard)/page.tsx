import { AdminHeader } from '@/components/layout/admin-header';
import { SimpleCard } from '@/components/ui/card';

const DashboardHomePage = () => {
	return (
		<>
			<AdminHeader title='Dashboard' />
			<SimpleCard>
				<p>Content</p>
			</SimpleCard>
		</>
	);
};

export default DashboardHomePage;
