/* eslint-disable @next/next/no-img-element*/
'use client';

import { Editor } from '@/components/editor';
import { AdminCardTitle } from '@/components/layout/admin-card-title';
import { Button } from '@/components/ui/button';
import { SimpleCard } from '@/components/ui/card';
import DatePicker from '@/components/ui/date-picker';
import {
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from '@/components/ui/form';
import { FormProvider } from '@/components/ui/form/form-provider';
import { Input } from '@/components/ui/input';
import { MultiSelect } from '@/components/ui/multi-select';
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { zodResolver } from '@hookform/resolvers/zod';
import { Trash } from 'lucide-react';
import { useForm } from 'react-hook-form';
import slugify from 'slugify';
import { z } from 'zod';

const postSchema = z
	.object({
		title: z.string().nonempty("Title can't be empty"),
		content: z.string().nonempty("Content can't be empty"),
		image: z.string(),
		slug: z.string().nonempty("Slug can't be empty"),
		description: z.string().nonempty("Description can't be empty"),
		id: z.string(),
		categories: z.array(z.string()),
		status: z.enum(['draft', 'published']),
		publicationDate: z.date(),
	})
	.refine(
		(data) => {
			if (data.status === 'published' && !data.publicationDate) {
				return false;
			}

			return true;
		},
		{
			message: 'Publication date is required for published posts',
			path: ['publicationDate'],
		}
	);

export const PostEditorForm = () => {
	const form = useForm({
		defaultValues: {
			title: '',
			content: `
				<h1>Post Title</h1>
			`,
			image: '',
			slug: '',
			description: '',
			id: '1',
			categories: [],
			status: 'draft',
			publicationDate: new Date(),
		},
		resolver: zodResolver(postSchema),
	});

	const id = form.watch('id');

	return (
		<FormProvider
			form={form}
			onSubmit={(data) => {
				console.log(data);
			}}
		>
			<div className='flex flex-col gap-4 md:max-w-[calc(100dvw-255px-32px)] xl:max-w-[unset] xl:flex-row xl:items-start'>
				<SimpleCard className='order-2 flex-1 overflow-y-auto xl:order-1 xl:max-h-[calc(100dvh-64px-48px)]'>
					<AdminCardTitle title={id ? 'Edit Post' : 'Create Post'} />

					<FormField
						control={form.control}
						name='content'
						render={({ field }) => (
							<FormItem>
								<Editor
									value={field.value}
									onChange={(e) => field.onChange(e.target.value)}
								/>
								<FormMessage />
							</FormItem>
						)}
					/>
				</SimpleCard>

				<SimpleCard className='order-1 flex-1 bg-white xl:order-2 xl:h-[calc(100dvh-64px-48px)] xl:max-w-[400px] xl:overflow-y-auto'>
					<div className='flex flex-col gap-2 md:flex-row md:items-center md:justify-between'>
						<Button
							type='submit'
							className='w-full'
							loading={form.formState.isSubmitting}
						>
							Save
						</Button>

						<Button className='w-full' variant='secondary'>
							Preview
						</Button>
					</div>

					<div className='flex flex-col gap-4'>
						<FormField
							control={form.control}
							name='status'
							render={({ field }) => (
								<FormItem>
									<FormLabel>Status*</FormLabel>
									<Select
										onValueChange={field.onChange}
										defaultValue={field.value}
									>
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
									<Input type='text' placeholder='Post Title' {...field} />
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
										<Input
											type='text'
											className='w-full flex-1'
											placeholder='Post Slug'
											{...field}
										/>
										<Button
											size={'sm'}
											onClick={() =>
												form.setValue(
													'slug',
													slugify(form.getValues('title'), { lower: true })
												)
											}
										>
											Generate
										</Button>
									</div>
									<FormMessage />
								</FormItem>
							)}
						/>

						<FormField
							control={form.control}
							name='description'
							render={({ field }) => (
								<FormItem>
									<FormLabel>Description*</FormLabel>
									<Textarea placeholder='Post Description' {...field} />
									<FormMessage />
								</FormItem>
							)}
						/>
						<FormField
							control={form.control}
							name='categories'
							render={({ field }) => (
								<FormItem>
									<FormLabel>Categories</FormLabel>
									<MultiSelect
										options={[
											{ label: 'Category 1', value: 'category-1' },
											{ label: 'Category 2', value: 'category-2' },
											{ label: 'Category 3', value: 'category-3' },
										]}
										onChange={field.onChange}
										defaultValue={field.value}
									/>
									<FormMessage />
								</FormItem>
							)}
						/>

						<FormField
							control={form.control}
							name='publicationDate'
							render={({ field }) => (
								<FormItem className='flex flex-col'>
									<FormLabel>Publication Date</FormLabel>
									<DatePicker value={field.value} onChange={field.onChange} />
									<FormMessage />
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
												className='absolute right-3 top-3'
												size={'icon'}
												onClick={() => {
													form.setValue('image', '');
												}}
												variant={'destructive'}
											>
												<Trash />
											</Button>
										</div>
									) : (
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
									)}

									<FormMessage />
								</FormItem>
							)}
						/>
					</div>
				</SimpleCard>
			</div>
		</FormProvider>
	);
};
