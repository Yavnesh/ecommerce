import { NextResponse } from "next/server";

export async function POST(request){
    try {
        const productData = await request.json();
        return NextResponse.json(productData);
    } catch (error) {
        console.log(error)
        return NextResponse.json({
            message: "Failed to create new product",
            error: error,
        }, {status:500})
    }
}