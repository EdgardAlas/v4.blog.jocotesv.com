'use client';

import {
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from '@/components/ui/form';
import { MultiSelect } from '@/components/ui/multi-select';
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from '@/components/ui/select';
import { TabsContent } from '@/components/ui/tabs';
import { useFormContext } from 'react-hook-form';

export const PostClasificationFields = () => {
	const form = useFormContext();

	return (
		<TabsContent value='classification' className='space-y-3'>
			<FormField
				control={form.control}
				name='categories'
				render={({ field }) => (
					<FormItem>
						<FormLabel>Categories</FormLabel>
						<FormControl>
							<MultiSelect
								options={[
									{ label: 'Category 1', value: 'category-1' },
									{ label: 'Category 2', value: 'category-2' },
									{ label: 'Category 3', value: 'category-3' },
								]}
								onChange={field.onChange}
								defaultValue={field.value}
							/>
						</FormControl>
						<FormMessage />
					</FormItem>
				)}
			/>

			<FormField
				control={form.control}
				name='author'
				render={({ field }) => (
					<FormItem>
						<FormLabel>Author</FormLabel>
						<Select onValueChange={field.onChange} defaultValue={field.value}>
							<FormControl>
								<SelectTrigger>
									<SelectValue placeholder='Select an option' />
								</SelectTrigger>
							</FormControl>
							<SelectContent>
								<SelectItem value='author-1'>Author 1</SelectItem>
								<SelectItem value='author-2'>Author 2</SelectItem>
								<SelectItem value='author-3'>Author 3</SelectItem>
							</SelectContent>
						</Select>
						<FormMessage />
					</FormItem>
				)}
			/>
		</TabsContent>
	);
};
