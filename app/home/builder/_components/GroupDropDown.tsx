"use client"

import React, { useState } from 'react'
import { MuscleGroupType } from './muscleGroups'
import { twMerge } from 'tailwind-merge'
import { useSelectedExercise } from '../../_hooks/useSelectedExercise'

type Props = {
  dispatchFunction: React.Dispatch<React.SetStateAction<number | null>>
  muscleGroups: MuscleGroupType
  className?: string | null
}

const GroupDropDown = ({ muscleGroups, dispatchFunction, className }: Props) => {

  const [showOptions, setShowOptions] = useState<boolean>(false)
  const [selected, setSelected] = useState<string>("Select Group")
  const setID = useSelectedExercise(state => state.setID)

  return (
    <>
      <ol className={twMerge(' bg-slate-700 text-white font-sans cursor-pointer w-full text-center font-semibold ', className)}>
        <li onClick={(e) => setShowOptions((showOptions) => !showOptions)}>
          <div className=' w-full text-lg text-[#02b096] border-b-[2px] border-slate-500'>{selected.toUpperCase()}</div>
        </li>
        {showOptions && muscleGroups.map((elem) => (
            <li 
              key={elem.id}
              onClick={(e) => {
              dispatchFunction(elem.id)
              setShowOptions(false)
              setSelected(elem.name)
              setID(elem.id)
             }}
            className=' bg-slate-700 w-full hover:bg-slate-500 hover:text-[#02b096] pl-2 text-left'>{elem.name}</li>
          ))}
      </ol>

    </>
  )
}

export default GroupDropDown