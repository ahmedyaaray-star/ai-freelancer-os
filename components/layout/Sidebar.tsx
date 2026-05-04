'use client'
import React from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { motion } from "framer-motion";
import {
  Sparkles,
  MessageSquare,
  Clock,
  Kanban,
  Briefcase,
  FileText,
  AlertCircle,
  Users,
  Zap,
  Settings,
  LogOut,
  Menu,
  X,
} from "lucide-react";
import { useAppStore } from "@/store";
import { useAuth } from "@/hooks/useAuth";

export const Sidebar: React.FC = () => {
  const router = useRouter();
  const { sidebarOpen, toggleSidebar } = useAppStore();
  const { user, logout } = useAuth();
  const [isMobileOpen, setIsMobileOpen] = React.useState(false);

  const navItems = [
    {
      label: "Overview",
      href: "/dashboard",
      icon: <Sparkles className="w-5 h-5" />,
    },
    {
      label: "AI Proposal Writer",
      href: "/dashboard/proposals",
      icon: <FileText className="w-5 h-5" />,
    },
    {
      label: "Client Replies",
      href: "/dashboard/replies",
      icon: <MessageSquare className="w-5 h-5" />,
    },
    {
      label: "Follow-ups",
      href: "/dashboard/followups",
      icon: <Clock className="w-5 h-5" />,
    },
    {
      label: "Projects",
      href: "/dashboard/projects",
      icon: <Kanban className="w-5 h-5" />,
    },
    {
      label: "Tasks",
      href: "/dashboard/tasks",
      icon: <Briefcase className="w-5 h-5" />,
    },
    {
      label: "Clients",
      href: "/dashboard/clients",
      icon: <Users className="w-5 h-5" />,
    },
    {
      label: "Automation",
      href: "/dashboard/automation",
      icon: <Zap className="w-5 h-5" />,
    },
    {
      label: "Reports",
      href: "/dashboard/reports",
      icon: <AlertCircle className="w-5 h-5" />,
    },
    {
      label: "Settings",
      href: "/dashboard/settings",
      icon: <Settings className="w-5 h-5" />,
    },
  ];

  const pathname = usePathname();

  const handleLogout = () => {
    logout();
    router.push("/");
  };

  const isActive = (href: string) => pathname === href;

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsMobileOpen(!isMobileOpen)}
        className="show-mobile fixed top-4 left-4 z-50 p-2 bg-white rounded-lg shadow-md"
      >
        {isMobileOpen ? (
          <X className="w-6 h-6" />
        ) : (
          <Menu className="w-6 h-6" />
        )}
      </button>

      {/* Sidebar */}
      <motion.div
        animate={{
          width: sidebarOpen ? 280 : 80,
          x: isMobileOpen ? 0 : "-100%",
        }}
        transition={{ duration: 0.3 }}
        className="hide-mobile fixed left-0 top-0 h-screen bg-gradient-to-b from-slate-900 to-slate-800 text-white overflow-y-auto shadow-2xl"
      >
        {/* Logo */}
        <div className="p-6 border-b border-slate-700">
          <Link href="/dashboard" className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-r from-blue-400 to-purple-500 rounded-lg flex items-center justify-center font-bold text-lg">
              AI
            </div>
            {sidebarOpen && (
              <div>
                <h1 className="font-bold text-white">AI Freelancer</h1>
                <p className="text-xs text-gray-400">Operating System</p>
              </div>
            )}
          </Link>
        </div>

        {/* Navigation */}
        <nav className="p-4 space-y-2">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href}>
              <motion.div
                whileHover={{ x: 5 }}
                className={`
                  flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200
                  ${
                    isActive(item.href)
                      ? "bg-blue-600 text-white"
                      : "text-gray-300 hover:bg-slate-700"
                  }
                `}
              >
                {item.icon}
                {sidebarOpen && <span className="text-sm font-medium">{item.label}</span>}
              </motion.div>
            </Link>
          ))}
        </nav>

        {/* User Profile */}
        <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-slate-700 bg-slate-900">
          {sidebarOpen ? (
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full flex items-center justify-center font-bold text-sm">
                  {user?.name.charAt(0).toUpperCase()}
                </div>
                <div className="flex-grow">
                  <p className="text-sm font-medium text-white">{user?.name}</p>
                  <p className="text-xs text-gray-400">{user?.email}</p>
                </div>
              </div>
              <button
                onClick={handleLogout}
                className="w-full flex items-center gap-2 px-3 py-2 text-sm text-gray-300 hover:bg-slate-700 rounded-lg transition-colors"
              >
                <LogOut className="w-4 h-4" />
                Logout
              </button>
            </div>
          ) : (
            <button
              onClick={handleLogout}
              className="w-full p-2 text-gray-300 hover:bg-slate-700 rounded-lg transition-colors"
            >
              <LogOut className="w-5 h-5 mx-auto" />
            </button>
          )}
        </div>
      </motion.div>

      {/* Mobile Overlay */}
      {isMobileOpen && (
        <div
          className="show-mobile fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={() => setIsMobileOpen(false)}
        />
      )}
    </>
  );
};
