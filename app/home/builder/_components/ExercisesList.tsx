import React, { HTMLAttributes } from 'react'

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
        <div className='flex flex-col w-full text-green-400' >
            <div>{name}</div>
            {exercises.map((elem, idx) => (
                <h1 key={idx}
                    draggable
                    onDragStart={(e) => (
                        handleDrag(e, elem)
                    )}
                    className=' hover:bg-red-200'
                >
                    {elem}
                </h1>
            ))}
        </div>
    )
}

export default ExercisesList