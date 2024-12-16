'use client';

import { Input } from '@/components/ui/input';
import { cn } from '@/lib/utils';
import { useQueryState } from 'nuqs';
import React, { useRef } from 'react';

export const DataTableInputSearch = ({
	direction = 'start',
	className,
	children,
}: {
	direction?: 'start' | 'end';
	className?: string;
	children?: React.ReactNode;
}) => {
	const [search, setSearch] = useQueryState('search', {
		clearOnDefault: true,
		defaultValue: '',
		shallow: false,
		throttleMs: 500,
	});

	const timeoutRef = useRef<NodeJS.Timeout>(null);

	return (
		<div
			className={cn(
				`mb-3 flex items-center`,
				{
					'justify-start': direction === 'start',
					'justify-end': direction === 'end',
				},
				className
			)}
		>
			<Input
				type='search'
				placeholder='Search...'
				className='max-w-md'
				defaultValue={search}
				onChange={(e) => {
					if (timeoutRef.current) {
						clearTimeout(timeoutRef.current);
					}

					timeoutRef.current = setTimeout(() => {
						setSearch(e.target.value);
					}, 500);
				}}
			/>
			{children}
		</div>
	);
};
