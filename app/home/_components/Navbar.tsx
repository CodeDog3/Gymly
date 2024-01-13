"use client"
import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { twMerge } from 'tailwind-merge'
import { useSession } from 'next-auth/react'
import { FaHome, FaAccessibleIcon } from "react-icons/fa";
import { IoBuild, IoLibrary } from "react-icons/io5";
import { IoMdArrowRoundBack } from "react-icons/io";
import navLogo from "@/public/Gymify Nav Logo.png"


const Navbar = () => {
  const pathname = usePathname();
  const { data: Session } = useSession();

  return (
    <div className='flex flex-col text-white font-bold bg-[#212121] shadow-md h-screen w-20 transition-all relative'>
      <Image src={navLogo} width={80} height={80} alt={"pfp"} />

      <div className='flex flex-col gap-y-8 mt-5 items-center'>
        <div className={twMerge('group/navItem hover:border-[#02b096] border border-transparent hover:shadow-[#02b096] hover:shadow-md shadow-[#3d3d3d] shadow-md px-3 py-3 rounded-lg ',pathname === "/home"? "border-[#02b096] shadow-[#02b096]":"")}>
          <Link href={"/home"} className=' justify-center relative'>
            <FaHome className={twMerge("fill-white opacity-70 group-hover/navItem:opacity-100", pathname === "/home"? "opacity-100": "")} size={"2em"} />
          </Link>
        </div>
        <div className='group/navItem hover:border-[#02b096] border border-transparent hover:shadow-[#02b096] hover:shadow-md shadow-[#3d3d3d] shadow-md px-3 py-3 rounded-lg '>
          <Link href={"/home/builder"} className=' justify-center relative'>
            <IoBuild className="fill-white opacity-70 group-hover/navItem:opacity-100" size={"2em"} />
            {/* <div className={twMerge("absolute h-1 bottom-0 group-hover/navitem:bg-white rounded-t-md", pathname === Dash route ? "bg-white" : "")}></div> */}
          </Link>
        </div>
        <div className='group/navItem hover:border-[#02b096] border border-transparent hover:shadow-[#02b096] hover:shadow-md shadow-[#3d3d3d] shadow-md px-3 py-3 rounded-lg '>
          <Link href={"/Dashboard"} className=' justify-center relative'>
            <FaAccessibleIcon className="fill-white opacity-70 group-hover/navItem:opacity-100" size={"2em"} />
            {/* <div className={twMerge("absolute h-1 bottom-0 group-hover/navitem:bg-white rounded-t-md", pathname === Dash route ? "bg-white" : "")}></div> */}
          </Link>
        </div>
        <div className='group/navItem hover:border-[#02b096] border border-transparent hover:shadow-[#02b096] hover:shadow-md shadow-[#3d3d3d] shadow-md px-3 py-3 rounded-lg '>
          <Link href={"/Dashboard"} className='justify-center relative '>
            <IoLibrary className="fill-white opacity-70 group-hover/navItem:opacity-100" size={"2em"} />
            {/* <div className={twMerge("absolute h-1 bottom-0 group-hover/navitem:bg-white rounded-t-md", pathname === Dash route ? "bg-white" : "")}></div> */}
          </Link>
        </div>
      </div>

      <div className='w-full flex justify-center mt-[390px]'>
        <Image className="rounded-3xl flex justify-center cursor-pointer" src={Session?.user?.image as string} width={50} height={50} alt={"pfp"} />
      </div>
      <div className='bg-[#02b096] w-full h-7 flex justify-center items-center hover:opacity-70 transition-[300] absolute bottom-0 cursor-pointer'>
        <IoMdArrowRoundBack size={"1.5em"} />
      </div>




    </div>
  )
}

export default Navbar