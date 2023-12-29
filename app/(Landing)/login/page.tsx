/* eslint-disable react-hooks/rules-of-hooks */
"use client";

import React, { useState } from 'react'
import { signIn, useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';

const page = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState<string|null>(null)

    const router = useRouter()

    const session = useSession();
    if(session.status === "authenticated"){
      router.replace("/home")
    }

    const changeHandler = (variant:string, e:React.ChangeEvent<HTMLInputElement>) => {
        if(variant === "email"){
            setEmail(e.target.value)
        }
        if(variant === "password"){
            setPassword(e.target.value)
        }
    }

    const submitHandler = async (e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
      
        
        if(!email || !password){
            setError("All fields are required");
            return
        }
        try{
            const res = await signIn('credentials',{
                email, password, redirect:false 
            })
            if(res?.error){
                setError("Invalid Credentials")
                return
            }
            router.replace("home")
        }
        catch(err){
            console.log(err)
        }

    }


  return (
    <div className='grid h-screen place-items-center'>
        <div className='  rounded-lg shadow-lg border-t-4 border-teal-400 p-5'>
            <h1 className='text-xl font-bold my-4'> Login Here</h1>
            <form onSubmit={(e) => submitHandler(e)}  className='flex flex-col gap-y-3'>
                <input value={email} onChange={(e) => changeHandler("email", e)}  className="w-[400px] border border-gray-200 py-2 px-6" type="email" placeholder='Email'/>
                <input value={password} onChange={(e) => changeHandler("password", e)} className="w-[400px] border border-gray-200 py-2 px-6" type="password" placeholder='Password'/>
                <button className='bg-green-600 cursor-pointer text-white font-bold py-1'>Login</button>
                {error && <div className='bg-red-500 text-white font-bold w-fit text-sm rounded-md py-1 px-2'>
                    {error}
                </div>}
            </form>
        </div>
    

    </div>


  )
}

export default page