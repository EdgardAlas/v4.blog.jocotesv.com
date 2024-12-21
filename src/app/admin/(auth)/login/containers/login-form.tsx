'use client';

import { Button } from '@/components/ui/button';
import {
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from '@/components/ui/form';
import { FormProvider } from '@/components/ui/form/form-provider';
import { Input } from '@/components/ui/input';
import { PasswordInput } from '@/components/ui/password-input';
import Link from 'next/link';
import { useForm } from 'react-hook-form';
import { LoginSchema, loginSchemaResolver } from '../_lib/login.schema';
import { LogInIcon } from 'lucide-react';

export function LoginForm() {
	const form = useForm<LoginSchema>({
		defaultValues: {
			email: '',
			password: '',
		},
		resolver: loginSchemaResolver,
	});

	return (
		<FormProvider
			form={form}
			className='flex flex-col gap-6 rounded-md bg-white p-4 shadow-md md:p-6'
			onSubmit={(data) => {
				console.log(data);
			}}
		>
			<div className='flex flex-col items-center gap-2 text-center'>
				<h1 className='text-2xl font-bold'>Login to your account</h1>
			</div>
			<div className='grid gap-4'>
				<FormField
					control={form.control}
					name='email'
					render={({ field }) => (
						<FormItem>
							<FormLabel>Email</FormLabel>
							<Input {...field} type='email' autoFocus />
							<FormMessage />
						</FormItem>
					)}
				/>

				<FormField
					control={form.control}
					name='password'
					render={({ field }) => (
						<FormItem>
							<div className='flex items-center'>
								<FormLabel htmlFor='password'>Password</FormLabel>
								<Link
									href='#'
									className='ml-auto text-sm underline-offset-4 hover:underline'
								>
									Forgot your password?
								</Link>
							</div>
							<PasswordInput {...field} />
							<FormMessage />
						</FormItem>
					)}
				/>
				<Button type='submit' className='w-full' icon={LogInIcon}>
					Login
				</Button>
			</div>
		</FormProvider>
	);
}
