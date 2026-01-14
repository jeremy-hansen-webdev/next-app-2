import { NextRequest, NextResponse } from "next/server";
import { schema } from "../schema";

interface Props {
    params: {id: string}
}

export async function GET(request: NextRequest, {params}: Props){
    const {id} = await params
    if (Number(id) > 10)
        return NextResponse.json({error: "User Not Found"}, {status: 404})
    return NextResponse.json({id: 1, name: 'Jeremy'})
}

export async function PUT(request: NextRequest, {params}: Props){
    const {id} = await params
    const body = await request.json()
    const validation = schema.safeParse(body)
    if (!validation.success)
        return NextResponse.json({ errors: validation.error }, { status: 400 })
    if (Number(id) > 10)
        return NextResponse.json({error: "User Not Found"}, {status: 404})

    return NextResponse.json({id: id, name: body.name})
}

export async function DELETE(request:NextRequest, {params}: Props) {
    const {id} = await params
    
    if (Number(id)> 10)
        return NextResponse.json({error: 'User Not Found'}, {status: 404})

    return NextResponse.json({})
    
}