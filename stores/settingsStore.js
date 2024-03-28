import { create } from "zustand";

const useSettingsStore = create((set) => ({
  darkMode: false,
  toggleDarkMode: () => set((state) => ({ darkMode: !state.darkMode })),
}));

export default useSettingsStore;
