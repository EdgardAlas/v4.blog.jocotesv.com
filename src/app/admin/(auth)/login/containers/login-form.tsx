'use client';

import { LoginSchema, loginSchemaResolver } from '../_lib/login.schema';
import { Button } from '@/components/ui/button';
import { FormInput } from '@/components/ui/form/form-input';
import { FormProvider } from '@/components/ui/form/form-provider';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { PasswordInput } from '@/components/ui/password-input';
import { useForm } from 'react-hook-form';

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
				<FormInput
					label='Email'
					type='email'
					input={Input}
					name='email'
					autoFocus
				/>
				<FormInput
					label={
						<div className='flex items-center'>
							<Label htmlFor='password'>Password</Label>
							<a
								href='#'
								className='ml-auto text-sm underline-offset-4 hover:underline'
							>
								Forgot your password?
							</a>
						</div>
					}
					type='password'
					input={PasswordInput}
					name='password'
				/>
				<Button type='submit' className='w-full'>
					Login
				</Button>
			</div>
		</FormProvider>
	);
}
