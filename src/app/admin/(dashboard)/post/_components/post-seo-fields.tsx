/* eslint-disable @next/next/no-img-element */
'use client';

import { Button } from '@/components/ui/button';
import {
	FormControl,
	FormDescription,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { TabsContent } from '@/components/ui/tabs';
import { Textarea } from '@/components/ui/textarea';
import { X } from 'lucide-react';
import { useFormContext } from 'react-hook-form';

export const PostSeoFields = () => {
	const form = useFormContext();

	return (
		<TabsContent value='content' className='space-y-3'>
			<FormField
				control={form.control}
				name='description'
				render={({ field }) => (
					<FormItem>
						<FormLabel>Description*</FormLabel>
						<FormControl>
							<Textarea placeholder='Post Description' {...field} />
						</FormControl>
						<FormMessage />
						<FormDescription>
							Recommended length: 50-160 characters.
						</FormDescription>
					</FormItem>
				)}
			/>

			<FormField
				control={form.control}
				name='image'
				render={({ field }) => (
					<FormItem>
						<FormLabel>Image</FormLabel>

						{typeof field.value === 'string' && field.value ? (
							<div className='relative w-full'>
								<img src={field.value} alt='Post Image' />
								<Button
									className='absolute right-1 top-1'
									size={'icon'}
									variant={'ghost'}
									onClick={() => {
										form.setValue('image', '');
									}}
								>
									<X className='text-primary' />
								</Button>
							</div>
						) : (
							<FormControl>
								<Input
									type='file'
									accept='image/*'
									ref={field.ref}
									onChange={(e) => {
										const file = e.target.files?.[0];
										if (file) {
											form.setValue('image', URL.createObjectURL(file));
										}
									}}
								/>
							</FormControl>
						)}

						<FormMessage />
						<FormDescription>
							Recommended size: 1200x630 pixels.
						</FormDescription>
					</FormItem>
				)}
			/>
		</TabsContent>
	);
};
