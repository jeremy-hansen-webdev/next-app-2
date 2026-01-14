import { NextRequest, NextResponse } from "next/server";
import {schema} from './schema'
import { users } from "@/app/lib/db/schema";
import { db } from "@/app/lib/db";
import { eq } from "drizzle-orm";



export async function GET(request: NextRequest){
    const data = await db.select().from(users)

    return NextResponse.json(data)
}

export async function POST(request: NextRequest) {
    const body = await request.json()
    const validation = schema.safeParse(body)

    const userExists = await db.select().from(users).where(eq(users.email, body.email))

    if (!validation.success) return NextResponse.json({error: validation.error}, {status: 400})
        
    if (userExists)
        return NextResponse.json({error: "User Already Exists"}, {status: 400})

    const result = await db.insert(users).values({
        name: body.name,
        email: body.email
    })


    return NextResponse.json(result, {status: 201})
}