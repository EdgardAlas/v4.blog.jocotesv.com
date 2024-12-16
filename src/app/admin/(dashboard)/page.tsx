'use client';

import { AdminHeader } from '@/components/layout/admin-header';
import { Button } from '@/components/ui/button';
import { SimpleCard } from '@/components/ui/card';
import { useConfirm } from '@/components/ui/confirm-dialog';

const DashboardHomePage = () => {
	const confirm = useConfirm();
	return (
		<>
			<AdminHeader title='Dashboard' />
			<SimpleCard>
				<div className='flex items-center justify-between'>
					<h2 className='text-xl font-semibold'>Welcome to the dashboard</h2>
					<Button
						onClick={async () => {
							await confirm({
								title: 'Confirm Action',
								description: 'Are you sure you want to proceed?',
							});
						}}
					>
						Click me
					</Button>
				</div>
			</SimpleCard>
		</>
	);
};

export default DashboardHomePage;
