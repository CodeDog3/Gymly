import {create} from 'zustand'

type State = {
    isOpen : boolean
}

type Actions = {
   toggleModal : () => void
}
export const useModalStore = create<State & Actions>((set) => ({
    isOpen : false ,
    toggleModal : () => set(state => ({isOpen : !state.isOpen})),
}));