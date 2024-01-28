import { create } from "zustand"

type State = {
    id: number|null
}

type Action = {
    setID : (newID: number) => void
}

export const useSelectedExercise = create<State & Action>(set =>({
    id:null,
    setID : (newID) => set({id: newID})
}))