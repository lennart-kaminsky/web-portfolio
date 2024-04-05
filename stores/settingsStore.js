import { create } from "zustand";
import { persist } from "zustand/middleware";

const useSettingsStore = create(
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

export default useSettingsStore;
