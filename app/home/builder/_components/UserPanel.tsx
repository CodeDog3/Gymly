"use client"
import React, { ElementRef, useContext, useRef, useState } from 'react'

const UserPanel = () => {
    const panelRef = useRef<ElementRef<"aside">>(null);
    const sidebarRef = useRef<ElementRef<"aside">>(null);
    const [groupSelected, setGroupSelected] = useState<null|string>(null)
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
        { id: 1, name: "Legs" },
        { id: 2, name: "Chest" },
        { id: 3, name: "Back" },
        { id: 4, name: "Biceps" },
        { id: 5, name: "Triceps" },
        { id: 6, name: "Shoulders" },
        { id: 7, name: "Abs" },
        { id: 8, name: "Cardio" },
    ]


    return (
        <aside className='w-[480px] relative bg-slate-600 flex flex-col gap-y-3' ref={panelRef}>
            <div className='absolute w-1 h-full bg-black right-0 hover:cursor-ew-resize' onMouseDown={handleMouseDown} />
            <div className='flex justify-evenly w-full h-40 items-center flex-wrap'>
                {muscleGroups.map((elem)=>(
                    <div role="button" className='border border-white py-5 w-20 rounded-lg text-center' key={elem.id}> {elem.name} </div>
                ))}
            </div>
            <hr/>

        </aside>


    )
}

export default UserPanel