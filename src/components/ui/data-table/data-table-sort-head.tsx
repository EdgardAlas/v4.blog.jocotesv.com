'use client';

import { Button } from '@/components/ui/button';
import { ArrowDown, ArrowUp, ArrowUpDown } from 'lucide-react';
import { parseAsJson, useQueryState } from 'nuqs';
import React from 'react';
import { z } from 'zod';

interface DataTableSortHeadProps {
	children: React.ReactNode;
	id: string;
}

const schema = z.record(
	z.string(),
	z.union([z.literal('asc'), z.literal('desc')]).optional()
);

export const DataTableSortHead = ({ children, id }: DataTableSortHeadProps) => {
	const [sortDirection, setSortDirection] = useQueryState(
		'sort',
		parseAsJson(schema.parse).withDefault({})
	);

	return (
		<Button
			variant='transparent'
			onClick={() => {
				setSortDirection((prev) => {
					if (prev[id] === 'asc') {
						return { ...prev, [id]: 'desc' };
					}

					if (prev[id] === 'desc') {
						return { ...prev, [id]: undefined };
					}

					return { ...prev, [id]: 'asc' };
				});
			}}
		>
			{children}

			{sortDirection[id] === 'asc' && <ArrowUp className='ml-2 h-4 w-4' />}

			{sortDirection[id] === 'desc' && <ArrowDown className='ml-2 h-4 w-4' />}

			{sortDirection[id] === undefined && (
				<ArrowUpDown className='ml-2 h-4 w-4' />
			)}
		</Button>
	);
};
