import { motion } from "framer-motion";
import { Check, ShoppingCart, X } from "lucide-react";

interface ToastProps {
  message: string;
  isVisible: boolean;
  onClose: () => void;
  isError?: boolean;
  title?: string;
  onCheckout?: () => void;
}

const Toast = ({
  message,
  onClose,
  isError = false,
  title,
  onCheckout,
}: ToastProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: "100%" }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: "100%" }}
      transition={{ type: "spring", stiffness: 300, damping: 25 }}
      className="fixed bottom-4 right-4 left-4 md:left-auto md:max-w-sm z-50"
    >
      <div className="bg-white rounded-lg shadow-lg p-3 md:p-4 border border-gray-200 w-full">
        <div className="flex items-start gap-2 md:gap-3">
          <div className="flex-shrink-0">
            <div
              className={`w-6 h-6 md:w-8 md:h-8 rounded-full flex items-center justify-center ${
                isError ? "bg-red-100" : "bg-green-100"
              }`}
            >
              {isError ? (
                <X className="w-4 h-4 md:w-5 md:h-5 text-red-600" />
              ) : (
                <Check className="w-4 h-4 md:w-5 md:h-5 text-green-600" />
              )}
            </div>
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="font-medium text-sm md:text-base text-gray-900 truncate">
              {isError ? "Action Blocked" : title || "Added to Cart"}
            </h3>
            <p className="text-xs md:text-sm text-gray-600 mt-1 line-clamp-2">
              {message}
            </p>
            {!isError && onCheckout && (
              <button
                onClick={onCheckout}
                className="mt-2 md:mt-3 w-full md:w-auto inline-flex items-center justify-center gap-1 md:gap-2 px-3 md:px-4 py-1.5 md:py-2 bg-blue-600 text-white text-xs md:text-sm font-medium rounded-md hover:bg-blue-700 transition-colors"
              >
                <ShoppingCart className="w-3 h-3 md:w-4 md:h-4" />
                Checkout
              </button>
            )}
          </div>
          <button
            onClick={onClose}
            className="flex-shrink-0 text-gray-400 hover:text-gray-500 transition-colors p-1"
          >
            <X className="w-4 h-4 md:w-5 md:h-5" />
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default Toast;
