"use client"

import React, { PropsWithChildren } from 'react'
import { twMerge } from 'tailwind-merge'

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
    onClick?: () => void
}

const Button = ({children, onClick, className}: PropsWithChildren<ButtonProps>) => {


  return (
    <button className={twMerge('linearbg px-7 py-3 rounded-2xl text-lg w-fit text-white relative hover:bg-center transition-all duration-500',className)}
    onClick={onClick}
>
    {children}

    </button>
  )
}

export default Button
