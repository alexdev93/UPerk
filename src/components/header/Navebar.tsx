import React, { useState } from 'react'
import Link from 'next/link';
import Image from 'next/image';
import BorderGradientButton from '../common/BorderGradientButton';
import GetAQuote from '../get-a-quote/GetAQuote';
import Overlay from '../common/Overlay';

interface NavBarProps {
  toggleMenu: () => void;
  isMenuOpen: boolean
} 

const Navebar: React.FC<NavBarProps> = ({ toggleMenu, isMenuOpen }) => {
    const [showForm, setShowForm] = useState(false);
    const handleQuoteClose = () => {
      setShowForm(false);
    };
  
    const handleQuoteOpen = () => {
      setShowForm(true);
    };
  
  return (
    <>
      {/* Top Bar */}
      <div className="flex max-w-[1500px] mx-auto flex-col md:flex-row items-center px-4 md:px-6 py-4 w-full">
        {/* Logo */}
        <div className="flex items-center w-full md:w-auto">
          <Link href={"/"}>
            <Image
              src="/icons/logo.svg"
              width={60}
              height={60}
              alt="logo"
              className="order-1"
            />
          </Link>

          {/* Button for mobile screens (centered, appears after logo) */}
          <div
            className="md:hidden mt-[2px] order-2 mx-auto"
            onClick={handleQuoteOpen}
          >
            <BorderGradientButton text="Build Your AI Agent" />
          </div>

          {/* Hamburger Menu Button for <md screens */}
          <button
            className="md:hidden text-white focus:outline-none order-3"
            onClick={toggleMenu}
            aria-label="Toggle navigation menu"
          >
            <svg
              className="w-8 h-8 lg:block stroke-[#18181B] dark:stroke-[#E4E4E7]"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={
                  isMenuOpen
                    ? "M6 18L18 6M6 6l12 12"
                    : "M4 6h16M4 12h16M4 18h16"
                }
              />
            </svg>
          </button>
        </div>

        {/* Navigation Links and Button for >=md screens */}
        <div className="hidden md:flex flex-row items-center justify-between w-full">
          {/* Navigation Links (centered between logo and button on desktop) */}
          <div className="flex flex-row space-x-20 dark:text-white text-[black]  mx-auto">
            <Link
              href="/"
              className="text-base md:text-lg hover:text-blue-400 transition"
            >
              Home
            </Link>
            <Link
              href="/case-studies"
              className="text-base md:text-lg hover:text-blue-400 transition"
            >
              Case Studies
            </Link>
            <Link
              href="/blog"
              className="text-base md:text-lg hover:text-blue-400 transition"
            >
              Blogs
            </Link>
          </div>

          {/* Button for >=md screens (appears after navigation links) */}
          <div className="mt-[2px]" onClick={handleQuoteOpen}>
            <BorderGradientButton text="Build Your AI Agent" />
          </div>
        </div>

        {/* Mobile Navigation Links (dropdown for <md screens) */}
        <div
          className={`${
            isMenuOpen ? "flex" : "hidden"
          } md:hidden flex-col space-y-4 text-white mt-8 w-full bg-gray-800 absolute top-20 left-0 z-10 px-4 pb-4`}
        >
          <Link href="/" className="text-base hover:text-blue-400 transition">
            Home
          </Link>
          <Link
            href="/case-studies"
            className="text-base hover:text-blue-400 transition"
          >
            Case Studies
          </Link>
          <Link
            href="/blog"
            className="text-base hover:text-blue-400 transition"
          >
            Blogs
          </Link>
        </div>
      </div>
      {/* Get a Quote Form */}
      {showForm && (
        <div>
          <Overlay>
            <GetAQuote handleQuoteClose={handleQuoteClose} />
          </Overlay>
        </div>
      )}
    </>
  );
};

export default Navebar