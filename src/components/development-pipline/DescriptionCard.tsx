import React from "react";
import { Heading } from "../common/Heading";
import { Paragraph } from "../common/Paragraph";
const DescriptionCard = ({ title, description }: {title: string | undefined, description:string | undefined}) => {
  return (
    <div className="dark:bg-[#222222] bg-[#F8F8F8] text-white p-6 md:p-8 rounded-lg flex flex-col gap-4  max-w-[500px] w-full h-[203px]">
      <div className="flex items-center gap-4">
        <Heading level={3} className="dark:text-[#E8E9EA] text-[#272A2D] ">
          {title}
        </Heading>
      </div>
      <Paragraph className="text-[#272A2D] dark:text-[#E8E9EA] font-[200]">
        {description}
      </Paragraph>
    </div>
  );
};

export default DescriptionCard;






