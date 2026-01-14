import { NextRequest, NextResponse } from "next/server";
import { schema } from "./schema";
import { products } from "@/app/lib/db/schema";
import { db } from "@/app/lib/db";


export async function GET(request: NextRequest) {
    const data = await db.select().from(products)
    return NextResponse.json(data)
}

export async function POST(request:NextRequest) {
    const body = await request.json()

    const validation = schema.safeParse(body)

    if (!validation.success)
        return NextResponse.json({error: validation.success}, {status: 400})
    return NextResponse.json({id: 1, name: body.name, price: body.price})
    
}