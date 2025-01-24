import defaultImage from "@/public/collection/defaultImage.png";
import { ArrowRight, Check, Heart, ShoppingCart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useCartStore } from "../../store/cartStore";

const ProductCard = ({
  product,
  index,
  isFavorite,
  onFavoriteToggle,
  onAddToCart,
}) => {
  const [clicked, setClicked] = useState(false);

  const gradients = [
    "bg-gradient-to-br from-[#9d9d9d] via-[#c7c7c7] to-[#e8e8e8]",
    "bg-gradient-to-br from-gray-400 via-gray-200 to-gray-400",
    "bg-gradient-to-br from-[#828385] via-[#abadae] to-[#e1e5e6]",
    "bg-gradient-to-br from-gray-100 via-gray-300 to-gray-600]",
  ];

  const addToCart = useCartStore((state) => state.addToCart);

  const handleCartClick = () => {
    if (clicked) return;

    setClicked(true);
    onAddToCart(product);
    addToCart();
    setTimeout(() => setClicked(false), 3000);
  };

  return (
    <div className="flex flex-col space-y-2 sm:space-y-3 group w-full">
      <div
        className={`relative border border-gray-300/80 rounded-xl sm:rounded-2xl cursor-pointer aspect-[4/5] transform transition-transform duration-200 group-hover:scale-[1.01] shadow-sm group-hover:shadow-md ${
          gradients[index % gradients.length]
        }`}
      >
        <button
          onClick={(e) => {
            e.stopPropagation();
            onFavoriteToggle(index);
          }}
          className={`absolute top-1.5 sm:top-2 right-10 sm:right-12 z-10 p-1.5 sm:p-2 rounded-full backdrop-blur-md transition-colors ${
            isFavorite ? "bg-red-500/90" : "bg-gray-500/60"
          }`}
        >
          <Heart
            className={`w-4 h-4 sm:w-5 sm:h-5 transition-colors ${
              isFavorite ? "text-white" : "text-white/80 hover:text-red-400"
            }`}
          />
        </button>
        <button
          onClick={handleCartClick}
          disabled={clicked}
          className="absolute top-1.5 sm:top-2 right-1.5 sm:right-2 z-10 p-1.5 sm:p-2 rounded-full backdrop-blur-md transition-colors bg-gray-500/60"
        >
          {clicked ? (
            <Check className="w-4 h-4 sm:w-5 sm:h-5 text-white transition-all" />
          ) : (
            <ShoppingCart className="w-4 h-4 sm:w-5 sm:h-5 text-white hover:text-blue-400 transition-all" />
          )}
        </button>
        <Link href={`/product/${product.id}`} scroll={true}>
          <div className="relative w-full h-full">
            <div className="relative w-full h-full p-2 sm:p-4">
              <Image
                src={product.image || defaultImage}
                alt={product.name}
                fill
                className="object-cover object-center rounded-lg sm:rounded-xl"
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                priority={index < 4}
              />
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-2 sm:p-3 bg-black/40 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity rounded-bl-xl rounded-br-xl sm:rounded-bl-2xl sm:rounded-br-2xl">
              <div className="text-white text-xs sm:text-sm space-y-0.5 sm:space-y-1">
                <p>{product.materials.join(" • ")}</p>
                <p>Colors: {product.colors.join(", ")}</p>
                <p>Sizes: {product.sizes.join(", ")}</p>
              </div>
            </div>
          </div>
        </Link>
      </div>
      <div className="space-y-0.5 sm:space-y-1">
        <div className="flex items-start justify-between">
          <h3 className="font-medium text-base sm:text-lg">{product.name}</h3>
          <span className="flex items-center gap-0.5 text-xs sm:text-sm text-end lg:text-start text-blue-600 cursor-pointer group/details">
            <Link href={`/product/${product.id}`} scroll={true}>
              <span className="hover:underline">
                View <br className="lg:hidden" />
                details
              </span>
            </Link>
            <ArrowRight className="hidden sm:block w-3 h-3 transition-transform group-hover/details:translate-x-1" />
          </span>
        </div>
        <p className="text-gray-600 text-sm sm:text-base">${product.price}</p>
        <div className="space-y-0.5 text-xs sm:text-sm text-gray-500">
          <p>{product.materials[0]}</p>
          <p>{product.colors.length} colors</p>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
