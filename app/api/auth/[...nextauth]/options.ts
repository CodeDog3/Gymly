import type { NextAuthOptions } from "next-auth";
import GitHubProvider from 'next-auth/providers/github'
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google"
import { connectMongoDB } from "@/lib/mongodb";
import User from "@/models/user";
import bcrypt from "bcryptjs"

interface Credentials {
    email?: string;
    password?: string;
}

const options: NextAuthOptions = {
    providers: [
        GitHubProvider({
            clientId:process.env.GITHUB_ID as string,
            clientSecret:process.env.GITHUB_SECRET as string
        }),
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID as string,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
        }),
        CredentialsProvider({
            name:"credentials",
            credentials: {
            },
            async authorize(credentials:any){
                const {email, password} = credentials
                try {
                    await connectMongoDB()
                    const user = await User.findOne({email})
                    if(!user){
                        return null
                    }
                    const passwordsMatch = await bcrypt.compare(password, user.password)
                    if(!passwordsMatch){
                        return null
                    }
                    return user;
                } catch (error) {
                    console.log(error)
                    return null
                }
            }
        })
    ],
    session: {
        strategy:"jwt"
    },
    secret:process.env.NEXTAUTH_SECRET,
    pages: {
        signIn: "/login",
    }
}
export default options
