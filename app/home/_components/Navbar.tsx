"use client"
import Link from 'next/link'
import React from 'react'
import logo from "@/public/Gymify Nav Logo.png"
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { twMerge } from 'tailwind-merge'


const links = [
  {route:"/home" , text:"Dashboard"},
  {route:"/home/builder",text:"Builder"},
  {route:"/home2" , text:"empty"},
  {route:"/home3" , text:"empty"},
];

const Navbar = () => {
  const pathname = usePathname();

  return (
    <div className=' text-white font-bold bg-slate-500 w-full h-[60px] shadow-md flex px-4'>
        
      <Link href={"/"} className='flex items-center z-50'>
        <Image src={logo} alt='logo' height={70} width={60}/>
        <h1>Gymly</h1>
      </Link>

      <div className='flex items-center justify-evenly w-[40%] h-full ml-20'>
        {links.map((item, idx)=>(
          <Link key={idx} href={item.route} className='w-[120px] group/navitem h-full flex items-center justify-center relative'>
            <h1 className={twMerge("group-hover/navitem:text-red-500", pathname === item.route ? "text-red-500" : "")}>{item.text}</h1>
            <div className={twMerge("absolute h-1 w-full bottom-0 group-hover/navitem:bg-red-500", pathname === item.route ? "bg-red-500" : "")}></div>
          </Link>
        ))}
      </div>
          

        

    </div>
  )
}

export default Navbar