"use client";
import { AnimatePresence, motion } from "framer-motion";
import { useCallback, useState } from "react";
import { COLLECTION_DATA } from "./collectionData";
import ProductCard from "./ProductCard";
import Toast from "./Toast";

const generateId = () => Math.random().toString(36).substr(2, 9);

const Collections = () => {
  const [activeTab, setActiveTab] = useState("All");
  const [favorites, setFavorites] = useState({});
  const [toasts, setToasts] = useState([]);
  const [clickCount, setClickCount] = useState(0);
  const [isBlocked, setIsBlocked] = useState(false);
  const [lastAddedProduct, setLastAddedProduct] = useState(null);

  const products = COLLECTION_DATA[activeTab];

  const toggleFavorite = (index) => {
    setFavorites((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  const addToast = (message, isError = false, title) => {
    const newToast = {
      id: generateId(),
      message,
      isError,
      title,
    };
    setToasts((prev) => [...prev, newToast]);

    setTimeout(
      () => {
        removeToast(newToast.id);
      },
      isError ? 5000 : 3000
    );
  };

  const removeToast = (id) => {
    setToasts((prev) => prev.filter((toast) => toast.id !== id));
  };

  const handleAddToCart = useCallback(
    (product) => {
      if (isBlocked) {
        addToast("Please wait 5 seconds before adding more items.", true);
        return;
      }

      setLastAddedProduct(product);

      setClickCount((prev) => {
        const newCount = prev + 1;

        if (newCount >= 3) {
          setIsBlocked(true);
          setTimeout(() => {
            setIsBlocked(false);
            setClickCount(0);
          }, 5000);
        }

        return newCount;
      });

      addToast(
        `${product.name} has been added to your cart.`,
        false,
        "Added to Cart"
      );
    },
    [isBlocked]
  );

  return (
    <section className="w-full py-4 sm:py-6">
      <div className="container mx-auto px-6 lg:px-0">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 sm:gap-8 mb-6 sm:mb-8">
          <div>
            <h1 className="text-2xl sm:text-3xl tracking-wide">
              New Collection
            </h1>
          </div>

          <div className="flex flex-wrap gap-2 sm:space-x-2">
            {Object.keys(COLLECTION_DATA).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 sm:px-8 py-2 sm:py-3 rounded-full text-sm sm:text-md uppercase transition-colors flex-1 sm:flex-none ${
                  activeTab === tab
                    ? "bg-black text-white"
                    : "bg-none text-black border border-gray-200/80 hover:bg-gray-100/80"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6"
          >
            {products.map((product, index) => (
              <ProductCard
                key={index}
                product={product}
                index={index}
                isFavorite={favorites[index]}
                onFavoriteToggle={toggleFavorite}
                onAddToCart={() => handleAddToCart(product)}
              />
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
      <div className="fixed bottom-4 right-4 z-50 flex flex-col-reverse gap-3">
        {toasts.map((toast) => (
          <Toast
            key={toast.id}
            message={toast.message}
            title={toast.title}
            isVisible={true}
            onClose={() => removeToast(toast.id)}
            isError={toast.isError}
          />
        ))}
      </div>
    </section>
  );
};

export default Collections;
