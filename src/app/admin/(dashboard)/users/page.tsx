import {
	mockUsers,
	UsersColumns,
} from '@/app/admin/(dashboard)/users/_containers/users-columns';
import { AdminBreadcrumbs } from '@/components/layout/admin-breadcrumbs';
import { AdminCardTitle } from '@/components/layout/admin-card-title';
import { Button } from '@/components/ui/button';
import { SimpleCard } from '@/components/ui/card';
import { LoadDataTable } from '@/components/ui/data-table/load-data-table';
import { generateBreadcrumbs } from '@/utils/generate-breadcrumbs';

const getUsers = async () => {
	await new Promise((resolve) => setTimeout(resolve, 1000));
	return Promise.resolve({
		data: mockUsers,
		totalPages: 1,
	});
};

const UsersPage = () => {
	return (
		<>
			<AdminBreadcrumbs
				breadcrumbs={generateBreadcrumbs([
					{ title: 'Users', link: '/admin/dashboard/users' },
				])}
			/>

			<SimpleCard>
				<AdminCardTitle title='Users Management'>
					<Button autoFocus>Add User</Button>
				</AdminCardTitle>

				<LoadDataTable promise={getUsers} columns={UsersColumns} />
			</SimpleCard>
		</>
	);
};

export default UsersPage;
