const MiddleBanner = () => {
  return (
    <section className="w-full py-4 sm:py-6">
      <div className="container mx-auto">
        <div className="bg-[#98a474] rounded-3xl overflow-hidden relative h-[320px] shadow-md">
          <div className="relative h-full flex flex-col items-center justify-center p-8 sm:p-12 text-center">
            <span className="text-white/90 text-sm tracking-[0.2em] font-light mb-4">
              LAST CHANCE
            </span>

            <h1 className="text-white text-3xl sm:text-4xl lg:text-5xl font-light tracking-wider leading-tight">
              EXPLORE OUR RANGE OF
              <br className="hidden" />
              <span className="block mt-3">STYLISH DRESSES</span>
            </h1>

            {/* Button */}
            <button
              className="mt-6 bg-white text-gray-800 px-6 py-2 rounded-full text-sm tracking-wider
                             hover:bg-white/90 transition-colors duration-200"
            >
              CHECK IT NOW
            </button>
          </div>

          <div className="absolute inset-0 bg-black/5" />
        </div>
      </div>
    </section>
  );
};

export default MiddleBanner;
