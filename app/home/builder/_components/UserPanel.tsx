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

        if (newWidth < 360) newWidth = 360
        if (newWidth > 500) newWidth = 500

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
        { id: 8, name: "Cardio", exercises: ["treadmill", "bike", "running", "swimming", "jumping", "plyometrics", "sprinting", "sports", "skiing"] },
    ]


    return (
        <aside className='w-[360px] relative bg-[#1a1625] flex flex-col h-[calc(100vh-40px)] ' ref={panelRef}>
            <div className='absolute w-[2px] h-full bg-gray-400 right-0 hover:cursor-ew-resize' onMouseDown={handleMouseDown} />
            <div className='flex justify-evenly w-full h-40 items-center flex-wrap border-b border-white pb-3'>
                {muscleGroups.map((elem) => (
                    <button role="button" className={twMerge('border border-white py-3 w-20 rounded-lg text-center hover:bg-slate-300', groupSelected == elem.id ? "border-green-300" : "")} 
                    key={elem.id} onClick={() => setGroupSelected(elem.id)}> {elem.name} 
                    </button>
                ))}
            </div>
            <div className='h-full overflow-hidden hover:overflow-y-auto no-scroll'>
                {groupSelected &&
                    <ExercisesList
                        name={muscleGroups[groupSelected - 1].name}
                        exercises={muscleGroups[groupSelected - 1].exercises} />
                }
            </div>
        </aside>


    )
}

export default UserPanel