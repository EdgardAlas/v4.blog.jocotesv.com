'use client';

import { Button, ButtonProps } from '@/components/ui/button';
import { useCrudModalStore } from '@/context/crud-modal.context';
import { Plus } from 'lucide-react';

export const CrudOpenButton = ({ onClick, ...props }: ButtonProps) => {
	const { setOpen } = useCrudModalStore();
	return (
		<Button
			icon={Plus}
			{...props}
			onClick={(e) => {
				if (onClick) onClick(e);

				setOpen(true);
			}}
		/>
	);
};
