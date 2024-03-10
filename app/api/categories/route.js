import { NextResponse } from "next/server";

export async function POST(request){
    try {
        const {title, slug, imageUrl, description} = await request.json();
        const newCategory ={title, slug, imageUrl, description}
        return NextResponse.json(newCategory);
    } catch (error) {
        console.log(error)
        return NextResponse.json({
            message: "Failed to create new category",
            error: error,
        }, {status:500})
    }
}