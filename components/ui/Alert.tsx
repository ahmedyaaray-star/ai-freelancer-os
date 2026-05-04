'use client'
import React from "react";
import { motion } from "framer-motion";
import { CheckCircle2, AlertCircle, InfoIcon, XCircle } from "lucide-react";

interface AlertProps {
  type?: "success" | "error" | "warning" | "info";
  title?: string;
  message: string;
  onClose?: () => void;
  closeable?: boolean;
}

export const Alert: React.FC<AlertProps> = ({
  type = "info",
  title,
  message,
  onClose,
  closeable = true,
}) => {
  const typeStyles = {
    success: "bg-green-50 border-green-200 text-green-800",
    error: "bg-red-50 border-red-200 text-red-800",
    warning: "bg-yellow-50 border-yellow-200 text-yellow-800",
    info: "bg-blue-50 border-blue-200 text-blue-800",
  };

  const icons = {
    success: <CheckCircle2 className="w-5 h-5" />,
    error: <XCircle className="w-5 h-5" />,
    warning: <AlertCircle className="w-5 h-5" />,
    info: <InfoIcon className="w-5 h-5" />,
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      className={`${typeStyles[type]} border rounded-lg p-4 flex items-start gap-3`}
    >
      <div className="flex-shrink-0 mt-0.5">{icons[type]}</div>
      <div className="flex-grow">
        {title && <h3 className="font-semibold mb-1">{title}</h3>}
        <p className="text-sm">{message}</p>
      </div>
      {closeable && onClose && (
        <button
          onClick={onClose}
          className="flex-shrink-0 ml-2 hover:opacity-75 transition-opacity"
        >
          <span className="text-xl leading-none">&times;</span>
        </button>
      )}
    </motion.div>
  );
};
