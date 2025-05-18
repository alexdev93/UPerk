import React from "react";
import Image from "next/image";
import BorderGradientButton from "../common/BorderGradientButton";
import GradientButton from "../common/BgGradientButton";
import { Heading } from "@/components/common/Heading";
import { Paragraph } from "../common/Paragraph";
const Header = () => {
  return (
    <div>
      {/* Top Bar */}
      <div className="flex justify-between max-w-[1280px] mx-auto mt-[24px]">
        <div>
          <Image src={"/icons/logo.svg"} width={60} height={60} alt="logo" />
        </div>

        <div>
          <BorderGradientButton text="Build Your AI Agent" />
        </div>
      </div>

      {/* Hero Section */}
      <div className="relative flex flex-col items-center justify-center text-center mt-[60px] px-4">
        {/* Glowing Background Behind the Mic */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[300px] h-[300px] rounded-full bg-[#1e293b] opacity-70 blur-[60px] z-[-1]" />
        {/* Mic Image */}
        <Image
          src={"/images/hero.svg"}
          width={256}
          height={255}
          alt="hero"
          className="mb-4"
        />
        <p className="text-sm text-[#A6A6A6] mt-8 mb-6">
          Powered by Universal Perk
        </p>
        {/* Title */}
        <Heading level={1} >
          <div className="mb-[-30px]">
            <span className="text-[#2ca2f4]">CUSTOM AI</span> THAT SELLS,
          </div>
          <br className="hidden sm:block " /> SUPPORTS AND SCALE WITH YOU
        </Heading>
        {/* Subtitle */}

        <Paragraph className="dark:text-[#A6A6A6] text-[#797979] mt-4 max-w-xl">
          Close more deals, cut response time and slash costs – 24/7 automation
          that sounds human and works non-stop{" "}
        </Paragraph>
        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mt-8">
          <GradientButton className="rounded-[35px]">
            Get a Quote
          </GradientButton>
          <BorderGradientButton text="Book a Call" />
        </div>
      </div>
    </div>
  );
};

export default Header;
