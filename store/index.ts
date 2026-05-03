import { create } from "zustand";
import { User, Plan, Project, Task, Client } from "@/types";

interface AppStore {
  // User state
  user: User | null;
  isAuthenticated: boolean;
  plan: Plan | null;
  
  // UI state
  sidebarOpen: boolean;
  theme: "light" | "dark";
  
  // Feature data
  projects: Project[];
  tasks: Task[];
  clients: Client[];
  
  // Loading states
  isLoading: boolean;
  
  // Actions
  setUser: (user: User | null) => void;
  setPlan: (plan: Plan | null) => void;
  toggleSidebar: () => void;
  setTheme: (theme: "light" | "dark") => void;
  setProjects: (projects: Project[]) => void;
  setTasks: (tasks: Task[]) => void;
  setClients: (clients: Client[]) => void;
  setIsLoading: (isLoading: boolean) => void;
  logout: () => void;
}

export const useAppStore = create<AppStore>((set) => ({
  // Initial state
  user: null,
  isAuthenticated: false,
  plan: null,
  sidebarOpen: true,
  theme: "light",
  projects: [],
  tasks: [],
  clients: [],
  isLoading: false,
  
  // Actions
  setUser: (user) =>
    set({
      user,
      isAuthenticated: !!user,
    }),
  setPlan: (plan) => set({ plan }),
  toggleSidebar: () =>
    set((state) => ({
      sidebarOpen: !state.sidebarOpen,
    })),
  setTheme: (theme) => set({ theme }),
  setProjects: (projects) => set({ projects }),
  setTasks: (tasks) => set({ tasks }),
  setClients: (clients) => set({ clients }),
  setIsLoading: (isLoading) => set({ isLoading }),
  logout: () =>
    set({
      user: null,
      isAuthenticated: false,
      plan: null,
      projects: [],
      tasks: [],
      clients: [],
    }),
}));
