import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useLocalStorageStore = create(
  persist(
    (set, get) => ({
      darkMode: true,
      toggleDarkMode: () => set({ darkMode: !get().darkMode }),
    }),
    {
      name: "settings-storage",
    }
  )
);

export const useLkStore = create((set) => ({
  showHeader: false,
  setShowHeader: (value) => set(() => ({ showHeader: value })),
}));
