'use client';

import { Search, X } from 'lucide-react';
import Image from 'next/image';
import { useState } from 'react';
import { HiOutlineShoppingBag } from 'react-icons/hi2';
import Avatar from '../assets/avatar.jpg';
import Logo from '../assets/logo.png';

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <section className="w-full sticky top-0 z-50 bg-[#fafafa] border-y border-gray-200">
      <div className="max-w-screen-xl mx-auto px-4">
        <header className="py-4 relative">
          <nav className="flex items-center justify-between">
            {/* Logo */}
            <button>
              <Image
                src={Logo}
                alt="Brand Logo"
                className="w-24 rounded-lg"
                width={96}
                height={96}
                priority
              />
            </button>

            {/* Mobile Icons */}
            <div className="lg:hidden flex items-center space-x-4">
              <button className="p-2 hover:bg-gray-100 rounded-full">
                <HiOutlineShoppingBag className="w-6 h-6 text-gray-700" />
              </button>
              <button
                className="p-2 hover:bg-gray-100 rounded-full"
                onClick={() => setIsSearchOpen(true)}
                aria-label="Open Search"
              >
                <Search className="w-6 h-6 text-gray-700" />
              </button>
            </div>

            {/* Search Bar (Desktop) */}
            <div className="hidden lg:flex flex-1 justify-center">
              <div className="relative w-full max-w-2xl">
                <input
                  type="text"
                  className="w-full pl-4 pr-12 py-2 text-sm text-gray-700 bg-gray-100/30 focus:bg-white focus:outline-none border border-gray-200 focus:border-gray-300 rounded-full transition"
                  placeholder="Search for products"
                />
                <Search className="w-4 h-4 absolute right-4 top-1/2 -translate-y-1/2 text-gray-500" />
              </div>
            </div>

            {/* Right Section (Desktop) */}
            <div className="hidden lg:flex items-center space-x-3">
              <button className="p-2 hover:bg-gray-100 rounded-full">
                <HiOutlineShoppingBag className="w-6 h-6 text-gray-700" />
              </button>
              <span className="w-px h-8 bg-gray-200" />
              {!isLoggedIn ? (
                <button
                  onClick={() => setIsLoggedIn(true)}
                  className="text-gray-700 hover:text-black"
                >
                  Sign Up / Log In
                </button>
              ) : (
                <button className="flex items-center space-x-2">
                  <Image
                    src={Avatar}
                    alt="User Avatar"
                    className="w-8 h-8 rounded-full object-cover"
                    width={32}
                    height={32}
                  />
                  <span className="text-gray-700 hover:text-black">Morgan</span>
                </button>
              )}
            </div>
          </nav>

          {/* Mobile Search Modal */}
          {isSearchOpen && (
            <>
              {/* Backdrop thing */}
              <div
                className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
                onClick={() => setIsSearchOpen(false)}
              />
              {/* Search Modal */}
              <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
                <div className="relative w-full max-w-md bg-white p-4 rounded-lg shadow-lg">
                  <button
                    className="absolute top-4 right-5 p-2 hover:bg-gray-200 rounded-full"
                    onClick={() => setIsSearchOpen(false)}
                    aria-label="Close Search"
                  >
                    <X className="w-6 h-6 text-gray-700" />
                  </button>
                  <input
                    type="text"
                    className="w-full pl-4 pr-12 py-2 text-sm text-gray-700 bg-gray-100 focus:bg-white focus:outline-none border border-gray-300 rounded-full transition"
                    placeholder="Search for products"
                  />
                </div>
              </div>
            </>
          )}
        </header>
      </div>
    </section>
  );
};

export default Navbar;
