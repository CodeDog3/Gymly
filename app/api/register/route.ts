import { connectMongoDB } from "@/lib/mongodb";
import { NextApiHandler, NextApiRequest, NextApiResponse } from "next";
import { NextApiRequestQuery } from "next/dist/server/api-utils";
import User from "@/models/user";
import bcrypt from "bcryptjs";
import { NextResponse } from "next/server";


export async function POST(req:Request) {
    try{
        const {name,email,password} = await req.json()

        const hashedPassword = await bcrypt.hash(password, 10)

        await connectMongoDB();
        await User.create({name,email,password : hashedPassword})

        return NextResponse.json({message:"User registered"},{status:201})

    }
    catch (err){
        return NextResponse.json({message:"An error has occured."},{status:500})
    }
}