import { SimpleCardTitle } from '@/components/ui/card';
import React from 'react';

interface AdminCardTitleProps {
	title: string;
	children?: React.ReactNode;
}

export const AdminCardTitle = ({ title, children }: AdminCardTitleProps) => {
	return (
		<div className='flex items-center justify-between'>
			<SimpleCardTitle title={title} />
			{children}
		</div>
	);
};
