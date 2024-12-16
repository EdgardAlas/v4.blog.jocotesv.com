import { UsersModal } from '@/app/admin/(dashboard)/users/_containers/users-modal';
import { AdminBreadcrumbs } from '@/components/layout/admin-breadcrumbs';
import { AdminCardTitle } from '@/components/layout/admin-card-title';
import { SimpleCard } from '@/components/ui/card';
import { CrudOpenButton } from '@/components/ui/crud/crud-open-button';
import { LoadDataTable } from '@/components/ui/data-table/load-data-table';
import { mockUsers, UsersColumns } from './_containers/users-columns';

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
				breadcrumbs={[{ title: 'Users', link: '/admin/dashboard/users' }]}
			/>

			<SimpleCard>
				<AdminCardTitle title='Users Management'>
					<CrudOpenButton autoFocus>Add User</CrudOpenButton>
				</AdminCardTitle>

				<LoadDataTable promise={getUsers} columns={UsersColumns} />
			</SimpleCard>

			<UsersModal />
		</>
	);
};

export default UsersPage;
