import { UsersModal } from '@/app/admin/(dashboard)/users/_containers/users-modal';
import { AdminBreadcrumbs } from '@/components/layout/admin-breadcrumbs';
import { AdminCardTitle } from '@/components/layout/admin-card-title';
import { SimpleCard } from '@/components/ui/card';
import { CrudOpenButton } from '@/components/ui/crud/crud-open-button';
import { LoadDataTable } from '@/components/ui/data-table/load-data-table';
import {
	mockCategories,
	CategoriesColumns,
} from './_containers/categories-columns';

const getCategories = async () => {
	await new Promise((resolve) => setTimeout(resolve, 1000));
	return Promise.resolve({
		data: mockCategories,
		totalPages: 1,
	});
};

const CategoriesPage = () => {
	return (
		<>
			<AdminBreadcrumbs
				breadcrumbs={[
					{ title: 'Categories', link: '/admin/dashboard/categories' },
				]}
			/>

			<SimpleCard>
				<AdminCardTitle title='Categories Management'>
					<CrudOpenButton autoFocus>Add Category</CrudOpenButton>
				</AdminCardTitle>

				<LoadDataTable promise={getCategories} columns={CategoriesColumns} />
			</SimpleCard>

			<UsersModal />
		</>
	);
};

export default CategoriesPage;
