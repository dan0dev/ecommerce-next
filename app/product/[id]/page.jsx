// product/[id]/page.jsx
"use client";

import { AnimatePresence } from "motion/react";
import Link from "next/link";
import { use, useEffect, useState } from "react";
import { COLLECTION_DATA } from "../../components/collection/collectionData";
import Toast from "../../components/collection/Toast";
import MiddleBanner from "../../components/MiddleBanner";
import PageTransition from "../../components/PageTransition";
import { useCartStore } from "../../store/cartStore";

export default function ProductPage({ params }) {
  const addToCart = useCartStore((state) => state.addToCart);

  // scroll to top
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const generateId = () => Math.random().toString(36).substr(2, 9);

  const [selectedColor, setSelectedColor] = useState(null);
  const [selectedSize, setSelectedSize] = useState(null);
  const [clicked, setClicked] = useState(false);
  const [toasts, setToasts] = useState([]);

  // Unwrapping params - React.use()
  const resolvedParams = use(params);
  const { id } = resolvedParams;

  // flat
  const allProducts = Object.values(COLLECTION_DATA).flat();

  // dynamic id
  const product = allProducts.find((item) => item.id === parseInt(id));

  // Product not found!
  if (!product) {
    return <div>Product not found!</div>;
  }

  const colorMap = {
    Orange: "#FF5733",
    Black: "#000000",
    Navy: "#000080",
    "Gray Heather": "#9BA4B5",
    Natural: "#F5DEB3",
    Olive: "#808000",
    "Light Gray": "#D3D3D3",
    "Dusty Pink": "#FFB6C1",
    White: "#FFFFFF",
    Gray: "#808080",
    Sage: "#9DC183",
    Khaki: "#C3B091",
    Yellow: "#FFFF00",
    Forest: "#228B22",
    "Forest Green": "#228B22",
    Red: "#FF0000",
    Brown: "#A52A2A",
    Emerald: "#50C878",
    Turquoise: "#40E0D0",
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

  const handleCheckout = () => {
    window.location.href = "/checkout";
  };

  const handleCartClick = () => {
    if (clicked) return;

    setClicked(true);
    addToCart();
    addToast(
      `${product.name} has been added to your cart.`,
      false,
      "Added to Cart"
    );

    setTimeout(() => {
      setClicked(false);
    }, 3000);
  };

  return (
    <PageTransition>
      <section className="max-w-screen-xl mx-auto px-4 py-8">
        {/* Breadcrumb - nav*/}
        <nav className="flex mb-4" aria-label="Breadcrumb">
          <ol className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
            <li className="inline-flex items-center">
              <Link
                href="/"
                className="inline-flex items-center text-sm text-gray-700 hover:text-blue-600  :hover:text-white"
              >
                <svg
                  className="w-3 h-3 me-2.5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z" />
                </svg>
                Home
              </Link>
            </li>
            <li>
              <div className="flex items-center">
                <svg
                  className="rtl:rotate-180 w-3 h-3 text-gray-400 mx-1"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 6 10"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 9 4-4-4-4"
                  />
                </svg>
                <Link
                  href="/"
                  className="ms-1 text-sm text-gray-700 hover:text-blue-600 md:ms-2"
                >
                  Products
                </Link>
              </div>
            </li>
            <li aria-current="page">
              <div className="flex items-center">
                <svg
                  className="rtl:rotate-180 w-3 h-3 text-gray-400 mx-1"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 6 10"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 9 4-4-4-4"
                  />
                </svg>
                <span className="ms-1 text-sm text-gray-500 md:ms-2">
                  {product.name}
                </span>
              </div>
            </li>
          </ol>
        </nav>
        <div>
          <div className="grid grid-cols-6 grid-rows-2 gap-4">
            <div className="col-span-3 row-span-3">
              <div className="relative h-[496px] bg-gray-300/30 rounded-3xl">
                <img
                  src={product.image || "/collection/defaultImage.png"}
                  alt={product.name}
                  className="object-contain rounded-lg w-full h-full"
                />
              </div>
            </div>
            <div className="col-span-2 row-span-1">
              <div className="relative h-60 bg-gray-300/30 rounded-3xl">
                <img
                  src={product.image || "/collection/defaultImage.png"}
                  alt={product.name}
                  className="object-contain rounded-lg w-full h-full"
                />
              </div>
            </div>
            <div className="col-span-1 row-span-1">
              <div className="relative h-60 bg-gray-300/30 rounded-3xl">
                <img
                  src={product.image || "/collection/defaultImage.png"}
                  alt={product.name}
                  className="object-contain rounded-lg w-full h-full"
                />
              </div>
            </div>
            <div className="col-span-3 row-span-2">
              <div className="relative h-60 bg-gray-300/30 rounded-3xl">
                <img
                  src={product.image || "/collection/defaultImage.png"}
                  alt={product.name}
                  className="object-contain rounded-lg w-full h-full"
                />
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4 mt-4">
            <div className="space-y-4">
              <h1 className="uppercase text-3xl font-medium">{product.name}</h1>
              <div className="flex items-center">
                <span className="text-yellow-500 flex items-center">
                  {[...Array(5)].map((_, i) => {
                    const starValue = i + 1;
                    const ratingValue = product.rating;

                    let fillPercentage = 0;
                    if (ratingValue >= starValue) {
                      fillPercentage = 100;
                    } else if (ratingValue > starValue - 1) {
                      // Handle partial stars
                      const decimalPart = ratingValue % 1;
                      if (decimalPart >= 0.3 && decimalPart < 0.7) {
                        fillPercentage = 50;
                      } else if (decimalPart >= 0.7) {
                        fillPercentage = 100;
                      } else if (decimalPart < 0.3) {
                        fillPercentage = 0;
                      }
                    }

                    return (
                      <svg
                        key={i}
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 relative"
                        viewBox="0 0 24 24"
                      >
                        {/* Background (unfilled) star */}
                        <path
                          d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.562.562 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.5"
                        />
                        {/* Filled star */}
                        <defs>
                          <clipPath id={`starClip-${i}`}>
                            <rect
                              x="0"
                              y="0"
                              width={`${fillPercentage}%`}
                              height="100%"
                            />
                          </clipPath>
                        </defs>
                        <path
                          d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.562.562 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                          fill="currentColor"
                          clipPath={`url(#starClip-${i})`}
                        />
                      </svg>
                    );
                  })}
                </span>
                <span className="ml-2 text-gray-600 text-sm">
                  ({product.rating} from 328 Reviews)
                </span>
              </div>
              <div className="flex gap-12 items-start">
                <div className="flex flex-col">
                  <h3 className="text-lg font-medium mb-2">Select Color</h3>
                  <div className="flex space-x-3 items-center">
                    {product.colors &&
                      product.colors.map((color) => (
                        <button
                          key={color}
                          onClick={() => setSelectedColor(color)}
                          className={`
                        w-8 h-8 rounded-full cursor-pointer
                        transition-all duration-300 ease-in-out
                        ${
                          selectedColor === color
                            ? "border-4 border-blue-500"
                            : "border-2 border-gray-300"
                        }
                      `}
                          style={{
                            backgroundColor: colorMap[color] || "#CCCCCC",
                            boxShadow:
                              selectedColor === color
                                ? "0 0 0 2px rgba(59, 130, 246, 0.5)"
                                : "none",
                          }}
                          aria-label={`Select ${color} color`}
                        ></button>
                      ))}
                  </div>
                </div>

                <div className="flex flex-col">
                  <h3 className="text-lg font-medium mb-2">Select Size</h3>
                  <div className="flex space-x-3">
                    {product.sizes &&
                      product.sizes.map((size) => (
                        <button
                          key={size}
                          type="button"
                          onClick={() => setSelectedSize(size)}
                          className={`
                          rounded-full text-sm font-medium flex items-center justify-center
                          transition-all duration-300 ease-in-out
                          ${
                            size === "One Size"
                              ? "w-20 h-8"
                              : size === "Large"
                              ? "w-16 h-12"
                              : "w-12 h-8"
                          }
                          ${
                            selectedSize === size
                              ? "bg-black text-white"
                              : "bg-white/80 text-gray-700 border border-gray-400/50 hover:bg-gray-100"
                          }
                        `}
                        >
                          {size}
                        </button>
                      ))}
                  </div>
                </div>
              </div>
            </div>

            {/* --------------------------------------------- */}

            <div className="space-y-2 flex flex-col justify-between h-full">
              <p className="text-sm font-medium">Total Price</p>
              <h1 className="text-4xl font-bold">${product.price}</h1>

              <div className="flex justify-between mt-4">
                <button
                  className="flex-1 uppercase text-base border border-black py-3 rounded-full mr-2 hover:bg-black/10 transition-colors duration-300"
                  onClick={handleCartClick}
                  disabled={clicked}
                >
                  {clicked ? "Added!" : "Add to Cart"}
                </button>
                <button className="flex-1 uppercase text-base border bg-black text-white py-2 rounded-full ml-2 hover:bg-black/70 transition-colors duration-300">
                  Buy It Now
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="fixed bottom-4 right-4 z-50 flex flex-col-reverse gap-3">
          <AnimatePresence>
            {toasts.map((toast) => (
              <Toast
                key={toast.id}
                message={toast.message}
                title={toast.title}
                isVisible={true}
                onClose={() => removeToast(toast.id)}
                isError={toast.isError}
                onCheckout={!toast.isError ? handleCheckout : undefined}
              />
            ))}
          </AnimatePresence>
        </div>
        <div className="w-full h-px bg-gray-300/60 mt-8 sm:mt-16" />
        <MiddleBanner />
      </section>
    </PageTransition>
  );
}
