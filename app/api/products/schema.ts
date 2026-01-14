import {z} from 'zod'

export const schema = z.object({
    name: z.string().min(3, "Name must be at least 3 characters"),
    price: z.number()
        .min(0, "Price must be greater then 0.")
        .max(100, "Price must be less then 100")
})