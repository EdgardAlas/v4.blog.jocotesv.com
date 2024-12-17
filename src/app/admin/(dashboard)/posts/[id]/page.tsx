'use client';

import { AdminBreadcrumbs } from '@/components/layout/admin-breadcrumbs';
import { AdminCardTitle } from '@/components/layout/admin-card-title';
import { Button } from '@/components/ui/button';
import { SimpleCard } from '@/components/ui/card';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { TabsContent } from '@radix-ui/react-tabs';
import { Content } from '@tiptap/react';
import { useState } from 'react';
import { toast } from 'sonner';

const CreateOrEditPostPage = () => {
	const [value, setValue] = useState<Content>('');

	return (
		<>
			<AdminBreadcrumbs
				breadcrumbs={[
					{ title: 'Posts', link: '/admin/posts' },
					{ title: 'Edit Post', link: '/admin/posts/create' },
				]}
			/>

			<SimpleCard>
				<AdminCardTitle title='Edit Post' />

				<Tabs defaultValue='content'>
					<div className='mb-4 flex items-center justify-between gap-4'>
						<TabsList>
							<TabsTrigger value='content'>Content</TabsTrigger>
							<TabsTrigger value='settings'>Settings</TabsTrigger>
						</TabsList>
						<div>
							<Button onClick={() => toast.success('Post saved successfully!')}>
								Save
							</Button>
						</div>
					</div>

					<TabsContent value='content'>editor here</TabsContent>
				</Tabs>
			</SimpleCard>
		</>
	);
};

export default CreateOrEditPostPage;
