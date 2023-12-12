import { NextApiHandler, NextApiRequest, NextApiResponse } from "next";
import { NextApiRequestQuery } from "next/dist/server/api-utils";
import { NextResponse } from "next/server"

export async function POST(req:Request) {
    try{
        const {name,email,password} = await req.json()
        console.log(name , email, password)
        return NextResponse.json({message:"User registered"},{status:201})

    }
    catch (err){
        return NextResponse.json({message:"An error has occured."},{status:500})
    }
}