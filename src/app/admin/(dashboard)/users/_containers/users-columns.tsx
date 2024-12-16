'use client';

import { CrudTableOptions } from '@/components/ui/crud/crud-table-options';
import { cn } from '@/lib/utils';
import { ColumnDef } from '@tanstack/react-table';

interface UserRow {
	id: number;
	name: string;
	email: string;
	role: 'Super Admin' | 'Admin' | 'User' | 'Editor';
	status: 'Active' | 'Inactive';
}

export const UsersColumns: ColumnDef<UserRow>[] = [
	{
		accessorKey: 'name',
		header: 'Name',
	},
	{
		accessorKey: 'email',
		header: 'Email',
	},
	{
		accessorKey: 'role',
		header: 'Role',
		cell(props) {
			return (
				<p
					className={cn(
						'w-fit rounded-full px-2 py-1 text-center text-xs font-semibold text-white',
						{
							'bg-red-500': props.row.original.role === 'Super Admin',
							'bg-blue-500': props.row.original.role === 'Admin',
							'bg-green-500': props.row.original.role === 'User',
							'bg-yellow-500': props.row.original.role === 'Editor',
						}
					)}
				>
					{props.row.original.role}
				</p>
			);
		},
	},
	{
		accessorKey: 'status',
		header: 'Status',
		cell(props) {
			return (
				<span
					className={cn(
						'rounded-full px-2 py-1 text-xs font-semibold text-white',
						{
							'bg-green-500': props.row.original.status === 'Active',
							'bg-red-500': props.row.original.status === 'Inactive',
						}
					)}
				>
					{props.row.original.status}
				</span>
			);
		},
	},
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

export const mockUsers: UserRow[] = [
	{
		id: 1,
		name: 'John Doe',
		email: 'user1@test.com',
		role: 'Super Admin',
		status: 'Active',
	},
	{
		id: 2,
		name: 'Jane Doe',
		email: 'user2@test.com',
		role: 'User',
		status: 'Active',
	},
	{
		id: 3,
		name: 'Alice',
		email: 'user3@test.com',
		role: 'Admin',
		status: 'Inactive',
	},
	{
		id: 4,
		name: 'Bob',
		email: 'user4@test.com',
		role: 'Editor',
		status: 'Active',
	},
];
