/* eslint-disable react-hooks/rules-of-hooks */
"use client";

import { POST } from "@/app/api/register/route";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { signIn, useSession } from "next-auth/react";
import { GithubAuth, GoogleAuth } from "../_components/authButtons";
import Button from "../_components/Button";
import Image from "next/image";
import logo from "@/public/Gymify Nav Logo.png"


const page = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [error, setError] = useState<string | null>(null);

  const router = useRouter();

  const session = useSession();
  if (session.status === "authenticated") {
    router.replace("/home")
  }

  const changeHandler = (
    variant: string,
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    console.log("running?")
    if (variant === "email") {
      setEmail(e.target.value);
    }
    if (variant === "password") {
      setPassword(e.target.value);
    }
    if (variant === "name") {
      setName(e.target.value);
    }
  };

  const submitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!email || !name || !password) {
      setError("All fields are required");
      return;
    }
    setError("");

    try {
      const res = await fetch("api/userExists", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ email })
      })

      const { user } = await res.json()

      if (user) {
        setError("user already exists")
        return
      }

      await fetch("api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, password }),
      });
      const result = await signIn('credentials', {
        email, password, redirect: false
      })
      if (!result?.ok) {
        setError("Invalid Credentials")
        return
      }
      router.replace("home")
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <div className=" z-[-1] absolute bg-[url('/loginBG.jpg')] h-screen w-screen bg-no-repeat opacity-70 bg-cover"></div>
      <div className="grid place-items-center h-screen ">
        <div className='flex rounded-xl h-[90%] w-[90%] overflow-hidden shadow-md border-t-2 border-b-[1px] border-cyan-300'>
          <div className='bg-[rgb(24,24,24)] sm:w-[23%] sm:min-w-[26.25rem] w-full ps-5 pe-5 relative'>
            <div className='flex flex-col items-center '>
              <Image src={logo} alt='logo' width="100" height="100" />
              <h3 className='text-slate-300 '> Sign up or Login with</h3>
            </div>
            <div className='flex flex-col gap-y-2 mt-3'>
              <GithubAuth />
              <GoogleAuth />
              <div className='relative mt-8'>
                <div className='absolute left-1/2 bottom-1/2 translate-x-[-50%] translate-y-1/2'><p className='text-white border-[1px] w-full text-xs border-gray-400 p-2 rounded-full overflow-hidden bg-[rgb(23,23,23)]'>OR</p></div>
                <hr className=''></hr>
              </div>
            </div>
            <h1 className='text-xl font-bold mt-[48px] my-4 text-white'> Register Here</h1>
            <form onSubmit={(e) => submitHandler(e)} className='flex flex-col gap-y-3 '>
              <label className='text-white '>Name</label>
              <input value={name} onChange={(e) => changeHandler("name", e)} className=" bg-[rgb(38,39,44)] py-2 px-6" type="text" placeholder='John Doe' />
              <label className='text-white '>Email</label>
              <input value={email} onChange={(e) => changeHandler("email", e)} className=" bg-[rgb(38,39,44)] py-2 px-6" type="email" placeholder='Name@host.com' />
              <label className='text-white '>Password</label>
              <input value={password} onChange={(e) => changeHandler("password", e)} className="bg-[rgb(38,39,44)] py-2 px-6" type="password" placeholder='Password' />
              <Button className='w-[70%] m-auto' type='submit'>Register</Button>
              {error && <div className='bg-red-500 text-white font-bold w-fit text-sm rounded-md py-1 px-1'>
                {error}
              </div>}
            </form>
            <Link href={'/login'} className='text-sm text-gray-500'>
              Already have an Account?{" "}
              <span className='underline text-sm'>Sign in.</span>
            </Link>
          </div>
          <div className="sm:w-[77%] w-0 bg-[url('/loginBG.jpg')] bg-no-repeat bg-cover">
            asd
          </div>
        </div>
      </div>

    </>
  );
};

export default page;
