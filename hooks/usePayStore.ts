import { create } from "zustand";

type PayStore = {
  payId: string | null;
} & {
  setPayId: (payId: string) => void;
};

export const usePayStore = create<PayStore>((set) => ({
  payId: null,
  setPayId(payId: string) {
    set({ payId });
  },
}));
