"use client"
import React, { useState } from 'react'
import { useModalStore } from '../../_hooks/useModalStore'
import AddExerciseModal from './AddExerciseModal'
import ActiveExerciseList from './ActiveExerciseList'
import { DragDropContext, Draggable, Droppable, OnDragEndResponder } from 'react-beautiful-dnd';

const Dropper = () => {
    const isOpen = useModalStore(state => state.isOpen);
    const [dropzone, setDropzone] = useState<{name: string, reps:number, sets: number}[]>([])
  
    const handleDrop = (e: React.DragEvent) => {
      const newExercise = e.dataTransfer.getData("exercise") as string
      setDropzone((dropzone) => [...dropzone, {name:newExercise, reps: 0, sets: 0}])
  
    }
    const handleDragOver = (e: React.DragEvent) => {
      e.preventDefault();
    }

    const handleDragEnd = (result: any)=> {
      if(!result.destination) return;
      const items = Array.from(dropzone);
      const [...reorderedItem] = items.splice(result.source.index, 1);
      items.splice(result.destination.index,0,...reorderedItem);
      setDropzone(items)
      console.log(dropzone);
    }

    return (
  
        <div className='h-screen grid place-items-center bg-slate-900'>
          <DragDropContext onDragEnd={handleDragEnd}>
            <Droppable droppableId='exercise-item'>
              {(provided) => (
          <ul onDrop={handleDrop} onDragOver={handleDragOver} {...provided.droppableProps} ref={provided.innerRef} className='border-2 h-[40%] w-[40%] border-green-600 flex flex-col gap-y-1'>
            {dropzone.map((item, idx) => (
              <Draggable key={idx} draggableId={idx.toString()} index={idx}>
                {(provided) => (
                  <li {...provided.draggableProps} ref={provided.innerRef} {...provided.dragHandleProps}>
                    <ActiveExerciseList  ExerciseIndex={idx} name={item.name} sets={item.sets} reps={item.reps} dispatch={setDropzone} />
                  </li>
                )}
              </Draggable>
            ))}
            {provided.placeholder}
          </ul>
        )}
          </Droppable>
          </DragDropContext>
          {isOpen && <AddExerciseModal />}
        </div>
  
    )
}

export default Dropper