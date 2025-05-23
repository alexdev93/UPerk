"use client";

import type React from "react";
import Image from "next/image";
import { Heading } from "../common/Heading";
import { Paragraph } from "../common/Paragraph";
import GradientButton from "../common/BgGradientButton";

interface BlogBannerProps {
  onShowBlogDetail: () => void;
  blogDetail: boolean;
}

const BlogBanner: React.FC<BlogBannerProps> = ({
  onShowBlogDetail,
  blogDetail,
}) => {
  return (
    <div className="relative  text-white flex flex-col md:flex-row items-center justify-between px-6 py-8 md:px-12 md:py-0">
      {/* Left Section - Text Content */}
      <div className="text-[#E8E9EA] w-full md:w-1/2 space-y-4 flex flex-col justify-center md:py-12">
        <div className="w-[178px] bg-black rounded-[60px] text-center">
          <span className="text-blue-400 text-sm font-medium uppercase tracking-wider">
            Technology
          </span>
        </div>
        <Heading
          level={1}
          className="dark:text-[#E8E9EA]  text-4xl text-[#272A2D] md:text-5xl font-extrabold leading-tight"
        >
          AI In Finance: <br /> Enhancing <br /> Decision Making
        </Heading>
        <Paragraph className="text-lg md:text-xl max-w-md dark:text-[#A5A5A5] text-[#A5A5A5]">
          Investigate How AI Is Being Used In Financial Services For Risk
          Assessment And Investment Strategies.
        </Paragraph>
        {!blogDetail ? (
          <GradientButton
            className="rounded-[22px] cursor-pointer"
            onClick={onShowBlogDetail}
          >
            Read Now
          </GradientButton>
        ) : (
          <p
            className="dark:text-gray-300 cursor-pointer flex items-center text-[#272A2D]"
            onClick={onShowBlogDetail}
          >
            ← Go Back To Blogs
          </p>
        )}
      </div>

      {/* Right Section - Image */}
      <div className="w-full md:w-1/2 flex justify-center md:justify-end h-full md:mt-0 mt-8">
        <div className="relative w-full h-full">
          <Image
            src="/images/ai/ai-in-finance.svg"
            alt="AI holding a credit card"
            width={542}
            height={363}
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default BlogBanner;
