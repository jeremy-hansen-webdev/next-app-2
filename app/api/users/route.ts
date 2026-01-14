import { NextRequest, NextResponse } from "next/server";
import {schema} from './schema'
import { prisma } from "../../lib/prisma";



export async function GET(request: NextRequest){
    const users = await prisma.user.findMany()

    return NextResponse.json(users)

    return NextResponse.json([
        {id: 1, name: 'Mosh'},
        {id: 2, name: 'Jeremy'},
    ])
}

export async function POST(request: NextRequest) {
    const body = await request.json()
        const validation = schema.safeParse(body)
        if (!validation.success) return NextResponse.json({error: validation.error}, {status: 400})

    return NextResponse.json({id: 1, name: body.name}, {status: 201})
}