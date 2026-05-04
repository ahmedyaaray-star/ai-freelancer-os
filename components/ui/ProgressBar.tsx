'use client'
import React from "react";
import { motion } from "framer-motion";

interface ProgressBarProps {
  progress: number;
  showLabel?: boolean;
  color?: "blue" | "green" | "orange" | "red";
}

export const ProgressBar: React.FC<ProgressBarProps> = ({
  progress,
  showLabel = true,
  color = "blue",
}) => {
  // ✅ Clamp between 0 and 100
  const safeProgress = Math.max(0, Math.min(progress, 100));

  const colors = {
    blue: "bg-blue-600",
    green: "bg-green-600",
    orange: "bg-orange-600",
    red: "bg-red-600",
  };

  return (
    <div className="w-full">
      <div className="flex items-center justify-between mb-2">
        <div
          className="h-2 flex-grow bg-gray-200 rounded-full overflow-hidden"
          role="progressbar"
          aria-valuenow={safeProgress}
          aria-valuemin={0}
          aria-valuemax={100}
        >
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: `${safeProgress}%` }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className={`h-full ${colors[color]}`}
          />
        </div>

        {showLabel && (
          <span className="ml-3 text-sm font-medium text-gray-700">
            {safeProgress}%
          </span>
        )}
      </div>
    </div>
  );
};