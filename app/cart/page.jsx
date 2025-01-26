"use client";

import { ShoppingBag, ShoppingCart, Trash2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { COLLECTION_DATA } from "../components/collection/collectionData";
import PageTransition from "../components/PageTransition";
import { useCartStore } from "../store/cartStore";

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

const CartPage = () => {
  const {
    items,
    removeFromCart,
    updateQuantity,
    clearCart,
    updateSize,
    updateColor,
  } = useCartStore();
  const [mounted, setMounted] = useState(false);

  // Get full product details
  const getProduct = (productId) => {
    return Object.values(COLLECTION_DATA)
      .flat()
      .find((p) => p.id === productId);
  };

  // Handle hydration
  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    // Set "One Size" for items that have only that option
    items.forEach((item) => {
      if (!item.size) {
        const product = getProduct(item.productId);
        if (product?.sizes.length === 1 && product.sizes[0] === "One Size") {
          updateSize(item.id, "One Size");
        }
      }
    });
  }, [mounted]); // Only run once after hydration

  const calculateTotal = () => {
    return items.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  if (!mounted) {
    return (
      <PageTransition>
        <div className="max-w-screen-xl mx-auto px-4 py-8 min-h-[60vh] flex flex-col items-center justify-center">
          <div className="animate-pulse space-y-4">
            <div className="w-16 h-16 bg-gray-200 rounded-full"></div>
            <div className="h-6 bg-gray-200 rounded w-48"></div>
            <div className="h-4 bg-gray-200 rounded w-64"></div>
            <div className="h-10 bg-gray-200 rounded w-48"></div>
          </div>
        </div>
      </PageTransition>
    );
  }

  if (items.length === 0) {
    return (
      <PageTransition>
        <div className="max-w-screen-xl mx-auto px-4 py-8 min-h-[60vh] flex flex-col items-center justify-center">
          <ShoppingBag className="w-16 h-16 text-gray-400 mb-4" />
          <h2 className="text-2xl font-medium text-gray-900 mb-2">
            Your cart is empty
          </h2>
          <p className="text-gray-600 mb-4">
            Looks like you haven't added any items to your cart yet.
          </p>
          <Link
            href="/"
            className="bg-black text-white px-6 py-3 rounded-full hover:bg-black/80 transition-colors"
          >
            Continue Shopping
          </Link>
        </div>
      </PageTransition>
    );
  }

  return (
    <PageTransition>
      <div className="max-w-screen-xl min-h-[60vh] mx-auto px-4 py-8">
        <div className="flex items-center justify-between">
          <div className="flex space-x-4 items-center mb-8">
            <ShoppingCart className="w-6 h-6" />
            <h1 className="text-2xl font-medium">Shopping Cart</h1>
          </div>
          <button
            className="text-base rounded-full ml-4 hover:text-red-500 transition-all duration-100 font-medium"
            onClick={clearCart}
          >
            Clear Cart
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="space-y-4">
              {items.map((item) => {
                const product = getProduct(item.productId);
                return (
                  <div
                    key={item.id}
                    className="flex gap-4 p-4 bg-white/50 rounded-3xl border border-gray-200/60"
                  >
                    <div className="w-24 h-24 relative flex-shrink-0">
                      <Image
                        src={item.image || "/collection/defaultImage.png"}
                        alt={item.name}
                        fill
                        className="object-contain rounded-lg"
                      />
                    </div>

                    <div className="flex-1">
                      <div className="flex justify-between items-center">
                        <h3 className="font-medium flex items-center">
                          <Link
                            href={`/product/${item.productId}`}
                            target="_blank"
                            className="hover:underline"
                          >
                            {item.name}
                          </Link>
                          {item.color && (
                            <span className="text-sm text-gray-500 ml-1 flex items-center gap-1">
                              ({item.color}
                              <span
                                className="w-3 h-3 rounded-full inline-block"
                                style={{
                                  backgroundColor:
                                    colorMap[item.color] || "#ccc",
                                }}
                              />
                              )
                            </span>
                          )}
                        </h3>
                        <button
                          onClick={() => removeFromCart(item.id)}
                          className="text-gray-400 hover:text-red-500 transition-colors"
                        >
                          <Trash2 className="w-5 h-5" />
                        </button>
                      </div>

                      <p className="text-gray-600 mt-1">${item.price}</p>

                      <div className="mt-4 flex gap-4 flex-wrap">
                        {/* Size Selector */}
                        <select
                          value={item.size || ""}
                          onChange={(e) => updateSize(item.id, e.target.value)}
                          className={`px-3 py-1 border border-gray-300 rounded-lg text-sm ${
                            product?.sizes.length === 1 &&
                            product.sizes[0] === "One Size"
                              ? "bg-gray-100 cursor-not-allowed"
                              : ""
                          }`}
                          disabled={
                            product?.sizes.length === 1 &&
                            product.sizes[0] === "One Size"
                          }
                        >
                          <option value="">Select Size</option>
                          {product?.sizes.map((size) => (
                            <option
                              key={size}
                              value={size}
                              defaultValue={
                                size === "One Size" ||
                                (product?.sizes.length === 1 &&
                                  product.sizes[0] === "One Size")
                              }
                            >
                              {size}
                            </option>
                          ))}
                        </select>

                        {/* Quantity Selector */}
                        <div className="flex items-center gap-2">
                          <span className="text-sm text-gray-500">Qty:</span>
                          <select
                            value={item.quantity}
                            onChange={(e) =>
                              updateQuantity(item.id, Number(e.target.value))
                            }
                            className="px-3 py-1 border border-gray-300 rounded-lg text-sm"
                          >
                            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
                              <option key={num} value={num}>
                                {num}
                              </option>
                            ))}
                          </select>
                        </div>

                        {/* Color Selector */}
                        <div className="flex items-center gap-2">
                          <select
                            value={item.color || ""}
                            onChange={(e) =>
                              updateColor(item.id, e.target.value)
                            }
                            className="px-3 py-1 border border-gray-300 rounded-lg text-sm"
                          >
                            <option value="">Select Color</option>
                            {product?.colors.map((color) => (
                              <option key={color} value={color}>
                                {color}
                              </option>
                            ))}
                          </select>
                          {item.color && (
                            <span
                              className="w-4 h-4 rounded-full inline-block border border-gray-200/60"
                              style={{
                                backgroundColor: colorMap[item.color] || "#ccc",
                              }}
                            />
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="lg:col-span-1">
            <div className="bg-white/50 p-6 rounded-3xl border border-gray-200/60">
              <h2 className="text-lg font-medium mb-4">Order Summary</h2>

              <div className="space-y-2 mb-4">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span>${calculateTotal().toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Shipping</span>
                  <span>Free</span>
                </div>
              </div>

              <div className="border-t border-gray-200/60 pt-4">
                <div className="flex justify-between font-medium">
                  <span>Total</span>
                  <span>${calculateTotal().toFixed(2)}</span>
                </div>
              </div>

              <button className="w-full bg-black text-white py-3 rounded-full mt-6 hover:bg-black/80 transition-colors">
                Proceed to Checkout
              </button>
            </div>
          </div>
        </div>
      </div>
    </PageTransition>
  );
};

export default CartPage;
