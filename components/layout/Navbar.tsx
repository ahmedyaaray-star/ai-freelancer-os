
'use client'
import React from "react";
import Link from "next/link";
import { Bell, Search, MoreVertical } from "lucide-react";
import { motion } from "framer-motion";

export const Navbar: React.FC = () => {
  const [notificationOpen, setNotificationOpen] = React.useState(false);

  return (
    <nav className="h-16 bg-white border-b border-gray-200 flex items-center justify-between px-8 sticky top-0 z-40 shadow-sm">
      {/* Search Bar */}
      <div className="flex-1 max-w-md">
        <div className="relative group">
          <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400 group-focus-within:text-blue-500 transition-colors" />
          <input
            type="text"
            placeholder="Search replies, clients..."
            className="w-full pl-11 pr-4 py-2.5 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all hover:border-gray-300"
          />
        </div>
      </div>

      {/* Right Section */}
      <div className="flex items-center gap-6 ml-8">
        {/* Notification Bell */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          className="relative p-2.5 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors"
          onClick={() => setNotificationOpen(!notificationOpen)}
        >
          <Bell className="w-5 h-5" />
          <span className="absolute top-2 right-2 w-2.5 h-2.5 bg-red-500 rounded-full animate-pulse" />
        </motion.button>

        {/* Divider */}
        <div className="w-px h-6 bg-gray-200" />

        {/* User Menu */}
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-sm cursor-pointer hover:shadow-lg transition-shadow">
            AF
          </div>
          <motion.button
            whileHover={{ scale: 1.1 }}
            className="p-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <MoreVertical className="w-5 h-5" />
          </motion.button>
        </div>
      </div>
    </nav>
  );
};
