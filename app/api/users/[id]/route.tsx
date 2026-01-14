import { NextRequest, NextResponse } from "next/server";
import { schema } from "../schema";
import { users } from "@/app/lib/db/schema";
import { db } from "@/app/lib/db";
import { eq } from "drizzle-orm";


interface Props {
    params: {id: string}
}

export async function GET(request: NextRequest, {params}: Props){
    const {id} = await params
    const data = await db.select().from(users).where(eq(users.id, Number(id)))
    if (!data || data.length === 0)
        return NextResponse.json({error: "User Not Found"}, {status: 404})
    return NextResponse.json(data)
}

export async function PUT(request: NextRequest, {params}: Props){
    const {id} = await params
    const body = await request.json()
    const validation = schema.safeParse(body)

    const updateUser = await db.update(users)
        .set({
            name: body.name,
            email: body.email
        })
        .where(eq(users.id, Number(id)))


    if (!validation.success)
        return NextResponse.json({ errors: validation.error }, { status: 400 })
    if (!updateUser)
        return NextResponse.json({error: "User Not Found"}, {status: 404})

    return NextResponse.json(updateUser, {status: 200})
}

export async function DELETE(request:NextRequest, {params}: Props) {
    const {id} = await params
    
    const result = await db.delete(users).where(eq(users.id, Number(id)))

    if (Number(id)> 10)
        return NextResponse.json({error: 'User Not Found'}, {status: 404})

    return NextResponse.json(result)
    
}