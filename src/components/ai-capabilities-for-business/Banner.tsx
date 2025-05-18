import React from "react";
import { Heading } from "@/components/common/Heading";
import { Paragraph } from "../common/Paragraph";

interface BannerProps {
  heading: string;
  paragraph: string;
}

const Banner: React.FC<BannerProps> = ({ heading, paragraph }) => {
  return (
    <div className="max-w-[694px] mx-auto w-full justify-center py-8 px-4 text-center">
      <Heading level={2} className="font-bold mb-2 text-[#E8E9EA]">
        {heading}
      </Heading>
      <Paragraph className="text-[#E8E9EA]">{paragraph}</Paragraph>
    </div>
  );
};

export default Banner;
