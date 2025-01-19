import { motion } from "framer-motion";
import { Check, X } from "lucide-react";

interface ToastProps {
  message: string;
  isVisible: boolean;
  onClose: () => void;
  isError?: boolean;
  title?: string;
}

const Toast = ({ message, onClose, isError = false, title }: ToastProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: "100%" }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: "100%" }}
      transition={{ type: "spring", stiffness: 300, damping: 25 }}
    >
      <div className="bg-white rounded-lg shadow-lg p-4 max-w-sm border border-gray-200">
        <div className="flex items-start gap-3">
          <div className="flex-shrink-0">
            <div
              className={`w-8 h-8 rounded-full flex items-center justify-center ${
                isError ? "bg-red-100" : "bg-green-100"
              }`}
            >
              {isError ? (
                <X className="w-5 h-5 text-red-600" />
              ) : (
                <Check className="w-5 h-5 text-green-600" />
              )}
            </div>
          </div>
          <div className="flex-1">
            <h3 className="font-medium text-gray-900">
              {isError ? "Action Blocked" : title || "Added to Cart"}
            </h3>
            <p className="text-sm text-gray-600 mt-1">{message}</p>
          </div>
          <button
            onClick={onClose}
            className="flex-shrink-0 text-gray-400 hover:text-gray-500 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default Toast;
