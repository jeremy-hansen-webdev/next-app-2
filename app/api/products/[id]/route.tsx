
import { NextRequest, NextResponse } from "next/server";
import { schema } from "../schema";
import { db } from "@/app/lib/db";
import { products } from "@/app/lib/db/schema";
import { eq } from "drizzle-orm";

interface Props {
    params: {id: string}
}

export async function GET(request: NextRequest, {params}: Props) {
    const {id} = await params

    const data = await db.select().from(products).where(eq(products.id, Number(id)))

    if (!id || id.length === 0)
        return NextResponse.json({error: "Product Not Found"})
    return NextResponse.json(data)
}

export async function PUT(request: NextRequest, {params}: Props) {
    const {id} = await params
    const body = await request.json()

    const validation = schema.safeParse(body)

    if (!validation.success)
        return NextResponse.json({errors: validation.error}, {status: 400})
    
    const updateProduct = await db.update(products)
    .set({
        name: body.name,
        price: body.price
    })
    .where(eq(products.id, Number(id)))
    
    if (!updateProduct)
        return NextResponse.json({error: "Product Not Found"}, {status: 404})

    return NextResponse.json(updateProduct, {status: 200})

}

export async function DELETE(request: NextRequest, {params}: Props) {
    const {id} = await params

    const result = await db.delete(products).where(eq(products.id, Number(id)))
    if (Number(id) > 10)
        return NextResponse.json({error: "User Not Found"}, {status: 404})

    return NextResponse.json(result)
    
}