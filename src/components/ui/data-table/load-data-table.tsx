import { DataTable } from '@/components/ui/data-table/data-table';
import { DataTableSkeleton } from '@/components/ui/data-table/data-table-skeleton';
import { ColumnDef } from '@tanstack/react-table';
import React, { Suspense } from 'react';

export interface WithPagination<T> {
	data: T;
	totalPages: number;
}

interface LoadDataTableProps<TData, TValue> {
	promise: () => Promise<WithPagination<TData[]>>;
	columns: ColumnDef<TData, TValue>[];
}

export const LoadDataTable = <TData, TValue>({
	promise,
	columns,
}: LoadDataTableProps<TData, TValue>) => {
	return (
		<>
			<Suspense fallback={<DataTableSkeleton />}>
				<Table promise={promise} columns={columns} />
			</Suspense>
		</>
	);
};

export const Table = async <TData, TValue>({
	promise,
	columns,
}: LoadDataTableProps<TData, TValue>) => {
	const data = await promise();
	return (
		<DataTable
			data={data.data}
			columns={columns}
			totalPages={data.totalPages}
		/>
	);
};
