import React, { HTMLAttributes } from 'react'
import { MdDragIndicator } from "react-icons/md";

type Props = HTMLAttributes<HTMLElement> & React.DOMAttributes<HTMLElement> & {
    name?: string;
    exercises: string[]
}

const handleDrag = (e: React.DragEvent, draggedItem: string) => {
    e.dataTransfer.setData("exercise", draggedItem)
    e.dataTransfer.effectAllowed = "move";
}

const ExercisesList = ({ name, exercises }: Props) => {
    return (
        <>
        <div className='text-transparent bg-clip-text font-sans-serif text-[2rem] font-bold bg-gradient-to-r from-blue-500 to-red-500 text-clip inline-block m-3'>{name}</div>
        <div className='flex flex-col gap-y-5 px-5' >
            {exercises.map((elem, idx) => (
                <div key={idx} className='bg-transparent rounded-xl bg-gradient-to-r from-blue-500 via-slate-400 to-purple-500 shadow-md w-[80%] min-w-[230px] grid place-items-center font-sans-serif'>

                    <div 
                        draggable
                        onDragStart={(e) => (
                            handleDrag(e, elem)
                        )}
                        className=' py-6 px-2 w-[97%] h-[91%] rounded-xl bg-slate-700 hover:opacity-90 transition-[500] text-white font-extrabold text-sm '
                    >
                        <div className='flex justify-between px-3 items-center'>
                            {elem.toUpperCase()}
                            <MdDragIndicator className=" text-gray-500 hover:cursor-move" size={25} />
                        </div>

                    </div>
                </div>
            ))}
        </div>
        </>

    )
}

export default ExercisesList