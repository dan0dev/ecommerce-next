"use client";

import { Facebook, Instagram, Youtube } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";
import { FaTiktok } from "react-icons/fa";

const Footer = () => {
  const [mounted, setMounted] = useState(false);
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubscribed(true);
    setEmail("");
  };

  const renderNewsletterForm = () => {
    if (!mounted) return null;

    return (
      <form onSubmit={handleSubmit} className="mt-4 flex justify-center">
        <div className="relative flex-1">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your e-mail"
            className="w-full px-4 py-2 border border-black/70 focus:outline-none focus:border-blue-500"
            required
          />
          {isSubscribed && (
            <span className="absolute right-3 top-1/2 -translate-y-1/2 text-green-500">
              ✓
            </span>
          )}
        </div>
        <button
          type="submit"
          className="bg-black text-white px-4 py-2 hover:bg-gray-800"
        >
          →
        </button>
      </form>
    );
  };

  return (
    <footer className="w-full bg-[#F4F4F4]">
      {/* Newsletter */}
      <div className="w-full py-8 mt-8 border-t border-gray-200">
        <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row justify-between items-start gap-6 px-4">
          <div className="w-full flex flex-col items-center justify-center">
            <h3 className="font-medium text-sm mb-1">
              ELEVATE YOUR FASHION GAME
            </h3>
            <p className="text-xs text-gray-600 mb-2 font-light text-center">
              Sign up for our email newsletter and GET 10% OFF. It's like having
              a stylist BFF. Opt out any time.
            </p>
            <a href="#" className="text-sm text-gray-600 underline">
              privacy policy
            </a>
            {renderNewsletterForm()}
          </div>
          <div className="w-full flex flex-col items-center justify-center">
            <h3 className="font-medium text-sm mb-1">HELP US IMPROVE</h3>
            <p className="text-xs text-gray-600 font-light">
              Take a brief survey about today's visit.
            </p>
            <button className="underline text-xs mt-1 font-medium">
              BEGIN SURVEY
            </button>
          </div>
          <div className="w-full flex flex-col items-center justify-center">
            <h3 className="font-medium text-sm mb-1">GET THREAD ON THE GO</h3>
            <p className="text-xs text-gray-600 font-light text-center">
              Download our super easy-to-use app available for your iPhone, iPad{" "}
              <br />
              and Android
            </p>
            {mounted && (
              <div className="flex justify-center">
                <Image
                  src="/apple.png"
                  alt="App Store"
                  className="mt-2"
                  width={82}
                  height={82}
                />
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="w-full py-12 bg-black text-white">
        <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 px-4">
          <div className="text-center md:text-left">
            <h4 className="font-medium text-sm mb-4">CUSTOMER CARE</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-xs font-light hover:underline">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#" className="text-xs font-light hover:underline">
                  support@thread.com
                </a>
              </li>
              <li>
                <a href="#" className="text-xs font-light hover:underline">
                  Payment Options
                </a>
              </li>
              <li>
                <a href="#" className="text-xs font-light hover:underline">
                  FAQs
                </a>
              </li>
              <li>
                <a href="#" className="text-xs font-light hover:underline">
                  Track Your Order
                </a>
              </li>
            </ul>
          </div>

          <div className="text-center md:text-left">
            <h4 className="font-medium text-sm mb-4">SHOPPING</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-xs font-light hover:underline">
                  Shipping & Delivery
                </a>
              </li>
              <li>
                <a href="#" className="text-xs font-light hover:underline">
                  Returns & Exchanges
                </a>
              </li>
              <li>
                <a href="#" className="text-xs font-light hover:underline">
                  Size Guide
                </a>
              </li>
              <li>
                <a href="#" className="text-xs font-light hover:underline">
                  Gift Cards
                </a>
              </li>
            </ul>
          </div>

          <div className="text-center md:text-left">
            <h4 className="font-medium text-sm mb-4">INFORMATION</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-xs font-light hover:underline">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="text-xs font-light hover:underline">
                  Stores
                </a>
              </li>
              <li>
                <a href="#" className="text-xs font-light hover:underline">
                  Sustainability
                </a>
              </li>
              <li>
                <a href="#" className="text-xs font-light hover:underline">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="text-xs font-light hover:underline">
                  Ambassadors
                </a>
              </li>
              <li>
                <a href="#" className="text-xs font-light hover:underline">
                  Affiliate
                </a>
              </li>
            </ul>
          </div>

          {mounted && (
            <div className="text-center md:text-left">
              <h4 className="font-medium text-sm mb-4">CONNECT</h4>
              <div className="flex justify-center md:justify-start space-x-4">
                <FaTiktok className="w-6 h-6 cursor-pointer hover:text-gray-300" />
                <Youtube className="w-6 h-6 cursor-pointer hover:text-gray-300" />
                <Instagram className="w-6 h-6 cursor-pointer hover:text-gray-300" />
                <Facebook className="w-6 h-6 cursor-pointer hover:text-gray-300" />
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Bottom Section - Legal */}
      <div className="w-full py-4 bg-black text-white border-t border-gray-800">
        <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row justify-between items-center text-xs px-4">
          <p className="text-center md:text-left font-light">
            2025 © Thread Inc. All Rights Reserved.
          </p>
          <div className="flex flex-wrap gap-4 mt-4 md:mt-0 justify-center">
            <a href="#" className="font-light hover:underline">
              TERMS
            </a>
            <a href="#" className="font-light hover:underline">
              PRIVACY
            </a>
            <a href="#" className="font-light hover:underline">
              COOKIE PREFERENCES
            </a>
            <a href="#" className="font-light hover:underline">
              PRIVACY RIGHTS
            </a>
            <a href="#" className="font-light hover:underline">
              TRANSPARENCY ACT
            </a>
            <a href="#" className="font-light hover:underline">
              YOUR PRIVACY CHOICES
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
