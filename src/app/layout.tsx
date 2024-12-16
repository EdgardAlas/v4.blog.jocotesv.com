import { Toaster } from '@/components/ui/sonner';
import type { Metadata } from 'next';
import { Geist } from 'next/font/google';
import { NuqsAdapter } from 'nuqs/adapters/next/app';
import './globals.css';

const geistSans = Geist({
	variable: '--font-geist-sans',
	subsets: ['latin'],
});

export const metadata: Metadata = {
	title: 'JocoteSV - Dashboard',
	description: 'JocoteSV Dashboard',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en'>
			<body className={`${geistSans.className} antialiased`}>
				<NuqsAdapter>{children}</NuqsAdapter>
				<Toaster richColors />
			</body>
		</html>
	);
}
