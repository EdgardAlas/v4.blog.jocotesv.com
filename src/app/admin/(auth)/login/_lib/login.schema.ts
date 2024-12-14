import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

export const loginSchema = z.object({
	email: z.string().email('Invalid email'),
	password: z.string().min(8),
});

export type LoginSchema = z.infer<typeof loginSchema>;

export const loginSchemaResolver = zodResolver(loginSchema);
