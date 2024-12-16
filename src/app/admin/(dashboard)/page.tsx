'use client';

import { AdminHeader } from '@/components/layout/admin-header';
import { Button } from '@/components/ui/button';
import { SimpleCard } from '@/components/ui/card';
import { useConfirm } from '@/components/ui/confirm-dialog';
import { MinimalTiptapEditor } from '@/components/ui/minimal-tiptap';
import { Content } from '@tiptap/react';
import { useState } from 'react';

const DashboardHomePage = () => {
	const confirm = useConfirm();
	const [value, setValue] = useState<Content>('');
	return (
		<>
			<AdminHeader title='Dashboard' />
			<SimpleCard>
				<div className='flex items-center justify-between'>
					<h2 className='text-xl font-semibold'>Welcome to the dashboard</h2>
					<Button
						onClick={async () => {
							await confirm({
								title: 'Confirm Action',
								description: 'Are you sure you want to proceed?',
							});
						}}
					>
						Click me
					</Button>
				</div>

				<MinimalTiptapEditor
					value={value}
					onChange={setValue}
					className='w-full'
					editorContentClassName='p-5'
					output='html'
					placeholder='Type your description here...'
					autofocus={true}
					editorClassName='focus:outline-none'
				/>
			</SimpleCard>
		</>
	);
};

export default DashboardHomePage;
