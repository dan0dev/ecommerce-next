import Image from "next/image";

const MiddleBanner = () => {
  return (
    <section className="w-full py-4 sm:py-6">
      <div className="container mx-auto">
        <div className="bg-gradient-to-br from-[#798461] to-[#93a075] rounded-3xl overflow-hidden relative h-[320px] shadow-md">
          {/* Content */}
          <div className="relative h-full flex flex-col items-center justify-center p-8 sm:p-12 text-center z-10">
            <span className="text-white/90 text-sm tracking-[0.2em] font-light mb-4">
              LAST CHANCE
            </span>

            <h1 className="text-white text-3xl sm:text-4xl lg:text-5xl font-light tracking-wider leading-tight">
              EXPLORE OUR RANGE OF
              <br className="hidden sm:block" />
              <span className="block mt-3">STYLISH DRESSES</span>
            </h1>

            <button className="mt-6 bg-white text-gray-800 px-6 py-2 rounded-full text-sm tracking-wider hover:bg-white/90 transition-colors duration-200">
              CHECK IT NOW
            </button>
          </div>

          {/* Right Image */}
          <div className="absolute top-0 right-0 w-1/4 h-full overflow-hidden">
            <div className="relative w-full h-[140%] -top-[35%]">
              <Image
                src="/middlebanner.png"
                alt="Banner"
                fill
                className="object-cover object-center"
                quality={100}
                sizes="25vw"
                priority
              />
            </div>
          </div>

          {/* Left Image */}
          <div className="absolute top-0 left-6 w-1/4 h-full overflow-hidden">
            <div className="relative w-full h-[100%]">
              <Image
                src="/middlebanner2.png"
                alt="Banner"
                fill
                className="object-cover object-center"
                quality={100}
                sizes="25vw"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MiddleBanner;
