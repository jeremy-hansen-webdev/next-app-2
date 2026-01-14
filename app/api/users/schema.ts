import {z} from 'zod'

export const schema = z.object({
    name: z.string().min(3, "Name must be at least 3 characters"),
})

export type SchemaType = z.infer<typeof schema>