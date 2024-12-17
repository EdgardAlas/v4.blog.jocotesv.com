import { cn } from '@/lib/utils';
import React from 'react';

export const AdminContent = ({ children }: { children: React.ReactNode }) => {
	return (
		<div
			className={cn(
				'flex w-full flex-col gap-4 p-4 md:max-w-[calc(100dvw-16rem)]'
			)}
		>
			{children}
		</div>
	);
};
