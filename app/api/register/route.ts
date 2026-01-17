import { NextRequest, NextResponse } from "next/server";
import {email, z} from 'zod'
import { db } from "../../lib/db";
import { users } from "../../lib/db/schema";
import { eq } from "drizzle-orm";
import bcrypt from "bcrypt"

const schema = z.object({
    email: z.string().email('Must be an email'),
    password: z.string().min(5, "Character must be 5 or more.")
})

export async function POST(request: NextRequest){
    const body = await request.json()

    const validation = schema.safeParse(body)

    if (!validation.success) 
        return NextResponse.json(validation.error, {status: 400}) 

    const user = await db.select().from(users).where(eq(users.email, body.email))

    if (user.length > 0)
        return NextResponse.json(
            {error: "User already exists"},
            {status: 400}
        )
    const hashedPassword = await bcrypt.hash(body.password, 10)

    await db.insert(users).values({
        email: body.email,
        hashedPassword: hashedPassword
    })

    return NextResponse.json({email, message: 'User created successfully'}, {status: 201})

}