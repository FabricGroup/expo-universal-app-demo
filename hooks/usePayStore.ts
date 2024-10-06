import { create } from "zustand";

type PayStore = {
  payId: string;
} & {
  setPayId: (payId: string) => void;
};

export const usePayStore = create<PayStore>((set) => ({
  payId: '',
  setPayId(payId: string) {
    set({ payId });
  },
}));
