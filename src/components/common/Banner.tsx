import React from "react";
import { Heading } from "@/components/common/Heading";
import { Paragraph } from "../common/Paragraph";

interface BannerProps {
  heading: string;
  paragraph: string;
}

const Banner: React.FC<BannerProps> = ({ heading, paragraph }) => {
  return (
    <div className="max-w-[694px] mx-auto w-full justify-center py-8 px-4 text-center mb-8">
      <Heading
        level={2}
        className="font-bold   mb-2 dark:text-[#E8E9EA] text-[#272A2D]"
      >
        {heading}
      </Heading>
      <Paragraph className="dark:text-[#A1A1A1] text-[#272A2D] mt-6">
        {paragraph}
      </Paragraph>
    </div>
  );
};

export default Banner;
