"use client"
import React, { ElementRef, useRef, useState } from 'react'
import { twMerge } from 'tailwind-merge';
import ExercisesList from './ExercisesList';
import GroupDropDown from './GroupDropDown';
import { useExerciseList } from '../../_hooks/useExerciseList';

const UserPanel = () => {
    const panelRef = useRef<ElementRef<"aside">>(null);
    const [groupSelected, setGroupSelected] = useState<null | number>(null)
    // const isResizing = useRef(false);

    const ExerciseList = useExerciseList(state => state.ExerciseList);


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

    return (
        <aside className='w-[360px] relative bg-[#111119] flex flex-col h-screen ' ref={panelRef}>

            <div className='w-[80%] min-w-[230px] h-fit flex mt-3 mx-auto justify-center '>
            <GroupDropDown muscleGroups={ExerciseList} dispatchFunction={setGroupSelected}
            className={"overflow-hidden rounded-md"}
            />
            </div>
            <div className='absolute w-[1px] h-full bg-gradient-to-b from-slate-400 to-[#02b096] right-0 hover:cursor-ew-resize' onMouseDown={handleMouseDown} />
            <div className='h-full overflow-hidden hover:overflow-y-auto no-scroll'>
                {groupSelected ?
                    <ExercisesList
                        name={ExerciseList[groupSelected - 1].name}
                        exercises={ExerciseList[groupSelected - 1].exercises} />
                :<h1 className='text-xs text-white text-center'>Please Select a Muscle Group to Continue.</h1>
    }
            </div>
        </aside>


    )
}

export default UserPanel