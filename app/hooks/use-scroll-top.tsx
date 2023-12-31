"use client"

import  {useEffect, useState} from 'react'

const useScrollTop = (threshold:number = 30) => {

    const [scrolled, setScrolled] = useState(false);

    useEffect(()=>{
        const handleScroll = () => {
            window.scrollY > threshold ? setScrolled(true) : setScrolled(false);
        }
        window.addEventListener("scroll", handleScroll);
        return() =>{
            window.removeEventListener("scroll",handleScroll);
        }

    },[threshold]);


  return scrolled;
}

export default useScrollTop