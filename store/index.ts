'use client';

import { create } from "zustand";

interface User {
  id: string;
  name: string;
  email: string;
}

interface Plan {
  name: string;
}

interface Project {
  id: string;
}

interface Task {
  id: string;
}

interface Client {
  id: string;
}

interface AppStore {
  user: User | null;
  isAuthenticated: boolean;
  plan: Plan | null;

  sidebarOpen: boolean;
  theme: "light" | "dark";

  projects: Project[];
  tasks: Task[];
  clients: Client[];

  isLoading: boolean;

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
  user: null,
  isAuthenticated: false,
  plan: null,
  sidebarOpen: true,
  theme: "light",
  projects: [],
  tasks: [],
  clients: [],
  isLoading: false,

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