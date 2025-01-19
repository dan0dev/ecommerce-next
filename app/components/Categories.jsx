"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

const CATEGORY_DATA = {
  All: [
    { name: "Shoes", image: "/category/all1.png" },
    { name: "Jewelry", image: "/category/all2.jpg" },
    { name: "Bag", image: "/category/all3.png" },
    { name: "T-Shirt", image: "/category/all4.png" },
  ],
  Women: [
    { name: "Shoes", image: "/category/women1.png" },
    { name: "Jewelry", image: "/category/women2.png" },
    { name: "Bag", image: "/category/women3.png" },
    { name: "Top", image: "/category/women4.png" },
  ],
  Men: [
    { name: "Shoes", image: "/category/men1.png" },
    { name: "Jewelry", image: "/category/men2.png" },
    { name: "Bag", image: "/category/men3.png" },
    { name: "T-Shirt", image: "/category/men4.png" },
  ],
  Kids: [
    { name: "Shoes", image: "/api/placeholder/600/400" },
    { name: "Jewelry", image: "/api/placeholder/600/400" },
    { name: "Bag", image: "/api/placeholder/600/400" },
    { name: "T-Shirt", image: "/api/placeholder/600/400" },
  ],
};

const Categories = () => {
  const [activeTab, setActiveTab] = useState("All");

  const getDisplayCategories = () => {
    if (activeTab === "All") {
      return CATEGORY_DATA.All;
    }
    return CATEGORY_DATA[activeTab];
  };

  return (
    <section className="w-full py-4 sm:py-6">
      <div className="container mx-auto px-6 lg:px-0">
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 sm:gap-8 mb-6 sm:mb-8">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl tracking-wide font-medium">
            Browse by categories
          </h1>
          <div className="flex flex-wrap gap-2 sm:space-x-2">
            {Object.keys(CATEGORY_DATA).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`
                  px-4 sm:px-6 lg:px-8 py-2 sm:py-3 rounded-full text-sm sm:text-md uppercase
                  relative flex-1 sm:flex-none
                  ${
                    activeTab === tab
                      ? "bg-black text-white"
                      : "bg-white text-black border border-gray-200 hover:bg-gray-50"
                  }
                `}
              >
                {activeTab === tab && (
                  <div
                    layoutid="activeTab"
                    className="absolute inset-0 rounded-full -z-10"
                  />
                )}
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
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6"
          >
            {getDisplayCategories().map((category, index) => (
              <div
                key={index}
                className="relative bg-[#dedede] border border-gray-400/20 rounded-3xl overflow-hidden cursor-pointer group"
              >
                <div className="flex justify-center">
                  <div
                    className={`relative ${
                      index === 1 ? "w-36 sm:w-48" : "w-32 sm:w-40"
                    }`}
                    style={{
                      paddingBottom: "66.67%",
                      marginTop: index === 2 ? "-1rem" : "0",
                    }}
                  >
                    <Image
                      src={category.image}
                      alt={category.name}
                      fill
                      className="object-cover"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      priority={index < 4}
                    />
                  </div>
                  <div className="absolute bottom-3 sm:bottom-5 left-3 sm:left-4">
                    <span className="inline-flex items-center bg-white px-3 sm:px-4 py-2 sm:py-3 rounded-full text-xs sm:text-sm font-medium uppercase transition-transform group-hover:translate-x-1">
                      {category.name}
                      <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 ml-1.5 sm:ml-2 transition-transform group-hover:translate-x-1" />
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
      <div className="w-full h-px bg-gray-300/60 mt-8 sm:mt-16"></div>
    </section>
  );
};

export default Categories;
