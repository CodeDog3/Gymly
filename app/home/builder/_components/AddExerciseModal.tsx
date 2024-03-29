import { FormEvent, LegacyRef, MutableRefObject, useRef } from "react";
import { useExerciseList } from "../../_hooks/useExerciseList";
import { useModalStore } from "../../_hooks/useModalStore"
import { useSelectedExercise } from "../../_hooks/useSelectedExercise";
import React from "react";

const AddExerciseModal = () => {


const ExerciseName = React.createRef<HTMLInputElement>();

const toggleModal = useModalStore(state => state.toggleModal);
const AddExercise = useExerciseList(state => state.AddExercise);
const selectedID = useSelectedExercise(state => state.id);

const submitHandler = (e:FormEvent<HTMLFormElement>) => {
  e.preventDefault();

  if(ExerciseName.current?.value != "" && ExerciseName.current != null && selectedID != null){
    AddExercise(ExerciseName.current.value, selectedID)
  }

  toggleModal();
}

  return (
    <form onSubmit={(e)=> submitHandler(e)}
    className='h-[400px] w-[325px] bg-[#212121] border-[#02b096] border-t-2 border-b-4 absolute z-50 left-[40%] top-[50%] translate-x-[-50%] translate-y-[-50%] rounded-lg shadow-lg text-[#02b096]'>
      <h2 className='text-white text-center text-2xl m-0 font-extrabold'>Enter A Custom Exercise</h2>
      <div className='flex flex-col gap-y-3 h-full mt-10 px-3'>
        <label className='text-lg font-bold'>Exercise Name</label>
        <input ref={ExerciseName} type='text' maxLength={15} className='rounded-sm px-2 font-medium' ></input>
        <label className='text-lg font-bold'>Description</label>
        <textarea className='h-[150px] rounded-sm px-2 font-medium'></textarea>
        <div className="flex justify-center gap-x-8">
          <button type='submit'>Submit</button>
          <button onClick={toggleModal}>Cancel</button>
        </div>

      </div>

    </form>

  )
}

export default AddExerciseModal