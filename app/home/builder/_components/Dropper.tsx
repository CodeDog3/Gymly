"use client"
import React, { useState } from 'react'
import { useModalStore } from '../../_hooks/useModalStore'
import AddExerciseModal from './AddExerciseModal'
import ActiveExerciseList from './ActiveExerciseList'

const Dropper = () => {
    const isOpen = useModalStore(state => state.isOpen);
    const [dropzone, setDropzone] = useState<{name: string, reps:number, sets: number}[]>([])
  
    const handleDrop = (e: React.DragEvent) => {
      const newExercise = e.dataTransfer.getData("exercise") as string
      setDropzone((dropzone) => [...dropzone, {name:newExercise, reps: 0, sets: 0}])
  
    }
    const handleDragOver = (e: React.DragEvent) => {
      e.preventDefault();
    }
    return (
  
        <div className='h-screen grid place-items-center bg-slate-900'>
          <div onDrop={handleDrop} onDragOver={handleDragOver} className='border-2 h-[40%] w-[40%] border-green-600 flex flex-col gap-y-1'>
            {dropzone.map((item, idx) => (
              <ActiveExerciseList key={idx} ExerciseIndex={idx} name={item.name} sets={item.sets} reps={item.reps} dispatch={setDropzone}></ ActiveExerciseList>
            ))}
          </div>
          {isOpen && <AddExerciseModal />}
        </div>
  
    )
}

export default Dropper