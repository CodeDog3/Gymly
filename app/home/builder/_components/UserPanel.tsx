"use client"
import React, { ElementRef, useContext, useRef, useState } from 'react'
import { twMerge } from 'tailwind-merge';
import ExercisesList from './ExercisesList';
import { group } from 'console';

const UserPanel = () => {
    const panelRef = useRef<ElementRef<"aside">>(null);
    const [groupSelected, setGroupSelected] = useState<null | number>(null)
    // const isResizing = useRef(false);


    const handleMouseDown = (
        event: React.MouseEvent<HTMLDivElement, MouseEvent>
    ) => {
        event.preventDefault()
        event.stopPropagation()

        // isResizing.current = true
        addEventListener("mousemove", handleMouseMove)
        addEventListener("mouseup", handleMouseUp)
    };

    const handleMouseMove = (event: MouseEvent) => {
        // if(!isResizing.current) return;
        let newWidth = event.clientX

        if (newWidth < 240) newWidth = 240
        if (newWidth > 600) newWidth = 600

        if (!panelRef.current) return
        panelRef.current.style.width = `${newWidth}px`;

    }

    const handleMouseUp = () => {
        // isResizing.current=false;
        removeEventListener("mousemove", handleMouseMove)
        removeEventListener("mouseup", handleMouseUp)
    }

    const muscleGroups = [
        { id: 1, name: "Legs", exercises: ["lunges", "squats", "leg extensions"] },
        { id: 2, name: "Chest", exercises: ["bench press", "incline bench press", "pec flies"] },
        { id: 3, name: "Back", exercises: ["rows", "lat pulldown", "cable pulldown"] },
        { id: 4, name: "Biceps", exercises: ["curls", "hammer curls", "machine curls"] },
        { id: 5, name: "Triceps", exercises: ["tricep extensions", "triceps machine", "skull crushers"] },
        { id: 6, name: "Shoulders", exercises: ["lat raises", "shoulder press", "rear flies"] },
        { id: 7, name: "Abs", exercises: ["sit ups", "planks", "crunches"] },
        { id: 8, name: "Cardio", exercises: ["treadmill", "bike", "running"] },
    ]


    return (
        <aside className='w-[480px] relative bg-slate-600 flex flex-col gap-y-3' ref={panelRef}>
            <div className='absolute w-1 h-full bg-black right-0 hover:cursor-ew-resize' onMouseDown={handleMouseDown} />
            <div className='flex justify-evenly w-full h-40 items-center flex-wrap'>
                {muscleGroups.map((elem) => (
                    <button role="button" className={twMerge('border border-white py-5 w-20 rounded-lg text-center hover:bg-slate-300', groupSelected == elem.id ? "border-green-300" : "")} key={elem.id} onClick={() => setGroupSelected(elem.id)}> {elem.name} </button>
                ))}
            </div>
            <hr />
            {groupSelected && 
                <ExercisesList 
                    name={muscleGroups[groupSelected-1].name}
                    exercises={muscleGroups[groupSelected-1].exercises } />
            }

        </aside>


    )
}

export default UserPanel