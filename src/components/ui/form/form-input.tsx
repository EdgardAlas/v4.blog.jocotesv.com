'use client';

import {
	FormControl,
	FormDescription,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from '@/components/ui/form';
import { cn } from '@/lib/utils';
import { ElementType } from 'react';
import { useFormContext } from 'react-hook-form';

type FormInputProps<T, E extends React.ElementType> = {
	input: E;
	name: T;
	label?: string | React.ReactNode;
	description?: string;
	classNames?: {
		container?: string;
		label?: string;
		input?: string;
		description?: string;
		error?: string;
	};
	noForm?: boolean;
} & Omit<React.ComponentProps<E>, 'name'>;

export const FormInput = <T, E extends React.ElementType>({
	input,
	name,
	className,
	label,
	description,
	classNames,
	...rest
}: FormInputProps<T, E>) => {
	const Component: ElementType = input;

	const form = useFormContext();

	return (
		<FormField
			control={form.control}
			name={name as string}
			render={({ field, fieldState }) => (
				<FormItem
					className={cn('flex flex-col gap-1 space-y-0', classNames?.container)}
				>
					{typeof label === 'string' ? (
						<FormLabel className={cn(classNames?.label)}>{label}</FormLabel>
					) : (
						label
					)}
					<FormControl>
						<Component
							{...field}
							{...rest}
							className={cn(
								className,
								{
									'border-destructive focus-visible:ring-1 focus-visible:ring-destructive':
										fieldState.error,
								},
								classNames?.input
							)}
						/>
					</FormControl>
					<FormDescription className={cn(classNames?.description)}>
						{description}
					</FormDescription>
					<FormMessage
						className={cn('text-sm text-destructive', classNames?.error)}
					/>
				</FormItem>
			)}
		/>
	);
};
