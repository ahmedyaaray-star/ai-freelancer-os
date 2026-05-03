import React from "react";
import { motion } from "framer-motion";

interface SkeletonProps {
  count?: number;
  className?: string;
}

export const Skeleton: React.FC<SkeletonProps> = ({ count = 1, className = "" }) => {
  return (
    <>
      {Array.from({ length: count }).map((_, i) => (
        <motion.div
          key={i}
          animate={{ opacity: [0.6, 1, 0.6] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className={`bg-gray-200 rounded-lg ${className}`}
        />
      ))}
    </>
  );
};
