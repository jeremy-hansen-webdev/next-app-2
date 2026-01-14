import { NextRequest, NextResponse } from "next/server";
import { schema } from "./schema";
import { products } from "@/app/lib/db/schema";
import { db } from "@/app/lib/db";
import { eq } from "drizzle-orm";

export async function GET(request: NextRequest) {
    const data = await db.select().from(products)
    return NextResponse.json(data)
}

export async function POST(request:NextRequest) {
    const body = await request.json()
    const validation = schema.safeParse(body)
    
    const productExists = await db.select().from(products).where(eq(products.name, body.name))

    if (productExists.length > 0)
        return NextResponse.json({error: "Name must be unique"}, {status: 400})

    if (!validation.success)
        return NextResponse.json({error: validation.success}, {status: 400})

    const result = await db.insert(products).values({
        name: body.name,
        price: body.price
    })

    return NextResponse.json(result, {status: 201})
    
}