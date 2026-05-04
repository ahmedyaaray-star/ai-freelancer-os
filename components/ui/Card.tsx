
'use client'
import React from "react";
import { motion, type HTMLMotionProps } from "framer-motion";

interface CardProps extends HTMLMotionProps<"div"> {
  hoverable?: boolean;
}

export const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ children, className = "", hoverable = false, ...props }, ref) => {
    return (
      <motion.div
        ref={ref}
        whileHover={hoverable ? { y: -4, boxShadow: '0 20px 40px rgba(0,0,0,0.1)' } : undefined}
        transition={{ duration: 0.2 }}
        className={`bg-white rounded-xl shadow-sm border border-gray-200/50 p-6 transition-all duration-200 ${hoverable ? 'cursor-pointer' : ''} ${className}`}
        {...props}
      >
        {children}
      </motion.div>
    );
  }
);

Card.displayName = "Card";