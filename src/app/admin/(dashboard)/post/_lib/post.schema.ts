import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

const notAllowedCharacters = [
	'/',
	'\\',
	'?',
	'%',
	'*',
	':',
	'|',
	'"',
	'<',
	'>',
	'.',
];

export const postSchema = z
	.object({
		title: z.string().nonempty("Title can't be empty"),
		content: z.string().nonempty("Content can't be empty"),
		image: z.string(),
		slug: z
			.string()
			.nonempty("Slug can't be empty")
			.refine(
				(slug) => {
					return !notAllowedCharacters.some((char) => slug.includes(char));
				},
				{
					message: `Slug can't contain any of the following characters: ${notAllowedCharacters.join(
						', '
					)}`,
					path: ['slug'],
				}
			),
		description: z.string().nonempty("Description can't be empty"),
		id: z.string(),
		categories: z.array(z.string()),
		status: z.enum(['draft', 'published']),
		publicationDate: z.date(),
		author: z
			.enum(['author-1', 'author-2', 'author-3'], {
				message: 'Invalid author',
			})
			.refine(
				(author) => {
					return author !== null;
				},
				{
					message: "Author can't be empty",
					path: ['author'],
				}
			),
		date: z.date().refine(
			(date) => {
				return date !== null;
			},
			{
				message: "Date can't be empty",
			}
		),
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

export type PostSchema = z.infer<typeof postSchema>;

export const postSchemaResolver = zodResolver(postSchema);
