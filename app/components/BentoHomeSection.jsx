import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Background1Pic from "../assets/background1-pic.webp";
import Background2Pic from "../assets/background2-pic.jpg";
import Background3Pic from "../assets/background3-pic.png";
import Background4Pic from "../assets/background4-pic.png";

const BentoHomeSection = () => {
  return (
    <section className="w-full py-6">
      <div className="max-w-screen-xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Left Card */}
          <div className="md:col-span-2 h-96 md:h-[420px] rounded-3xl relative overflow-hidden bg-gradient-to-r from-[#92a38b] to-[#76a9c6] group transition-all duration-300 hover:shadow-lg">
            {/* Main content container */}
            <div className="absolute inset-0 p-8 flex flex-col">
              {/* Right big card */}
              <div className="flex justify-between items-start">
                <h1 className="text-4xl md:text-6xl text-white font-bold tracking-tight">
                  Autumn
                  <br />
                  Arrival of
                  <br />
                  Outfit
                </h1>
                <span className="text-4xl md:text-5xl text-white fancy-font text-end opacity-90">
                  50% <br />
                  <span className="font-sans text-3xl md:text-4xl">OFF</span>
                </span>
              </div>

              {/* Description */}
              <div className="max-w-md mt-8">
                <p className="text-white/80 mb-6 text-md">
                  Discover quality fashion that reflects your <br /> style and
                  makes everyday enjoyable.
                </p>

                {/* CTA Button */}
                <button
                  className="bg-black text-white px-8 py-3 rounded-full
                  flex items-center gap-3 hover:bg-white hover:text-black
                  transition-all duration-300 group"
                >
                  <span className="font-medium">EXPLORE PRODUCT</span>
                  <span
                    className="text-lg transition-transform duration-300
                    group-hover:translate-x-1"
                  >
                    →
                  </span>
                </button>
              </div>
            </div>

            {/* Product Image */}
            <div
              className="absolute right-24 bottom-0 w-1/2 h-full
              transition-transform duration-500 group-hover:scale-105"
            >
              <div className="relative h-full w-full">
                <div className="absolute inset-0" />
                <Image
                  src={Background1Pic}
                  alt="Red hoodie outfit"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>

          {/* Right Card */}
          <div className="relative h-96 md:h-[420px] rounded-3xl overflow-hidden group hover:shadow-lg transition-all duration-300">
            <div className="absolute inset-0">
              <Image
                src={Background2Pic}
                alt="Fashion style background"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                priority
              />
            </div>

            {/* Fashion Style */}
            <div className="absolute top-8 left-8">
              <h2
                className="text-3xl md:text-4xl text-white font-medium tracking-tight
                transform transition-transform duration-300 group-hover:translate-x-1"
              >
                Fashion <br /> Style
              </h2>
            </div>

            {/* Hivatkozás arrow */}
            <div className="absolute bottom-6 right-6">
              <button className="relative p-4 group/btn">
                <div
                  className="absolute inset-0 bg-white/20 backdrop-blur-md rounded-full
                  border border-white/40 transition-colors duration-300
                  group-hover/btn:bg-white/30"
                />
                <ArrowUpRight
                  size={32}
                  className="relative text-white transition-transform duration-300
                    group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1"
                />
              </button>
            </div>
          </div>

          {/* Második sor */}
          <div className="md:col-span-3">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Trendy Sunglasses */}
              <div className="relative h-52 rounded-3xl group hover:shadow-lg transition-all duration-300 bg-gradient-to-r from-[#cdd0c9] to-[#929989]">
                <div className="absolute left-0 top-[83px] inset-0 p-8">
                  <h2 className="text-3xl text-gray-900 tracking-tight">
                    Trendy <br /> Sunglasses
                  </h2>
                </div>
                {/* Product Image */}
                <div
                  className="absolute right-14 bottom-0 w-2/3 h-full
                  transition-transform duration-500 group-hover:scale-105 group-hover:translate-x-2"
                >
                  <div className="relative h-full w-full p-2">
                    <div className="absolute inset-0" />
                    <Image
                      src={Background3Pic}
                      alt="Glasses"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
                {/* Hivatkozás arrow */}
                <div className="absolute bottom-6 right-6">
                  <button className="relative p-4 group/btn">
                    <div
                      className="absolute inset-0 bg-gray-500/20 backdrop-blur-md rounded-full
                  border border-white/40 transition-colors duration-300
                  group-hover/btn:bg-gray-500/20"
                    />
                    <ArrowUpRight
                      size={32}
                      className="relative text-white transition-transform duration-300
                    group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1"
                    />
                  </button>
                </div>
              </div>

              {/* Popular Shoes */}
              <div className="relative h-52 rounded-3xl overflow-hidden group hover:shadow-lg transition-all duration-300 bg-gradient-to-r from-[#e0c6b5] to-[#bda596] ">
                <div className="absolute left-0 top-[83px] inset-0 p-8">
                  <h2 className="text-3xl text-gray-900 tracking-tight">
                    Popular <br /> Shoes
                  </h2>
                </div>
                <div
                  className="absolute right-2 bottom-5 w-4/5 h-full
                  transition-transform duration-500 group-hover:scale-105 group-hover:translate-x-2"
                >
                  <div className="relative h-full w-full p-2">
                    <div className="absolute inset-0" />
                    <Image
                      src={Background4Pic}
                      alt="Shoes"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
                {/* Hivatkozás arrow */}
                <div className="absolute bottom-6 right-6">
                  <button className="relative p-4 group/btn">
                    <div
                      className="absolute inset-0 bg-gray-500/20 backdrop-blur-md rounded-full
                  border border-white/40 transition-colors duration-300
                  group-hover/btn:bg-gray-500/20"
                    />
                    <ArrowUpRight
                      size={32}
                      className="relative text-white transition-transform duration-300
                    group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1"
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
