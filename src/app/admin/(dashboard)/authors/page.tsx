import { UsersModal } from '@/app/admin/(dashboard)/users/_containers/users-modal';
import { AdminBreadcrumbs } from '@/components/layout/admin-breadcrumbs';
import { AdminCardTitle } from '@/components/layout/admin-card-title';
import { SimpleCard } from '@/components/ui/card';
import { CrudOpenButton } from '@/components/ui/crud/crud-open-button';
import { LoadDataTable } from '@/components/ui/data-table/load-data-table';
import { mockAuthors, AuthorsColumns } from './_containers/authors-columns';

const getUsers = async () => {
	await new Promise((resolve) => setTimeout(resolve, 1000));
	return Promise.resolve({
		data: mockAuthors,
		totalPages: 1,
	});
};

const AuthorsPage = () => {
	return (
		<>
			<AdminBreadcrumbs
				breadcrumbs={[{ title: 'Authors', link: '/admin/authors' }]}
			/>

			<SimpleCard>
				<AdminCardTitle title='Authors Management'>
					<CrudOpenButton autoFocus>Add Author</CrudOpenButton>
				</AdminCardTitle>

				<LoadDataTable promise={getUsers} columns={AuthorsColumns} />
			</SimpleCard>

			<UsersModal />
		</>
	);
};

export default AuthorsPage;
