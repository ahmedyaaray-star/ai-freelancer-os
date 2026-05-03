import React from "react";
import { Bell, Search } from "lucide-react";

export const Navbar: React.FC = () => {
  return (
    <div className="h-16 bg-white border-b border-gray-200 flex items-center justify-between px-6 sticky top-0 z-40 shadow-sm">
      {/* Search */}
      <div className="flex-1 max-w-md">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
          <input
            type="text"
            placeholder="Search proposals, clients, projects..."
            className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>

      {/* Right Icons */}
      <div className="flex items-center gap-6 ml-6">
        <button className="relative p-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors">
          <Bell className="w-5 h-5" />
          <span className="absolute top-1 right-1 w-2 h-2 bg-red-600 rounded-full" />
        </button>
      </div>
    </div>
  );
};
