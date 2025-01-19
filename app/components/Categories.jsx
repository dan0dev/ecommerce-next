"use client";

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
    <section className="w-full py-6">
      <div className="container mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl tracking-wide font-medium">
            Browse by categories
          </h1>
          <div className="flex space-x-2">
            {Object.keys(CATEGORY_DATA).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`
                  px-8 py-3 rounded-full uppercase text-md transition-colors
                  ${
                    activeTab === tab
                      ? "bg-black text-white"
                      : "bg-none text-black border border-gray-200/80 hover:bg-gray-100/80"
                  }
                `}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>
        {/* Product cards */}
        <div className="grid grid-cols-4 gap-4">
          {getDisplayCategories().map((category, index) => (
            <div
              key={index}
              className="relative bg-[#dedede] border border-gray-400/20 rounded-3xl overflow-hidden cursor-pointer"
            >
              <div className="flex justify-center">
                <div
                  className={`relative ${index === 1 ? "w-48" : "w-40"}`}
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
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                    priority={index < 4}
                  />
                </div>
                <div className="absolute bottom-5 left-4">
                  <span className="bg-white px-4 py-3 rounded-full text-sm font-medium uppercase">
                    {category.name}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="w-full h-px bg-gray-300/60 mt-16"></div>
    </section>
  );
};

export default Categories;
