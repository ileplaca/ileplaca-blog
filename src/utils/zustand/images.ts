import { create } from 'zustand'

type State = {
  currentSrc: string
};

type Action = {
  setCurrentSrc: (src: string) => void;
};

export const useImagesStore = create<State & Action>((set) => ({
  currentSrc: "",
  setCurrentSrc: (src: string) => set((state: { currentSrc: string }) => ({ currentSrc: src })),
}))