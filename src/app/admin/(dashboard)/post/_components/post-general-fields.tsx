'use client';

import { Button } from '@/components/ui/button';
import DatePicker from '@/components/ui/date-picker';
import {
	FormControl,
	FormDescription,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from '@/components/ui/select';
import { TabsContent } from '@/components/ui/tabs';
import { RefreshCw } from 'lucide-react';
import { useFormContext } from 'react-hook-form';
import slugify from 'slugify';
import { toast } from 'sonner';

export const PostGeneralFields = () => {
	const form = useFormContext();

	return (
		<TabsContent value='general' className='space-y-3'>
			<FormField
				control={form.control}
				name='status'
				render={({ field }) => (
					<FormItem>
						<FormLabel>Status*</FormLabel>
						<Select onValueChange={field.onChange} defaultValue={field.value}>
							<FormControl>
								<SelectTrigger>
									<SelectValue placeholder='Select an option' />
								</SelectTrigger>
							</FormControl>
							<SelectContent>
								<SelectItem value='draft'>Draft</SelectItem>
								<SelectItem value='published'>Published</SelectItem>
							</SelectContent>
						</Select>
						<FormMessage />
					</FormItem>
				)}
			/>

			<FormField
				control={form.control}
				name='title'
				render={({ field }) => (
					<FormItem>
						<FormLabel>Title*</FormLabel>
						<FormControl>
							<Input type='text' placeholder='Post Title' {...field} />
						</FormControl>
						<FormMessage />
					</FormItem>
				)}
			/>

			<FormField
				control={form.control}
				name='slug'
				render={({ field }) => (
					<FormItem className='flex-1'>
						<FormLabel>Slug*</FormLabel>
						<div className='flex items-center gap-2'>
							<FormControl>
								<Input
									type='text'
									className='w-full flex-1'
									placeholder='Post Slug'
									{...field}
								/>
							</FormControl>
							<Button
								type='button'
								size={'sm'}
								icon={RefreshCw}
								onClick={() => {
									const title = form.getValues('title');

									if (!title) {
										return toast.error('Please enter a title first.');
									}

									form.setValue('slug', slugify(title, { lower: true }));
								}}
							>
								Generate
							</Button>
						</div>
						<FormMessage />
						<FormDescription>
							Slug is the URL-friendly version of the title. It is usually all
							lowercase and contains only letters, numbers, and hyphens.
						</FormDescription>
					</FormItem>
				)}
			/>

			<FormField
				control={form.control}
				name='date'
				render={({ field }) => (
					<FormItem>
						<FormLabel>Post created date*</FormLabel>
						<FormControl>
							<DatePicker value={field.value} onChange={field.onChange} />
						</FormControl>
						<FormMessage />
						<FormDescription>
							This date will be used to display the post in the blog.
						</FormDescription>
					</FormItem>
				)}
			/>

			<FormField
				control={form.control}
				name='publicationDate'
				render={({ field }) => (
					<FormItem>
						<FormLabel>Publication Date</FormLabel>
						<FormControl>
							<DatePicker value={field.value} onChange={field.onChange} />
						</FormControl>
						<FormMessage />
						<FormDescription>
							Leave empty to publish immediately if the status is set to
							published.
						</FormDescription>
					</FormItem>
				)}
			/>
		</TabsContent>
	);
};
