"use client";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { COLLECTION_DATA } from "./collectionData";
import ProductCard from "./ProductCard";

const Collections = () => {
  const [activeTab, setActiveTab] = useState("All");
  const [favorites, setFavorites] = useState({});

  const products = COLLECTION_DATA[activeTab];

  const toggleFavorite = (index) => {
    setFavorites((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  return (
    <section className="w-full py-6">
      <div className="container mx-auto">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl tracking-wide">New Collection</h1>
          </div>

          <div className="flex space-x-2">
            {Object.keys(COLLECTION_DATA).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-8 py-3 rounded-full uppercase text-md transition-colors ${
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
            className="grid grid-cols-4 gap-6"
          >
            {products.map((product, index) => (
              <ProductCard
                key={index}
                product={product}
                index={index}
                isFavorite={favorites[index]}
                onFavoriteToggle={toggleFavorite}
              />
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Collections;
