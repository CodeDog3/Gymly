"use client"
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import React, { PropsWithChildren } from 'react'
import { twMerge } from 'tailwind-merge'

const NavItem = ({ children, path }: PropsWithChildren<{path:string}>) => {

    const pathname = usePathname();
    return (
        <div className={twMerge('group/navItem hover:border-[#02b096] border border-transparent hover:shadow-[#02b096] hover:shadow-md shadow-[#3d3d3d] shadow-md px-3 py-3 rounded-lg ', pathname === path ? "border-[#02b096] shadow-[#02b096]" : "")}>
            <Link href={path} className=' justify-center relative'>
                {children}
                {/* className={} */}
            </Link>
        </div>
    )
}

export default NavItem