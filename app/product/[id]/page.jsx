// product/[id]/page.jsx
"use client";

import Link from "next/link";
import { use, useEffect } from "react";
import { COLLECTION_DATA } from "../../components/collection/collectionData";
import MiddleBanner from "../../components/MiddleBanner";
import PageTransition from "../../components/PageTransition";

export default function ProductPage({ params }) {
  // scroll to top
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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

  return (
    <PageTransition>
      <div className="max-w-screen-xl mx-auto px-4 py-8">
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
        <div className="grid md:grid-cols-2 gap-8">
          <div className="relative aspect-square bg-gray-300/30 rounded-3xl border border-gray-400/30">
            <img
              src={product.image || "/collection/defaultImage.png"}
              alt={product.name}
              className="object-contain rounded-lg w-full h-full"
            />
          </div>

          <div className="space-y-6">
            <h1 className="text-3xl font-semibold">{product.name}</h1>
            <p className="text-xl font-medium">${product.price}</p>
            <p className="text-gray-600">{product.description}</p>

            <div className="space-y-4">
              <div>
                <h3 className="font-medium mb-2">Available Colors:</h3>
                <div className="flex gap-2">
                  {product.colors.map((color, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-gray-100 rounded-full text-sm"
                    >
                      {color}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="font-medium">Available Sizes:</h3>
                <div className="flex group">
                  <p className="mb-2 font-light text-sm text-gray-700 group-hover:text-blue-600 group-hover:font-base group-hover:cursor-pointer mr-1 transition-all duration-50">
                    Size guide
                  </p>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-4 h-4 group-hover:fill-blue-500 transition-all duration-50 cursor-pointer"
                    viewBox="0 0 34 34"
                  >
                    <path d="M21.434 11.975l8.602-8.549-0.028 4.846c-0.009 0.404 0.311 0.755 0.716 0.746l0.513-0.001c0.404-0.009 0.739-0.25 0.748-0.654l0.021-7.219c0-0.007-0.027-0.012-0.027-0.019l0.040-0.366c0.004-0.203-0.044-0.384-0.174-0.513-0.13-0.131-0.311-0.21-0.512-0.204l-0.366 0.009c-0.007 0-0.012 0.003-0.020 0.004l-7.172-0.032c-0.404 0.009-0.738 0.343-0.747 0.748l-0.001 0.513c0.061 0.476 0.436 0.755 0.84 0.746l4.726 0.013-8.572 8.52c-0.39 0.39-0.39 1.024 0 1.415s1.023 0.39 1.414 0zM10.597 20.025l-8.602 8.523 0.027-4.82c0.010-0.404-0.312-0.756-0.716-0.747l-0.544 0.001c-0.405 0.010-0.739 0.25-0.748 0.654l-0.021 7.219c0 0.007 0.028 0.011 0.028 0.019l-0.040 0.365c-0.005 0.203 0.043 0.385 0.174 0.514 0.129 0.131 0.311 0.21 0.512 0.205l0.366-0.009c0.007 0 0.012-0.003 0.020-0.003l7.203 0.032c0.404-0.010 0.738-0.344 0.748-0.748l0.001-0.514c-0.062-0.476-0.436-0.755-0.84-0.746l-4.726-0.012 8.571-8.518c0.39-0.39 0.39-1.023 0-1.414s-1.023-0.391-1.413-0zM32.007 30.855l-0.021-7.219c-0.009-0.404-0.343-0.645-0.747-0.654l-0.513-0.001c-0.404-0.009-0.725 0.343-0.716 0.747l0.028 4.846-8.602-8.549c-0.39-0.39-1.023-0.39-1.414 0s-0.39 1.023 0 1.414l8.571 8.518-4.726 0.012c-0.404-0.009-0.779 0.27-0.84 0.746l0.001 0.514c0.009 0.404 0.344 0.739 0.747 0.748l7.172-0.032c0.008 0 0.013 0.003 0.020 0.003l0.366 0.009c0.201 0.005 0.384-0.074 0.512-0.205 0.131-0.129 0.178-0.311 0.174-0.514l-0.040-0.365c0-0.008 0.027-0.012 0.027-0.019zM3.439 2.041l4.727-0.012c0.404 0.009 0.778-0.27 0.84-0.746l-0.001-0.513c-0.010-0.405-0.344-0.739-0.748-0.748l-7.204 0.031c-0.008-0.001-0.013-0.004-0.020-0.004l-0.366-0.009c-0.201-0.005-0.383 0.074-0.512 0.204-0.132 0.13-0.179 0.31-0.174 0.514l0.040 0.366c0 0.007-0.028 0.012-0.028 0.020l0.021 7.219c0.009 0.404 0.343 0.645 0.748 0.654l0.545 0.001c0.404 0.009 0.724-0.342 0.715-0.746l-0.028-4.819 8.602 8.523c0.39 0.39 1.024 0.39 1.414 0s0.39-1.024 0-1.415z"></path>
                  </svg>
                </div>
                <div className="flex gap-2">
                  {product.sizes.map((size, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-gray-100 rounded-full text-sm"
                    >
                      {size}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="font-medium mb-2">Materials:</h3>
                <div className="flex flex-wrap gap-2">
                  {product.materials.map((material, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-gray-100 rounded-full text-sm"
                    >
                      {material}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full h-px bg-gray-300/60 mt-8 sm:mt-16" />
        <MiddleBanner />
      </div>
    </PageTransition>
  );
}
