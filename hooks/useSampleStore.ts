import { create } from "zustand";

type SimpleStage = "idle" | "pending" | "done" | "error";
type SimpleStore = {
  stage: SimpleStage;
} & {
  moveTo: (stage: SimpleStage) => void;
};

export const useSampleStore = create<SimpleStore>((set) => ({
  stage: "idle",
  moveTo(stage: SimpleStage) {
    set({ stage });
  },
}));
