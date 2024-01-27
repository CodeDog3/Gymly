"use client"
import React, { useState } from 'react'
import { useModalStore } from '../_hooks/useModalStore'
import { twMerge } from 'tailwind-merge'
import AddExerciseModal from './_components/AddExerciseModal'

const page = () => {

  const isOpen = useModalStore(state => state.isOpen);
  const [dropzone, setDropzone] = useState<string[]>([])

  const handleDrop = (e: React.DragEvent) => {
    const newExercise = e.dataTransfer.getData("exercise") as string
    setDropzone((dropzone) => [...dropzone, newExercise])

  }
  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();

  }
  


  return (

      <div className=' h-screen grid place-items-center bg-slate-900'>
        <div onDrop={handleDrop} onDragOver={handleDragOver} className='border-2 h-[40%] w-[40%] border-green-600'>
          {dropzone.map((item, idx) => (
            <h1 key={idx}>{item}</h1>
          ))}
        </div>
        {isOpen && <AddExerciseModal />}
      </div>

  )
}

export default page