import React, { HTMLAttributes } from 'react'
import { MdDragIndicator } from "react-icons/md";
import DragItem from './DragItem';

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
        <div className='text-transparent bg-clip-text font-sans-serif text-[2rem] font-bold bg-gradient-to-r from-slate-400 to-[#02b096] text-clip inline-block m-3'>{name}</div>
        <div className='flex flex-col gap-y-5 px-5' >
            {exercises.map((elem, idx) => (
                <DragItem key={idx}>

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
                </DragItem>
            ))}
            <DragItem>
                <p>+ add new</p>
            </DragItem>
        </div>
        </>

    )
}

export default ExercisesList