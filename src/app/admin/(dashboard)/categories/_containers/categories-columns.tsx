'use client';

import { CrudTableOptions } from '@/components/ui/crud/crud-table-options';
import { ColumnDef } from '@tanstack/react-table';

interface CategoryRow {
	id: number;
	name: string;
	posts?: number;
	createdAt?: string;
	updatedAt?: string;
}

export const CategoriesColumns: ColumnDef<CategoryRow>[] = [
	{
		accessorKey: 'name',
		header: 'Name',
	},
	{ accessorKey: 'posts', header: 'Posts' },
	{ accessorKey: 'createdAt', header: 'Created At' },
	{ accessorKey: 'updatedAt', header: 'Update At' },
	{
		accessorKey: 'id',
		header: '',
		cell({ row: { original } }) {
			return (
				<CrudTableOptions
					getEditData={() =>
						new Promise((resolve) =>
							setTimeout(() => {
								resolve(original);
							}, 1000)
						)
					}
					deleteData={() => {
						return new Promise((resolve) => setTimeout(resolve, 1000));
					}}
				/>
			);
		},
	},
];

export const mockCategories: CategoryRow[] = [
	{
		id: 1,
		name: 'JavaScript',
		posts: 10,
		createdAt: '2021-01-01',
		updatedAt: '2021-01-01',
	},
	{
		id: 2,
		name: 'TypeScript',
		posts: 10,
		createdAt: '2021-01-01',
		updatedAt: '2021-01-01',
	},
	{
		id: 3,
		name: 'React',
		posts: 10,
		createdAt: '2021-01-01',
		updatedAt: '2021-01-01',
	},
	{
		id: 4,
		name: 'Vue',
		posts: 10,
		createdAt: '2021-01-01',
		updatedAt: '2021-01-01',
	},
];
