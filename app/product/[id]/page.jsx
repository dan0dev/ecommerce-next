"use client";

import { AnimatePresence } from "motion/react";
import { useRouter } from "next/navigation";
import { use, useEffect, useState } from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Breadcrumb from "../../components/Breadcrumb"; // Import the Breadcrumb component
import { COLLECTION_DATA } from "../../components/collection/collectionData";
import Toast from "../../components/collection/Toast";
import MiddleBanner from "../../components/MiddleBanner";
import PageTransition from "../../components/PageTransition";
import { useCartStore } from "../../store/cartStore";

export default function ProductPage({ params }) {
  const router = useRouter();
  const addToCart = useCartStore((state) => state.addToCart);

  // Scrolling to the top of the page
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const generateId = () => Math.random().toString(36).substr(2, 9);

  const [selectedColor, setSelectedColor] = useState(null);
  const [selectedSize, setSelectedSize] = useState(null);
  const [clicked, setClicked] = useState(false);
  const [toasts, setToasts] = useState([]);
  const [isMobile, setIsMobile] = useState(false);

  // Check if the device is mobile
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // Adjust the breakpoint as needed
    };

    handleResize(); // Check on initial render
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Unwrapping params - React.use()
  const resolvedParams = use(params);
  const { id } = resolvedParams;

  // Flat
  const allProducts = Object.values(COLLECTION_DATA).flat();

  // Dynamic id
  const product = allProducts.find((item) => item.id === parseInt(id));

  // Product not found!
  if (!product) {
    return <div>Product not found!</div>;
  }

  const [defaultPrice, setDefaultPrice] = useState(product.price);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    if (product.sizes && product.sizes.includes("One Size")) {
      setSelectedSize("One Size");
    }
  }, [product.sizes]);

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
    window.location.href = "/cart";
  };

  const handleCartClick = () => {
    if (clicked) return;

    if (!selectedColor || !selectedSize) {
      addToast(
        "Please select a color and size before adding to cart.",
        true,
        "Error"
      );
      return;
    }

    // Check if the product with the same ID, color, and size already exists in the cart
    const isProductInCart = useCartStore
      .getState()
      .items.some(
        (item) =>
          item.productId === product.id &&
          item.color === selectedColor &&
          item.size === selectedSize
      );

    if (isProductInCart) {
      addToast(
        `${product.name} (${selectedColor}, ${selectedSize}) is already in your cart.`,
        true,
        "Product Exists"
      );
      return;
    }

    setClicked(true);
    addToCart(product, {
      size: selectedSize,
      color: selectedColor,
      quantity: quantity,
    });
    addToast(
      `${product.name} (${selectedColor}, ${selectedSize}) has been added to your cart.`,
      false,
      "Added to Cart"
    );

    setTimeout(() => {
      setClicked(false);
    }, 3000);
  };

  const handleBuyNow = () => {
    if (!selectedColor || !selectedSize) {
      addToast("Please select a color and size before buying.", true, "Error");
      return;
    }

    addToCart(product, {
      size: selectedSize,
      color: selectedColor,
      quantity: quantity,
    });
    router.push("/cart");
  };

  return (
    <PageTransition>
      <section className="max-w-screen-xl mx-auto px-4 py-8">
        {/* Breadcrumb - nav*/}
        <Breadcrumb productName={product.name} />
        <div>
          {/* Swiper Carousel for Mobile */}
          {isMobile ? (
            <Swiper
              modules={[Navigation, Pagination]}
              spaceBetween={10}
              slidesPerView={1}
              navigation
              pagination={{ clickable: true }}
            >
              {[product.image, product.image, product.image].map(
                (img, index) => (
                  <SwiperSlide key={index}>
                    <div className="relative h-64 bg-gray-300/30 rounded-3xl">
                      <img
                        src={img || "/collection/defaultImage.png"}
                        alt={product.name}
                        className="object-contain rounded-lg w-full h-full"
                      />
                    </div>
                  </SwiperSlide>
                )
              )}
            </Swiper>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-6 md:grid-rows-2 gap-4">
              <div className="md:col-span-3 md:row-span-3">
                <div className="relative h-64 md:h-[496px] bg-gray-300/30 rounded-3xl">
                  <img
                    src={product.image || "/collection/defaultImage.png"}
                    alt={product.name}
                    className="object-contain rounded-lg w-full h-full"
                  />
                </div>
              </div>
              <div className="md:col-span-2 md:row-span-1">
                <div className="relative h-60 bg-gray-300/30 rounded-3xl">
                  <img
                    src={product.image || "/collection/defaultImage.png"}
                    alt={product.name}
                    className="object-contain rounded-lg w-full h-full"
                  />
                </div>
              </div>
              <div className="md:col-span-1 md:row-span-1">
                <div className="relative h-60 bg-gray-300/30 rounded-3xl">
                  <img
                    src={product.image || "/collection/defaultImage.png"}
                    alt={product.name}
                    className="object-contain rounded-lg w-full h-full"
                  />
                </div>
              </div>
              <div className="md:col-span-3 md:row-span-2">
                <div className="relative h-60 bg-gray-300/30 rounded-3xl">
                  <img
                    src={product.image || "/collection/defaultImage.png"}
                    alt={product.name}
                    className="object-contain rounded-lg w-full h-full"
                  />
                </div>
              </div>
            </div>
          )}

          {/* Product Details */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
            <div className="space-y-4">
              <h1 className="uppercase text-2xl md:text-3xl font-medium">
                {product.name}
              </h1>
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
                          fill="orange" // Change this to red
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
              <div className="flex flex-col md:flex-row gap-12 items-start">
                <div className="flex flex-col">
                  <h3 className="text-lg font-medium mb-2">
                    Select Color <span className="text-red-600">*</span>
                  </h3>
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
                  <h3 className="text-lg font-medium mb-2">
                    Select Size <span className="text-red-600">*</span>
                  </h3>
                  <div className="flex space-x-3">
                    {product.sizes &&
                      product.sizes.map((size) => (
                        <button
                          key={size}
                          type="button"
                          onClick={() => setSelectedSize(size)}
                          disabled={selectedSize === "One Size"}
                          className={`
                          rounded-full text-sm font-medium flex items-center justify-center
                          transition-all duration-300 ease-in-out
                          ${
                            size === "One Size"
                              ? "w-20 h-8 cursor-not-allowed"
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

            {/* Price and Quantity Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 md:grid-rows-2 gap-4 h-full">
              {/* Total Price */}
              <div className="flex flex-col space-y-2">
                <p className="text-sm font-medium">Total Price</p>
                <h1 className="text-3xl md:text-4xl font-bold">
                  ${defaultPrice}
                </h1>
              </div>

              {/* Quantity */}
              <div className="flex flex-col items-end space-y-2">
                <p className="text-sm font-medium">Quantity</p>
                <div className="flex items-center gap-4">
                  <button
                    className="bg-black text-white rounded-full w-10 h-10 flex items-center justify-center disabled:bg-black/90 disabled:cursor-not-allowed"
                    onClick={() => {
                      if (quantity > 1) {
                        setQuantity(quantity - 1);
                        setDefaultPrice(
                          (prevPrice) => prevPrice - product.price
                        );
                      }
                    }}
                    disabled={quantity <= 1} // Disabled if quantity <= 1
                  >
                    –
                  </button>
                  <h1 className="text-3xl md:text-4xl font-bold">{quantity}</h1>
                  <button
                    className="bg-black text-white rounded-full w-10 h-10 flex items-center justify-center"
                    onClick={() => {
                      setQuantity(quantity + 1);
                      setDefaultPrice((prevPrice) => prevPrice + product.price);
                    }}
                    disabled={quantity === 10}
                  >
                    +
                  </button>
                </div>
              </div>

              {/* Add to Cart Btn */}
              <button
                className="uppercase text-base border border-black py-3 rounded-full hover:bg-black/10 transition-colors duration-300"
                onClick={handleCartClick}
                disabled={clicked || !selectedColor || !selectedSize}
              >
                {clicked ? "Added!" : "Add to Cart"}
              </button>

              {/* Buy It Now Btn */}
              <button
                onClick={handleBuyNow}
                className="uppercase text-base border bg-black text-white py-3 rounded-full hover:bg-black/70 transition-colors duration-300"
                disabled={!selectedColor || !selectedSize}
              >
                Buy It Now
              </button>
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
