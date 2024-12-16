export const generateBreadcrumbs = (
	data: { title: string; link: string }[] = []
) => {
	const initialBreadcrumb = { title: 'Dashboard', link: '/admin' };

	return [initialBreadcrumb, ...data];
};
