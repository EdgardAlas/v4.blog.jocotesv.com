import { cn } from '@/lib/utils';
import React from 'react';

export const AdminContent = ({ children }: { children: React.ReactNode }) => {
	return (
		<div
			className={cn(
				'flex max-h-[calc(100dvh-4rem)] w-full flex-col gap-4 p-4 md:max-w-[calc(100vw-16rem)]'
			)}
		>
			{children}
		</div>
	);
};
