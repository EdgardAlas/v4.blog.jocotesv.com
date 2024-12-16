'use client';

import {
	ColumnDef,
	flexRender,
	getCoreRowModel,
	useReactTable,
} from '@tanstack/react-table';

import { DataTableInputSearch } from '@/components/ui/data-table/data-table-input-search';
import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from '@/components/ui/table';
import {
	DataTablePagination,
	DataTablePaginationProps,
} from './data-table-pagination';

interface DataTableProps<TData, TValue> extends DataTablePaginationProps {
	columns: ColumnDef<TData, TValue>[];
	data: TData[];
	hasSearch?: boolean;
}

export function DataTable<TData, TValue>({
	columns,
	data,
	totalPages,
	pageSizeOptions,
	hasSearch = true,
}: DataTableProps<TData, TValue>) {
	const table = useReactTable({
		data,
		columns,
		getCoreRowModel: getCoreRowModel(),
	});

	return (
		<div>
			{hasSearch && <DataTableInputSearch />}

			<div className='overflow-hidden rounded-md border'>
				<Table>
					<TableHeader>
						{table.getHeaderGroups().map((headerGroup) => (
							<TableRow key={headerGroup.id}>
								{headerGroup.headers.map((header) => {
									return (
										<TableHead key={header.id}>
											{header.isPlaceholder
												? null
												: flexRender(
														header.column.columnDef.header,
														header.getContext()
													)}
										</TableHead>
									);
								})}
							</TableRow>
						))}
					</TableHeader>
					<TableBody>
						{table.getRowModel().rows?.length ? (
							table.getRowModel().rows.map((row) => (
								<TableRow
									key={row.id}
									data-state={row.getIsSelected() && 'selected'}
								>
									{row.getVisibleCells().map((cell) => (
										<TableCell key={cell.id}>
											{flexRender(
												cell.column.columnDef.cell,
												cell.getContext()
											)}
										</TableCell>
									))}
								</TableRow>
							))
						) : (
							<TableRow>
								<TableCell
									colSpan={columns.length}
									className='h-24 text-center'
								>
									No results.
								</TableCell>
							</TableRow>
						)}
					</TableBody>
				</Table>
			</div>
			{totalPages && (
				<div className='mt-3'>
					<DataTablePagination
						totalPages={totalPages}
						pageSizeOptions={pageSizeOptions}
					/>
				</div>
			)}
		</div>
	);
}
