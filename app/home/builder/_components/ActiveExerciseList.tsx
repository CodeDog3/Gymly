import React, { PropsWithChildren, SetStateAction } from 'react'

type Props = {
    name: string,
    sets: number,
    reps: number,
    ExerciseIndex: number,
}

type Dispatch = {
    dispatch: React.Dispatch<React.SetStateAction<{
        name: string;
        reps: number;
        sets: number;
    }[]>>
}

const ActiveExerciseList = ({name, sets, reps, children, ExerciseIndex, dispatch }: PropsWithChildren<Props> & Dispatch) => {

    const handleChange = (e:React.ChangeEvent<HTMLInputElement>, idx:number, type:string) =>{
        let value:number;
        try{
            value = parseInt(e.target.value);
        }
        catch(e){
            console.log(e)
        }

        if(type === "sets" && e.target.value!=null){[
            dispatch(state => {
                const newState = state;
                newState[idx].sets = value;
                return newState;
            })
        ]}
        if(type === "reps" && e.target.value != null){
            dispatch(state =>{
                const newState = state;
                newState[idx].reps = value
                return newState
            })
        }
    }

  return (
    <div 
    className='w-full py-4 bg-slate-400 rounded-md flex justify-evenly'>
        <div>{name} </div>
        <div>
        <label>Sets</label>
        <input className='w-6' type='number' required onChange={(e) => handleChange(e, ExerciseIndex, "sets")}></input>
        </div>
        <div>
        <label>Reps</label>
        <input className='w-6' type='number' required onChange={(e) => handleChange(e, ExerciseIndex, "reps")}></input>
        </div>
    </div>
  )
}

export default ActiveExerciseList