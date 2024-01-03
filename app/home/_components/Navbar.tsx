"use client"
import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <div className='flex justify-evenly items-center text-white font-bold bg-green-500 w-full h-10'>
        <Link href={"/home"}>
            Dashboard
        </Link>
        <Link href={"/home/builder"}>
            builder
        </Link>
        <Link href={"/home"}>
            empty
        </Link>
        <Link href={"/home"}>
           etmpty
        </Link>

    </div>
  )
}

export default Navbar