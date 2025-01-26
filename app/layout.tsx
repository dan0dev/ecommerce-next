import { AnimatePresence } from "motion/react";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import CookieBanner from "./components/CookieBanner";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import TopInfo from "./components/TopInfo";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Thread | Official Website",
  description: "Your favorite online clothing store",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col min-h-screen`}
      >
        <CookieBanner />
        <TopInfo />
        <Navbar />
        <main className="flex-grow">
          <AnimatePresence mode="wait">{children}</AnimatePresence>
        </main>
        <Footer />
      </body>
    </html>
  );
}
