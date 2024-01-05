"use client"
import React, { useState } from 'react'
import { twMerge } from 'tailwind-merge'

const page = () => {

  const [dropzone, setDropzone] = useState<string[]>([])

  const handleDrop = (e: React.DragEvent) => {
    const newExercise = e.dataTransfer.getData("exercise") as string
    setDropzone((dropzone) => [...dropzone, newExercise])

  }
  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();

  }


  return (
    <div className=' h-screen w-screen '>
      <div className='w-full h-full bg-red-400 grid place-items-center'>
        <div onDrop={handleDrop} onDragOver={handleDragOver} className='flex border-2 h-[40%] w-[40%] border-green-600'>
          {dropzone.map((item, idx) => (
            <h1 key={idx}>{item}</h1>
          ))}
        </div>
      </div>


    </div>
  )
}

export default page