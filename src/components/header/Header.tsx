"use client";
import React, { useState } from "react";
import Image from "next/image";
import BorderGradientButton from "../common/BorderGradientButton";
import GradientButton from "../common/BgGradientButton";
import { Heading } from "@/components/common/Heading";
import { Paragraph } from "../common/Paragraph";
import Navebar from "./Navebar";
import GetAQuote from "../get-a-quote/GetAQuote";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showForm, setShowForm] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleQuoteOpen = () => {
    setShowForm(true);
  };

  const handleQuoteClose = () => {
    setShowForm(false);
  };

  return (
    <div className="max-w-7xl sm:px-10 px-4 mx-auto mt-[25px]">
      <Navebar toggleMenu={toggleMenu} isMenuOpen={isMenuOpen} />
      {/* Hero Section */}
      <div className="relative flex flex-col items-center justify-center text-center mt-[40px] px-4">
        {/* Glowing Background Behind the Mic */}
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[300px] h-[300px] rounded-full opacity-50 blur-[85px] z-[-1]"
          style={{
            background: "linear-gradient(to bottom, #2563EB, #2CA2F4, #34E5FF)",
          }}
        />
        {/* Mic Image */}
        <Image
          src={"/images/hero.svg"}
          width={256}
          height={255}
          alt="hero"
          className="mb-4"
        />
        <Paragraph className="text-sm dark:text-[#E8E9EA] text-[#272A2D] mt-8 mb-6">
          Powered by Universal Perk
        </Paragraph>
        {/* Title */}
        <Heading level={1}>
          <div className="sm:mb-[-30px] dark:text-[#EAEAEA] text-[#272A2D]">
            <span className="bg-gradient-to-r from-[#2563EB] via-[#2FBAF8] to-[#34E5FF] bg-clip-text text-transparent">
              CUSTOM AI{" "}
            </span>
            THAT SELLS,
          </div>
          <br className="hidden sm:block" /> SUPPORTS AND SCALE WITH YOU
        </Heading>

        {/* Subtitle */}
        <Paragraph className="dark:text-[#A6A6A6] text-[#797979] mt-4 max-w-xl">
          Close more deals, cut response time and slash costs – 24/7 automation
          that sounds human and works non-stop
        </Paragraph>

        {/* Get a Quote Form */}
        {showForm && (
          <div className="absolute bottom-full mb-[-580] w-full sm:w-auto">
            <GetAQuote handleQuoteClose={handleQuoteClose} />
          </div>
        )}

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mt-8 cursor-pointer">
          <GradientButton className="rounded-[35px]" onClick={handleQuoteOpen}>
            Get a Quote
          </GradientButton>
          <BorderGradientButton text="Book a Call" />
        </div>
      </div>
    </div>
  );
};

export default Header;
