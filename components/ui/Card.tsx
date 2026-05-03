import React from "react";
import { motion } from "framer-motion";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "elevated" | "outlined";
  hoverable?: boolean;
}

export const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({
    variant = "default",
    hoverable = false,
    className = "",
    children,
    ...props
  }, ref) => {
    const variants = {
      default: "bg-white rounded-lg border border-gray-200",
      elevated:
        "bg-white rounded-lg shadow-lg",
      outlined: "bg-transparent rounded-lg border-2 border-gray-200",
    };

    return (
      <motion.div
        ref={ref}
        whileHover={hoverable ? { y: -2 } : undefined}
        className={`
          ${variants[variant]} 
          transition-all duration-300 
          ${hoverable ? "cursor-pointer hover:shadow-xl" : ""}
          ${className}
        `}
        {...props}
      >
        {children}
      </motion.div>
    );
  }
);

Card.displayName = "Card";
