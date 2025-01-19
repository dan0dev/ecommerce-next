import defaultImage from "@/public/collection/defaultImage.png";
import { ArrowRight, Check, Heart, ShoppingCart } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

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

  const handleCartClick = () => {
    setClicked(true);
    onAddToCart();

    setTimeout(() => {
      setClicked(false);
    }, 3000);
  };

  return (
    <div className="flex flex-col space-y-4 group">
      <div
        className={`relative border border-gray-300/80 rounded-3xl cursor-pointer aspect-[4/5] transform transition-transform duration-200 group-hover:scale-[1.01] shadow-sm group-hover:shadow-md ${
          gradients[index % gradients.length]
        }`}
      >
        <button
          onClick={(e) => {
            e.stopPropagation();
            onFavoriteToggle(index);
          }}
          className={`absolute top-2 right-14 z-10 p-2 rounded-full backdrop-blur-md transition-colors ${
            isFavorite ? "bg-red-500/90" : "bg-gray-500/60"
          }`}
        >
          <Heart
            className={`w-5 h-5 transition-colors ${
              isFavorite ? "text-white" : "text-white/80 hover:text-red-400"
            }`}
          />
        </button>
        <button
          onClick={handleCartClick}
          className="absolute top-2 right-2 z-10 p-2 rounded-full backdrop-blur-md transition-colors bg-gray-500/60"
        >
          {clicked ? (
            <Check className="w-5 h-5 text-white transition-all" />
          ) : (
            <ShoppingCart className="w-5 h-5 text-white hover:text-blue-400 transition-all" />
          )}
        </button>
        <div className="relative w-full h-full">
          <div className="relative w-full h-full p-4">
            <Image
              src={product.image ? product.image : defaultImage}
              alt={product.name}
              fill
              className="object-cover object-center"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
              priority={index < 4}
            />
          </div>
          <div className="absolute bottom-0 left-0 right-0 p-4 bg-black/40 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity rounded-bl-3xl rounded-br-3xl">
            <div className="text-white text-sm space-y-1">
              <p>{product.materials.join(" • ")}</p>
              <p>Colors: {product.colors.join(", ")}</p>
              <p>Sizes: {product.sizes.join(", ")}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="space-y-1">
        <div className="flex items-start justify-between">
          <h3 className="font-medium text-lg">{product.name}</h3>
          <span className="flex items-center gap-1 text-sm text-blue-600 cursor-pointer group/details">
            View details
            <ArrowRight className="w-4 h-4 transition-transform group-hover/details:translate-x-1" />
          </span>
        </div>
        <p className="text-gray-600">${product.price}</p>
        <div className="space-y-1 text-sm text-gray-500">
          <p>{product.materials[0]}</p>
          <p>{product.colors.length} colors</p>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
