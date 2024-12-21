'use client';

import { CrudTableOptions } from '@/components/ui/crud/crud-table-options';
import { ColumnDef } from '@tanstack/react-table';

interface AuthorRow {
	id: number;
	name: string;
	createdAt?: string;
	updatedAt?: string;
}

export const AuthorsColumns: ColumnDef<AuthorRow>[] = [
	{
		accessorKey: 'name',
		header: 'Name',
	},
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

export const mockAuthors: AuthorRow[] = [
	{
		id: 1,
		name: 'John Doe',
		createdAt: '2021-01-01',
		updatedAt: '2021-01-01',
	},
	{
		id: 2,
		name: 'Jane Doe',
		createdAt: '2021-01-01',
		updatedAt: '2021-01-01',
	},
	{
		id: 3,
		name: 'Alice',
		createdAt: '2021-01-01',
		updatedAt: '2021-01-01',
	},
	{
		id: 4,
		name: 'Bob',
		createdAt: '2021-01-01',
		updatedAt: '2021-01-01',
	},
];
