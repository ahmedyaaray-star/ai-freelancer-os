'use client'
import React from "react";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { motion } from "framer-motion";
import { Plus, Check, Clock, AlertCircle } from "lucide-react";

export const ProjectKanban: React.FC = () => {
  const [projects, setProjects] = React.useState({
    planning: [
      { id: 1, title: "Website Redesign", client: "Tech Co.", deadline: "7 days" },
      { id: 2, title: "Logo Design", client: "Startup Inc.", deadline: "14 days" },
    ],
    in_progress: [
      { id: 3, title: "Content Writing", client: "Agency", deadline: "3 days" },
    ],
    review: [
      { id: 4, title: "Mobile App UI", client: "FinTech", deadline: "2 days" },
    ],
    completed: [
      { id: 5, title: "Email Campaign", client: "E-commerce", deadline: "Done" },
    ],
  });

  const statuses = [
    { key: "planning", label: "Planning", color: "blue" },
    { key: "in_progress", label: "In Progress", color: "orange" },
    { key: "review", label: "In Review", color: "purple" },
    { key: "completed", label: "Completed", color: "green" },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Project Dashboard</h1>
        <p className="text-gray-600 mt-2">Manage all your projects in one view</p>
      </div>

      <div className="overflow-x-auto">
        <div className="min-w-full grid grid-cols-4 gap-4">
          {statuses.map((status) => (
            <div key={status.key}>
              <div className="flex items-center gap-2 mb-4">
                <h2 className="font-bold text-gray-900">{status.label}</h2>
                <Badge variant="gray">
                  {projects[status.key as keyof typeof projects].length}
                </Badge>
              </div>

              <div className="space-y-3">
                {projects[status.key as keyof typeof projects].map((project) => (
                  <motion.div
                    key={project.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    whileHover={{ y: -2 }}
                    className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-all cursor-grab active:cursor-grabbing"
                  >
                    <h3 className="font-medium text-gray-900 text-sm mb-2">
                      {project.title}
                    </h3>
                    <p className="text-xs text-gray-600 mb-3">{project.client}</p>
                    <div className="flex items-center gap-2 text-xs text-gray-500">
                      <Clock className="w-3 h-3" />
                      {project.deadline}
                    </div>
                  </motion.div>
                ))}

                {/* Add Button */}
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full p-3 border-2 border-dashed border-gray-300 rounded-lg text-gray-600 hover:border-gray-400 hover:bg-gray-50 transition-all text-sm font-medium"
                >
                  <Plus className="w-4 h-4 inline mr-2" />
                  Add Project
                </motion.button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
