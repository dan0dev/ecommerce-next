"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

const TOPBAR_OPTIONS = [
  "NEW ARRIVAL",
  "MOST PICK",
  "SALE",
  "WOMEN",
  "MEN",
  "SNEAKERS",
  "STORE LOCATION",
  "CONTACT US",
];

const Topbar = () => {
  const [activeTab, setActiveTab] = useState("SALE");
  const [showLeftScroll, setShowLeftScroll] = useState(false);
  const [showRightScroll, setShowRightScroll] = useState(true);

  const handleScroll = (e) => {
    const container = e.target;
    setShowLeftScroll(container.scrollLeft > 0);
    setShowRightScroll(
      container.scrollLeft < container.scrollWidth - container.clientWidth
    );
  };

  const scroll = (direction) => {
    const container = document.getElementById("topbar-container");
    if (container) {
      const scrollAmount = direction === "left" ? -200 : 200;
      container.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <section className="w-full pt-4 relative">
      <div className="max-w-screen-xl mx-auto px-4">
        {/* Scrolling */}
        {showLeftScroll && (
          <button
            onClick={() => scroll("left")}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 lg:hidden
              w-8 h-8 flex items-center justify-center
              bg-white/80 rounded-full shadow-md"
          >
            <ChevronLeft className="w-5 h-5 text-gray-600" />
          </button>
        )}
        {showRightScroll && (
          <button
            onClick={() => scroll("right")}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 lg:hidden
              w-8 h-8 flex items-center justify-center
              bg-white/80 rounded-full shadow-md"
          >
            <ChevronRight className="w-5 h-5 text-gray-600" />
          </button>
        )}

        {/* Nav container */}
        <nav
          id="topbar-container"
          onScroll={handleScroll}
          className="flex items-center gap-6 lg:gap-8 overflow-x-auto scrollbar-hide
            relative scroll-smooth justify-between"
        >
          {TOPBAR_OPTIONS.map((option) => (
            <button
              key={option}
              onClick={() => setActiveTab(option)}
              className={`
                flex-shrink-0
                whitespace-nowrap
                text-sm lg:text-lg
                font-medium
                transition-colors
                relative
                py-1
                ${
                  activeTab === option
                    ? "text-red-600 hover:text-red-600"
                    : "text-gray-600"
                }
                hover:text-black
              `}
            >
              {option}
              {/* Red active indicator */}
              {activeTab === option && (
                <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-red-600 rounded-full" />
              )}
            </button>
          ))}
        </nav>
      </div>
    </section>
  );
};

export default Topbar;
