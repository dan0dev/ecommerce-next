"use client";

import Image from "next/image";

const LastPart = () => {
  return (
    <section className="w-full py-4 sm:py-6 mt-8">
      <div className="container mx-auto px-6 lg:px-0 flex flex-col sm:flex-row justify-between gap-8">
        {/* Image Section */}
        <div className="container max-w-2xl flex flex-row flex-wrap sm:flex-nowrap gap-4 justify-center lg:justify-start">
          <div
            className="relative w-full max-w-72 h-64 sm:h-72 lg:h-80 rounded-2xl overflow-hidden shadow-sm border border-gray-400/30 bg-gray-100"
            aria-hidden="true"
          >
            <Image
              src="/lastpart2.png"
              alt="Delivery package"
              fill
              quality={85}
              className="object-center object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
          <div
            className="relative w-full max-w-72 h-64 sm:h-72 lg:h-80 rounded-2xl overflow-hidden shadow-sm border border-gray-400/30 bg-gray-100"
            aria-hidden="true"
          >
            <Image
              src="/lastpart3.jpg"
              alt="Delivery package"
              fill
              quality={85}
              className="object-bottom object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
        </div>

        {/* Text Section */}
        <div className="flex-1 space-y-6 text-center sm:text-left">
          <h1
            className="font-semibold text-2xl sm:text-3xl lg:text-4xl text-gray-900"
            aria-label="Shop now & discover why is our brand for your best deal."
          >
            Shop now & discover why is our brand for your best deal.
          </h1>
          <p
            className="text-base text-gray-600 leading-relaxed max-w-2xl mx-auto sm:mx-0"
            aria-label="Delivery information"
          >
            We believe that style shouldn't compromise quality. That's why we
            source our products from trusted manufacturers who prioritize
            durability and craftsmanship.
          </p>

          <div className="flex justify-center sm:justify-start">
            <button className="max-w-md font-medium border border-black rounded-full px-5 py-3 hover:bg-black/10 shadow-sm transition-all duration-200 uppercase text-sm">
              Read more
            </button>
          </div>
        </div>
      </div>

      <div className="w-full h-px bg-gray-300/60 mt-8 sm:mt-16" />

      <div className="mt-14">
        <div className="container mx-auto px-6 lg:px-0 flex flex-col sm:flex-row justify-between gap-8">
          {/* Text Section */}
          <div className="flex-1 space-y-6 text-center sm:text-left container max-w-2xl">
            <h1
              className="font-semibold text-2xl sm:text-3xl lg:text-4xl text-gray-900"
              aria-label="Order now and get your package within 48 hours"
            >
              Order now and get your package within 48 hours
            </h1>
            <p
              className="text-base text-gray-600 leading-relaxed max-w-2xl mx-auto sm:mx-0"
              aria-label="Delivery information"
            >
              We deliver to over 100 cities, ensuring your chosen destination is
              covered! Enjoy free delivery on orders over $50, making shopping
              easier and cost-effective.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="text"
                placeholder="Enter the tracking ID of your package"
                className="w-full max-w-md px-4 py-3 rounded-full border border-gray-300 shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none text-sm sm:text-base text-gray-700 placeholder-gray-400"
              />

              <button className="w-full sm:w-auto max-w-md font-medium border border-black rounded-full px-5 py-3 hover:bg-black/10 shadow-sm transition-all duration-200 uppercase text-sm">
                Track my order
              </button>
            </div>
          </div>

          {/* Image Section */}
          <div
            className="flex-1 relative w-full max-w-[576px] h-64 sm:h-72 lg:h-80 rounded-2xl overflow-hidden shadow-sm border border-gray-400/30 bg-gray-100"
            aria-hidden="true"
          >
            <Image
              src="/lastpart1.jpg"
              alt="Delivery package"
              fill
              quality={85}
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default LastPart;
