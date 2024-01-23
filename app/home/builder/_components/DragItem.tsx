import React, { PropsWithChildren } from 'react'
import { MdDragIndicator } from 'react-icons/md'

const handleDrag = (e: React.DragEvent, draggedItem: string) => {
    e.dataTransfer.setData("exercise", draggedItem)
    e.dataTransfer.effectAllowed = "move";
}

const DragItem = ({ children }: PropsWithChildren) => {
    return (
        <div className='bg-transparent rounded-xl bg-gradient-to-r from-slate-400 to-[#02b096] shadow-md w-[80%] min-w-[230px] grid place-items-center font-sans-serif'>
            {children}
        </div>
    )
}

export default DragItem