import {create} from "zustand"
import ExercisesList from "../builder/_components/ExercisesList";

const ExerciseListInitial = {
    Legs : { id: 1, name: "Legs", exercises: ["lunges", "squats", "leg extensions"] },
    Chest :{ id: 2, name: "Chest", exercises: ["bench press", "incline bench press", "pec flies"] },
    Back : { id: 3, name: "Back", exercises: ["rows", "lat pulldown", "cable pulldown"] },
    Biceps : { id: 4, name: "Biceps", exercises: ["curls", "hammer curls", "machine curls"] },
    Triceps : { id: 5, name: "Triceps", exercises: ["tricep extensions", "triceps machine", "skull crushers"] },
    Shoulders : { id: 6, name: "Shoulders", exercises: ["lat raises", "shoulder press", "rear flies"] },
    Abs : { id: 7, name: "Abs", exercises: ["sit ups", "planks", "crunches"] },
    Cardio : { id: 8, name: "Cardio", exercises: ["treadmill", "bike", "running", "swimming", "jumping", "plyometrics", "sprinting", "sports", "skiing"] },
};

type Actions = {
    AddExercise : (exercise : string, group:string) => void,
    // RemoveExercise : (id:number) => void
}

type ExerciseList = {
    [key:string] : {
        id: number,
        name: string,
        exercises: string[],
    }
}

type State ={
    ExerciseList : ExerciseList
}

export const useExerciseList = create<Actions & State>(set => ({
     ExerciseList : ExerciseListInitial,
     AddExercise : (newExercise, group) => set(state => {
        const newList = state.ExerciseList;
        newList[group].exercises = [...state.ExerciseList[group].exercises, newExercise]
        console.log("aaa",newList);
        return {ExerciseList : newList}
     })})
)