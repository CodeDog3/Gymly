import React, { PropsWithChildren } from 'react'

type Props = {
    name: string,
    sets: number,
    reps: number,
}

const ActiveExerciseList = ({name, sets, reps, children }: PropsWithChildren<Props>) => {
  return (
    <div className='w-full py-4 bg-slate-400 rounded-md flex justify-evenly'>
        <div>{name} </div>
        <div>
        <label>Sets</label>
        <input className='w-6' type='number'></input>
        </div>
        <div>
        <label>reps</label>
        <input className='w-6' type='number'></input>
        </div>
    </div>
  )
}

export default ActiveExerciseList