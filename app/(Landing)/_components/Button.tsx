"use client"
import React from 'react'

interface props {
    children?: React.ReactNode
    onClick: () => void
}

const Button = ({children, onClick}: props) => {
  return (
    <button className='linearbg px-7 py-3 rounded-2xl text-lg text-white relative hover:bg-center transition-all'
    onClick={onClick}
>

    {children}

    </button>
  )
}

export default Button
