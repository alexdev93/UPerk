"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import BorderGradientButton from "../common/BorderGradientButton";
import GetAQuote from "../get-a-quote/GetAQuote";
import Overlay from "../common/Overlay";
import NavDropdown from "../common/NavDropDown";

const navLinks = [
  { label: "Home", href: "/" },
  {
    label: "Case Studies",
    href: "/case-studies",
    children: [
      { label: "Das-Guzo", href: "/case-studies/das-guzo" },
      { label: "Das-Guzo-CRM", href: "/case-studies/das-guzo-crm" },
    ],
  },
  { label: "Blogs", href: "/blog" },
];

const Navebar: React.FC = () => {
  const [showForm, setShowForm] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState<string | null>(null);
  const [dropdownMobileOpen, setDropdownMobileOpen] = useState<string | null>(
    null
  );

  const toggleDropdown = (label: string) => {
    setDropdownOpen((prev) => (prev === label ? null : label));
  };

  const toggleMobileDropdown = (label: string) => {
    setDropdownMobileOpen((prev) => (prev === label ? null : label));
  };

  return (
    <>
      <div className="flex max-w-[1500px] mx-auto flex-col md:flex-row items-center px-4 md:px-6 py-4 w-full relative">
        {/* Logo + Mobile CTA */}
        <div className="flex items-center w-full md:w-auto">
          <Link href="/">
            <Image
              src="/icons/logo.svg"
              width={60}
              height={60}
              alt="logo"
              className="order-1"
            />
          </Link>

          <div
            className="md:hidden mt-[2px] order-2 mx-auto"
            onClick={() => setShowForm(true)}
          >
            <BorderGradientButton text="Build Your AI Agent" />
          </div>

          <button
            className="md:hidden text-white focus:outline-none order-3"
            onClick={() => setIsMenuOpen((prev) => !prev)}
            aria-label="Toggle navigation menu"
          >
            <svg
              className="w-8 h-8 stroke-[#18181B] dark:stroke-[#E4E4E7]"
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

        {/* Desktop Nav */}
        <div className="hidden md:flex flex-row items-center justify-between w-full">
          <div className="flex flex-row space-x-20 dark:text-white text-black mx-auto">
            {navLinks.map((link) =>
              link.children ? (
                <NavDropdown
                  key={link.label}
                  label={link.label}
                  parentHref={link.href}
                  childrenLinks={link.children}
                  show={dropdownOpen === link.label}
                  toggle={() => toggleDropdown(link.label)}
                />
              ) : (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-base md:text-lg hover:text-blue-400 transition"
                >
                  {link.label}
                </Link>
              )
            )}
          </div>
          <div className="mt-[2px]" onClick={() => setShowForm(true)}>
            <BorderGradientButton text="Build Your AI Agent" />
          </div>
        </div>

        {/* Mobile Nav */}
        <div
          className={`${
            isMenuOpen ? "flex" : "hidden"
          } md:hidden flex-col space-y-4 text-white mt-8 w-full bg-gray-800 absolute top-20 left-0 z-10 px-4 pb-4`}
        >
          {navLinks.map((link) =>
            link.children ? (
              <NavDropdown
                key={link.label}
                label={link.label}
                parentHref={link.href}
                childrenLinks={link.children}
                show={dropdownMobileOpen === link.label}
                toggle={() => toggleMobileDropdown(link.label)}
                isMobile
              />
            ) : (
              <Link
                key={link.label}
                href={link.href}
                className="text-base hover:text-blue-400 transition"
              >
                {link.label}
              </Link>
            )
          )}
        </div>
      </div>

      {/* Get a Quote Form */}
      {showForm && (
        <Overlay>
          <GetAQuote handleQuoteClose={() => setShowForm(false)} />
        </Overlay>
      )}
    </>
  );
};

export default Navebar;
