import { create } from "zustand";

type PayStore = {
  account: string;
  bsb: string;
  name: string;

  setPaymentDetails: (details: { account: string; bsb: string; name?: string }) => void;
  setAccount: (account: string) => void;
  setBsb: (bsb: string) => void;
  setName: (name: string) => void;
};

export const usePayStore = create<PayStore>((set) => ({
  account: '',
  bsb: '',
  name: '',

  setPaymentDetails({ account, bsb, name }: { account: string; bsb: string; name?: string }) { 
    set({ account, bsb, name: name ?? '' });
  },
  setAccount(account: string) {
    set({ account });
  },
  setBsb(bsb: string) {
    set({ bsb });
  },
  setName(name: string) {
    set({ name });
  },
}));
