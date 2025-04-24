import { create } from "zustand";
import { reset as resetPlayerStore } from "./player";
import useMapStore from "./map";

const useStore = create((set) => ({
  status: "running",
  score: 0,
  updateScore: (rowIndex) => {
    set((state) => ({ score: Math.max(rowIndex, state.score) }));
  },
  endGame: () => {
    set({ status: "over" });
  },
  reset: () => {
    useMapStore.getState().reset();
    resetPlayerStore();
    set({ status: "running", score: 0 });
  },
}));

export default useStore;
