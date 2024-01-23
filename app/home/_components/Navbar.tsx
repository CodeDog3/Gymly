"use client"
import Link from 'next/link'
import React, { useState } from 'react'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { twMerge } from 'tailwind-merge'
import { useSession } from 'next-auth/react'
import { FaHome, FaAccessibleIcon } from "react-icons/fa";
import { IoBuild, IoLibrary } from "react-icons/io5";
import { IoMdArrowRoundBack } from "react-icons/io";
import navLogo from "@/public/Gymify Nav Logo.png"
import NavItem from './NavItem'

type Props = {
  dispatch : (iscollapsed: boolean) => void
}


const Navbar = ({dispatch}: Props ) => {
  const pathname = usePathname();
  const { data: Session } = useSession();

  const items = [{ path: "/home", Icon: FaHome }, { path: "/home/builder", Icon: IoBuild }, { path: "/home1", Icon: FaAccessibleIcon }, { path: "/home2", Icon: IoLibrary }]

  return (
      <div className=' h-screen relative'>

        <div className={'flex flex-col text-white font-bold bg-[#212121] shadow-md h-full w-20 transition-[300] relative'}>
          <Image src={navLogo} width={80} height={80} alt={"pfp"} />

          <div className='flex flex-col gap-y-8 mt-5 items-center'>
            {items.map((item, idx) => (
              <NavItem key={idx} path={item.path}>
                <item.Icon className={twMerge("fill-white opacity-70 group-hover/navItem:opacity-100", pathname === item.path ? "opacity-100" : "")} size={"2em"} />
              </NavItem>
            ))}
          </div>

          <div className='w-full flex justify-center mt-[390px]'>
            <Image className="rounded-3xl flex justify-center cursor-pointer" src={Session?.user?.image as string} width={50} height={50} alt={"pfp"} />
          </div>
          <div onClick={() => dispatch(true)} className='bg-[#02b096] w-full h-7 flex justify-center items-center hover:opacity-70 transition-[300] absolute bottom-0 cursor-pointer'>
            <IoMdArrowRoundBack size={"1.5em"} />
          </div>
        </div>
  
        
        
      </div>
  )
}

export default Navbar