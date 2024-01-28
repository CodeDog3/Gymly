import {create} from "zustand"
import ExercisesList from "../builder/_components/ExercisesList";

const ExerciseListInitial = [
    { id: 1, name: "Legs", exercises: ["lunges", "squats", "leg extensions"] },
    { id: 2, name: "Chest", exercises: ["bench press", "incline bench press", "pec flies"] },
    { id: 3, name: "Back", exercises: ["rows", "lat pulldown", "cable pulldown"] },
    { id: 4, name: "Biceps", exercises: ["curls", "hammer curls", "machine curls"] },
    { id: 5, name: "Triceps", exercises: ["tricep extensions", "triceps machine", "skull crushers"] },
    { id: 6, name: "Shoulders", exercises: ["lat raises", "shoulder press", "rear flies"] },
    { id: 7, name: "Abs", exercises: ["sit ups", "planks", "crunches"] },
    { id: 8, name: "Cardio", exercises: ["treadmill", "bike", "running", "swimming", "jumping", "plyometrics", "sprinting", "sports", "skiing"] },
];

type Actions = {
    AddExercise : (exercise : string, id:number) => void,
    // RemoveExercise : (id:number) => void
}

type ExerciseList = {
        id: number,
        name: string,
        exercises: string[],
}[]

type State ={
    ExerciseList : ExerciseList
}

export const useExerciseList = create<Actions & State>((set) => ({
     ExerciseList : ExerciseListInitial,
     AddExercise : (newExercise, id) => set((state) => {
        
        let newState = [...state.ExerciseList];

        newState[id-1].exercises = [...newState[id-1].exercises, newExercise]
        return {ExerciseList: newState}
     }
     )})
)