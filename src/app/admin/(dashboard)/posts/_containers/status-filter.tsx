'use client';

import { DataTableInputSearch } from '@/components/ui/data-table/data-table-input-search';
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from '@/components/ui/select';
import { useQueryState } from 'nuqs';
import React from 'react';

export const StatusFilter = () => {
	const [status, setStatus] = useQueryState('status', {
		defaultValue: 'all',
		shallow: false,
	});
	return (
		<DataTableInputSearch
			direction='end'
			className='flex-col-reverse gap-2 md:flex-row-reverse md:justify-start'
		>
			<Select defaultValue={status} onValueChange={setStatus}>
				<SelectTrigger className='max-w-md md:w-[100px]'>
					<SelectValue placeholder='Filter by status' />
				</SelectTrigger>
				<SelectContent>
					<SelectItem value='all'>All</SelectItem>
					<SelectItem value='published'>Published</SelectItem>
					<SelectItem value='draft'>Draft</SelectItem>
				</SelectContent>
			</Select>
		</DataTableInputSearch>
	);
};
