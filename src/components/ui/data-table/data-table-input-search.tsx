import { Input } from '@/components/ui/input';
import { useQueryState } from 'nuqs';
import React, { useRef } from 'react';

export const DataTableInputSearch = () => {
	const [search, setSearch] = useQueryState('search', {
		clearOnDefault: true,
		defaultValue: '',
		shallow: false,
		throttleMs: 500,
	});

	const timeoutRef = useRef<NodeJS.Timeout>(null);

	return (
		<Input
			type='search'
			placeholder='Search...'
			className='mb-3 max-w-md'
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
	);
};
