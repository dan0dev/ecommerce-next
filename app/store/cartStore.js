import { create } from "zustand";

export const useCartStore = create((set) => ({
  count: 0,
  addToCart: () =>
    set((state) => ({
      count: state.count + 1,
    })),
}));
