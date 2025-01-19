import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Background1Pic from "../assets/background1-pic.png";
import Background2Pic from "../assets/background2-pic.jpg";
import Background3Pic from "../assets/background3-pic.png";
import Background4Pic from "../assets/background4-pic.png";

const BentoHomeSection = () => {
  return (
    <section className="w-full py-4 px-4 sm:px-6 lg:px-0">
      <div className="max-w-screen-xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Left Card */}
          <div className="md:col-span-2 h-[500px] sm:h-[420px] rounded-3xl relative overflow-hidden bg-gradient-to-r from-[#92a38b] to-[#76a9c6] group transition-all duration-300 hover:shadow-lg">
            {/* Main content container */}
            <div className="absolute inset-0 p-6 sm:p-8 flex flex-col">
              {/* Top content */}
              <div className="flex justify-between items-start">
                <h1 className="text-3xl sm:text-4xl md:text-6xl text-white font-bold tracking-tight">
                  Autumn
                  <br />
                  Arrival of
                  <br />
                  Outfit
                </h1>
                <span className="text-3xl sm:text-4xl md:text-5xl text-white fancy-font text-end opacity-90">
                  50% <br />
                  <span className="font-sans text-2xl sm:text-3xl md:text-4xl">
                    OFF
                  </span>
                </span>
              </div>

              {/* Description */}
              <div className="mt-4 sm:mt-8 max-w-md">
                <p className="text-white/80 mb-4 sm:mb-6 text-sm sm:text-md">
                  Discover quality fashion that reflects your{" "}
                  <br className="hidden sm:block" />
                  style and makes everyday enjoyable.
                </p>

                {/* CTA Button */}
                <button className="bg-black text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-full flex items-center gap-2 sm:gap-3 hover:bg-white hover:text-black transition-all duration-300 group text-sm sm:text-base">
                  <span className="font-medium">EXPLORE PRODUCT</span>
                  <span className="text-lg transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </button>
              </div>
            </div>

            {/* Product Image */}
            <div className="absolute right-0 sm:right-24 bottom-0 w-2/3 sm:w-1/2 h-3/4 sm:h-full transition-transform duration-500 group-hover:scale-105">
              <div className="relative h-full w-full">
                <Image
                  src={Background1Pic}
                  alt="White hoodie"
                  fill
                  sizes="(max-width: 640px) 66vw, (max-width: 768px) 50vw, 33vw"
                  quality={100}
                  className="object-contain sm:object-cover object-bottom sm:object-center"
                  priority
                />
              </div>
            </div>
          </div>

          {/* Right Card */}
          <div className="relative h-[300px] sm:h-[420px] rounded-3xl overflow-hidden group hover:shadow-lg transition-all duration-300">
            <div className="absolute inset-0">
              <Image
                src={Background2Pic}
                alt="Girl in a summer dress"
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                priority
                quality={80}
              />
            </div>

            {/* Fashion Style */}
            <div className="absolute top-6 sm:top-8 left-6 sm:left-8">
              <h2 className="text-2xl sm:text-3xl md:text-4xl text-white font-medium tracking-tight transform transition-transform duration-300 group-hover:translate-x-1">
                Fashion <br /> Style
              </h2>
            </div>

            {/* Arrow button */}
            <div className="absolute bottom-4 sm:bottom-6 right-4 sm:right-6">
              <button className="relative p-3 sm:p-4 group/btn">
                <div className="absolute inset-0 bg-white/20 backdrop-blur-md rounded-full border border-white/40 transition-colors duration-300 group-hover/btn:bg-white/30" />
                <ArrowUpRight
                  size={24}
                  className="relative text-white transition-transform duration-300 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1"
                />
              </button>
            </div>
          </div>

          {/* Bottom Row */}
          <div className="md:col-span-3">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Trendy Sunglasses */}
              <div className="relative h-[200px] sm:h-52 rounded-3xl group hover:shadow-lg transition-all duration-300 bg-gradient-to-r from-[#cdd0c9] to-[#929989]">
                <div className="absolute left-0 top-6 sm:top-[83px] inset-0 p-6 sm:p-8">
                  <h2 className="text-2xl sm:text-3xl text-gray-900 tracking-tight">
                    Trendy <br /> Sunglasses
                  </h2>
                </div>
                {/* Product Image */}
                <div className="absolute right-4 sm:right-14 bottom-0 w-1/2 sm:w-2/3 h-full transition-transform duration-500 group-hover:scale-105 group-hover:translate-x-2">
                  <div className="relative h-full w-full p-2">
                    <Image
                      src={Background3Pic}
                      alt="Glasses"
                      fill
                      sizes="(max-width: 640px) 50vw, 33vw"
                      className="object-contain sm:object-cover"
                    />
                  </div>
                </div>
                {/* Arrow button */}
                <div className="absolute bottom-4 sm:bottom-6 right-4 sm:right-6">
                  <button className="relative p-3 sm:p-4 group/btn">
                    <div className="absolute inset-0 bg-gray-500/20 backdrop-blur-md rounded-full border border-white/40 transition-colors duration-300 group-hover/btn:bg-gray-500/20" />
                    <ArrowUpRight
                      size={24}
                      className="relative text-white transition-transform duration-300 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1"
                    />
                  </button>
                </div>
              </div>

              {/* Popular Shoes */}
              <div className="relative h-[200px] sm:h-52 rounded-3xl overflow-hidden group hover:shadow-lg transition-all duration-300 bg-gradient-to-r from-[#e0c6b5] to-[#bda596]">
                <div className="absolute left-0 top-6 sm:top-[83px] inset-0 p-6 sm:p-8">
                  <h2 className="text-2xl sm:text-3xl text-gray-900 tracking-tight">
                    Popular <br /> Shoes
                  </h2>
                </div>
                <div className="absolute right-0 sm:right-2 bottom-0 sm:bottom-5 w-1/2 sm:w-4/5 h-full transition-transform duration-500 group-hover:scale-105 group-hover:translate-x-2">
                  <div className="relative h-full w-full p-2">
                    <Image
                      src={Background4Pic}
                      alt="Shoes"
                      fill
                      sizes="(max-width: 640px) 50vw, 33vw"
                      className="object-contain sm:object-cover"
                    />
                  </div>
                </div>
                {/* Arrow button */}
                <div className="absolute bottom-4 sm:bottom-6 right-4 sm:right-6">
                  <button className="relative p-3 sm:p-4 group/btn">
                    <div className="absolute inset-0 bg-gray-500/20 backdrop-blur-md rounded-full border border-white/40 transition-colors duration-300 group-hover/btn:bg-gray-500/20" />
                    <ArrowUpRight
                      size={24}
                      className="relative text-white transition-transform duration-300 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1"
                    />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BentoHomeSection;
