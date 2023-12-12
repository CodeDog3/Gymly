"use client";

import useScrollTop from "@/app/hooks/use-scroll-top";

import Button from "./Button";

import logo from "@/public/Gymify Nav Logo.png";
import Image from "next/image";

import Link from "next/link";
import Router, { useRouter } from "next/navigation";



const Navbar = () => {

const router = useRouter()
const scrolled = useScrollTop();

  return (
    <nav className="w-full transition-all">
      <div className={`z-[999] fixed flex justify-between items-center h-20 w-[100%]  pl-[150px] pr-[150px]  ${
        scrolled && "shadow-md bg-[rgb(0,0,0,.068)] backdrop-blur"
      }`}>
        <Link
          href="/"
          className="flex justify-center items-center cursor-pointer"
        >
          <Image src={logo} alt="Gymify Logo" height={90} width={80} />
          <h1 className="text-white text-lg">
            Gymly<span className="text-transparent transbg">.IO</span>
          </h1>
        </Link>
        <div className="flex justify-evenly space-x-10 items-center">
          <ul className="flex justify-between [&>li]:pr-10 [&>li]:py-1 text-white">
            <li>FAQ</li>
            <li>API</li>
            <li className=" border-r-2 border-slate-400">About Us</li>
          </ul>
          <Button onClick={()=>router.replace("/api/auth/signin")}>Launch App</Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
