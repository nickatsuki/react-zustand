import { create } from "zustand";

interface AuthState {
  user: string;
  login: (username: string) => void;
  logout: () => void;
}

const useAuthStore = create<AuthState>((set) => ({
  user: "",
  login: (username: string) => set(() => ({ user: username })),
  logout: () => set(() => ({ user: "" })),
}));

export default useAuthStore;
