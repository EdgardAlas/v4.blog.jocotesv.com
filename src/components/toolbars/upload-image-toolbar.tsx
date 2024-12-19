'use client';

import { useToolbar } from '@/components/toolbars/toolbar-provider';
import { Button } from '@/components/ui/button';
import {
	Dialog,
	DialogClose,
	DialogContent,
	DialogFooter,
	DialogTitle,
	DialogTrigger,
} from '@/components/ui/dialog';
import { FormInput } from '@/components/ui/form/form-input';
import { FormProvider } from '@/components/ui/form/form-provider';
import { Input } from '@/components/ui/input';
import {
	Tooltip,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger,
} from '@/components/ui/tooltip';
import { zodResolver } from '@hookform/resolvers/zod';
import { ImageIcon } from 'lucide-react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

const addImageValidations = z.object({
	file: z
		.any()
		.refine((file) => file?.size < 1024 * 1024 * 2, {
			message: 'File size should be less than 2MB',
		})
		.refine((file) => file?.type.startsWith('image/'), {
			message: 'File should be an image',
		})
		.refine((file) => ['image/jpeg', 'image/png'].includes(file?.type), {
			message: 'File should be in jpeg or png format',
		})
		.refine((file) => file, {
			message: 'File is required',
		}),
	alt: z.string().min(1, { message: 'Alt is required' }),
});

export const UploadImageToolbar = () => {
	const { editor } = useToolbar();

	const [open, setOpen] = useState(false);

	const addImage = (values: z.infer<typeof addImageValidations>) => {
		const url = URL.createObjectURL(values.file);

		if (url) {
			editor?.chain().focus().setImage({ src: url, alt: values.alt }).run();
		}

		form.reset({
			file: undefined,
			alt: '',
		});

		document.getElementById('file')?.setAttribute('value', '');
		setOpen(false);
	};

	const form = useForm<z.infer<typeof addImageValidations>>({
		defaultValues: {
			file: undefined,
			alt: '',
		},
		resolver: zodResolver(addImageValidations),
	});

	return (
		<Dialog modal open={open} onOpenChange={setOpen}>
			<DialogTrigger asChild>
				<TooltipProvider>
					<Tooltip>
						<TooltipTrigger asChild>
							<button
								onClick={() => setOpen(true)}
								type='button'
								className='toggle-button'
							>
								<ImageIcon />
							</button>
						</TooltipTrigger>
						<TooltipContent>Upload Image</TooltipContent>
					</Tooltip>
				</TooltipProvider>
			</DialogTrigger>

			<DialogContent>
				<DialogTitle>Add Image</DialogTitle>
				<FormProvider
					className='flex flex-col gap-2'
					form={form}
					onSubmit={addImage}
				>
					<FormInput
						input={Input}
						type='file'
						name='file'
						value={undefined}
						onChange={(event) => {
							if (!event?.target?.files?.[0]) return;

							form.formState.errors.file = undefined;

							form.setValue('file', event?.target?.files?.[0]);
						}}
					/>

					<FormInput
						input={Input}
						type='text'
						name='alt'
						label='Alt Text'
						placeholder='Image Alt Text'
					/>

					<DialogFooter>
						<DialogClose asChild>
							<Button type='button' variant={'secondary'}>
								Cancel
							</Button>
						</DialogClose>
						<Button>Add Image</Button>
					</DialogFooter>
				</FormProvider>
			</DialogContent>
		</Dialog>
	);
};
