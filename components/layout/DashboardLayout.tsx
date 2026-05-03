import React from "react";
import { Sidebar } from "./Sidebar";
import { Navbar } from "./Navbar";
import { useAppStore } from "@/store";

interface DashboardLayoutProps {
  children: React.ReactNode;
}

export const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children }) => {
  const { sidebarOpen } = useAppStore();

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className={`flex-1 flex flex-col transition-all duration-300 ${sidebarOpen ? "ml-80" : "ml-20"} hide-mobile`}>
        <Navbar />
        <main className="flex-1 overflow-y-auto p-6">
          {children}
        </main>
      </div>

      {/* Mobile View */}
      <div className="show-mobile flex-1 flex flex-col">
        <Navbar />
        <main className="flex-1 overflow-y-auto p-4">
          {children}
        </main>
      </div>
    </div>
  );
};
