/* eslint-disable react-hooks/rules-of-hooks */
"use client";

import React, { useState } from 'react'
import { signIn, useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import logo from "@/public/Gymify Nav Logo.png";
import { GithubAuth, GoogleAuth } from '../_components/authButtons';
import Button from '../_components/Button';

const page = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState<string | null>(null)

    const router = useRouter()

    const session = useSession();
    if (session.status === "authenticated") {
        router.replace("/home")
    }

    const changeHandler = (variant: string, e: React.ChangeEvent<HTMLInputElement>) => {
        if (variant === "email") {
            setEmail(e.target.value)
        }
        if (variant === "password") {
            setPassword(e.target.value)
        }
    }

    const submitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();


        if (!email || !password) {
            setError("All fields are required");
            return
        }
        try {
            const res = await signIn('credentials', {
                email, password, redirect: false
            })
            if (res?.error) {
                setError("Invalid Credentials")
                return
            }
            router.replace("home")
        }
        catch (err) {
            console.log(err)
        }

    }


    return (

        <>
            <div className=" z-[-1] absolute bg-[url('/loginBG.jpg')] h-screen w-screen bg-no-repeat opacity-70 bg-cover"></div>
            <div className="grid place-items-center h-screen ">
                <div className='flex rounded-xl h-[90%] w-[90%] overflow-hidden shadow-md border-t-2 border-b-[1px] border-cyan-300'>
                    <div className='bg-[rgb(24,24,24)] ps-5 pe-5 relative sm:min-w-[26.25rem] sm:w-[23%] w-full'>
                        <div className='flex flex-col items-center '>
                            <Image src={logo} alt='logo' width="100" height="100" />
                            <h3 className='text-slate-300 '> Sign up or Login with</h3>
                        </div>
                        <div className='flex flex-col gap-y-2 mt-3'>
                            <GithubAuth />
                            <GoogleAuth />
                            <div className='relative mt-16'>
                                <div className='absolute left-1/2 bottom-1/2 translate-x-[-50%] translate-y-1/2'><p className='text-white border-[1px] w-full text-xs border-gray-400 p-2 rounded-full overflow-hidden bg-[rgb(23,23,23)]'>OR</p></div>
                                <hr className=''></hr>
                            </div>
                        </div>
                            <h1 className='text-xl font-bold mt-[72px] my-4 text-white'> Login Here</h1>
                            <form onSubmit={(e) => submitHandler(e)} className='flex flex-col gap-y-3 '>
                                <label className='text-white '>Email</label>
                                <input value={email} onChange={(e) => changeHandler("email", e)} className=" bg-[rgb(38,39,44)] py-2 px-6" type="email" placeholder='Name@host.com' />
                                <label className='text-white '>Password</label>
                                <input value={password} onChange={(e) => changeHandler("password", e)} className="bg-[rgb(38,39,44)] py-2 px-6" type="password" placeholder='Password' />
                                <Button className='w-[70%] m-auto' type='submit'>Login</Button>
                                {error && <div className='bg-red-500 text-white font-bold w-fit text-sm rounded-md py-1 px-1'>
                                    {error}
                                </div>}
                            </form>
                            <Link href={'/register'} className='text-sm text-gray-500'>
                                Don't have an account?{" "}
                                <span className='underline text-sm'>Register.</span>
                            </Link>
                    </div>
                    <div className="sm:w-[77%] w-0 bg-[url('/loginBG.jpg')] bg-no-repeat bg-cover flex-shrink">
                        
                    </div>
                </div>
            </div>

        </>

    )
}

export default page