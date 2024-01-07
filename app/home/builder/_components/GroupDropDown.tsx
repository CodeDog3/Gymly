"use client"

import React, { useState } from 'react'
import { MuscleGroupType } from './muscleGroups'
import { twMerge } from 'tailwind-merge'

type Props = {
  dispatchFunction: React.Dispatch<React.SetStateAction<number | null>>
  muscleGroups: MuscleGroupType
  className?: string | null
}

const GroupDropDown = ({ muscleGroups, dispatchFunction, className }: Props) => {

  const [showOptions, setShowOptions] = useState<boolean>(false)
  const [selected, setSelected] = useState<string>("Select Group")

  return (
    <>
      <ol className={twMerge(' bg-slate-400 cursor-pointer w-full text-center', className)}>
        <li onClick={(e) => setShowOptions((showOptions) => !showOptions)}>
          <div className='bg-slate-400 w-full'>{selected}</div>
        </li>
        {showOptions && muscleGroups.map((elem) => (
            <li 
              key={elem.id}
              onClick={(e) => {
              dispatchFunction(elem.id)
              setShowOptions(false)
              setSelected(elem.name)
             }}
            className=' bg-slate-700 w-full hover:opacity-70 text-center'>{elem.name}</li>
          ))}
      </ol>

    </>
  )
}

export default GroupDropDown