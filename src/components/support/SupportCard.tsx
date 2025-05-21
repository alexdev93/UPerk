"use client";
import Image from "next/image";
import React from "react";
import GradientButton from "../common/BgGradientButton";
import { Heading } from "../common/Heading";

interface ExcessiveCostsCardProps {
  title: string;
  subtitle: string;
  description: string;
  buttonText: string;
  imageUrl: string;
}

const SupportCard: React.FC<ExcessiveCostsCardProps> = ({
  title,
  subtitle,
  description,
  buttonText,
  imageUrl,
}) => {
  return (
    <div className="rounded-lg  max-w-sm mx-auto ">
      <div className="relative w-full h-48 bg-[#1C1C1C66]">
        <Image
          src={imageUrl}
          alt={title}
          fill
          objectFit="cover"
          className="opacity-100 dark:opacity-50" // Adjust opacity: opacity-0, opacity-25, opacity-50, opacity-75, opacity-100, etc.
        />
        <div className="absolute inset-0 flex items-center text-center justify-center">
          <Heading
            level={2}
            className="text-[#FFFFFF] dark:text-[#E8E9EA] opacity-100 "
          >
            {title}
          </Heading>
        </div>
      </div>
      <div className=" text-left">
        <Heading level={3} className="text-[#272A2D] dark:text-[#E8E9EA]  mt-2">
          {subtitle}
        </Heading>
        <p className="text-[#272A2D] dark:text-[#E8E9EA] mt-4 mb-[9px]">
          {description}
        </p>
        <GradientButton className="rounded-[3px]">{buttonText}</GradientButton>
      </div>
    </div>
  );
};

export default SupportCard;
