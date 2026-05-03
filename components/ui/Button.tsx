import React from "react";
import { motion } from "framer-motion";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost" | "danger";
  size?: "sm" | "md" | "lg";
  isLoading?: boolean;
  fullWidth?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = "primary",
      size = "md",
      isLoading = false,
      fullWidth = false,
      children,
      className = "",
      ...props
    },
    ref
  ) => {
    const baseClass =
      "inline-flex items-center justify-center font-medium rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed";

    const variants = {
      primary: "bg-gradient-to-r from-blue-600 to-blue-700 text-white hover:shadow-lg hover:scale-105",
      secondary: "bg-gray-100 text-gray-900 hover:bg-gray-200",
      ghost: "bg-transparent text-gray-600 hover:bg-gray-100",
      danger: "bg-red-600 text-white hover:bg-red-700",
    };

    const sizes = {
      sm: "px-3 py-1.5 text-sm",
      md: "px-4 py-2.5 text-base",
      lg: "px-6 py-3 text-lg",
    };

    return (
      <motion.button
        ref={ref}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className={`${baseClass} ${variants[variant]} ${sizes[size]} ${
          fullWidth ? "w-full" : ""
        } ${className}`}
        disabled={isLoading}
        {...props}
      >
        {isLoading ? (
          <>
            <span className="relative w-4 h-4 mr-2">
              <span className="absolute w-full h-full border-2 border-transparent border-t-current border-r-current rounded-full animate-spin" />
            </span>
            Loading...
          </>
        ) : (
          children
        )}
      </motion.button>
    );
  }
);

Button.displayName = "Button";
