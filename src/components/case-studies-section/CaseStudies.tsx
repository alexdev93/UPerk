"use client";

import React from "react";
import Image from "next/image";
import BorderGradientButton from "../common/BorderGradientButton";
import GradientButton from "../common/BgGradientButton";
const caseStudiesData = [
  {
    imageUrl: "/images/case-studies/iPhone-15.svg",
    title: "DASGUZO: REVOLUTIONIZING PEER-TO-PEER CAR RENTALS",
    paragraph:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nec eros ut justo consequat malesuada. Integer nec eros ac urna feugiat dapibus nec sit amet lorem. Vivamus nec justo id sapien auctor scelerisque. Sed non libero auctor, tempus urna nec, efficitur nulla.",
  },
  {
    imageUrl: "/images/case-studies/Macbook_Laptop.svg",
    title: "ENHANCING ORGANIZATIONAL EFFICIENCY WITH A CRM SOLUTION",
    paragraph:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nec eros ut justo consequat malesuada. Integer nec eros ac urna feugiat dapibus nec sit amet lorem. Vivamus nec justo id sapien auctor scelerisque.",
  },
];

const CaseStudiesOfSuccess = () => {
  return (
    <div className=" text-white py-16 px-8">
      {caseStudiesData.map((study, index) => (
        <div
          key={index}
          className={`max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12 ${
            index > 0 ? "mt-16" : ""
          }`}
        >
          {/* Image Section */}
          <div
            className={`w-full lg:w-1/2 ${
              index % 2 === 0 ? "order-1" : "order-2"
            }`}
          >
            {index % 2 === 0 ? (
              <div className=" bg-gradient-to-r from-[#00173C] via-[#002D74] to-[#2367D3] ">
                <Image
                  src={study.imageUrl}
                  alt={index === 0 ? "Phone" : "Laptop"}
                  width={index === 0 ? 300 : 600}
                  height={index === 0 ? 600 : 400}
                />
              </div>
            ) : (
              <div className="bg-gradient-to-r from-[#322FD6] via-[#4543D8] to-[#5A5BEF]">
                <Image
                  src={study.imageUrl}
                  alt={index === 0 ? "Phone" : "Laptop"}
                  width={index === 0 ? 300 : 600}
                  height={index === 0 ? 600 : 400}
                />
              </div>
            )}
          </div>

          {/* Text Section */}
          <div
            className={`w-full lg:w-1/2 space-y-6 ${
              index % 2 === 0 ? "order-2" : "order-1"
            }`}
          >
            <h2
              className={`  dark:text-[#FFFFFF] text-[#272A2D]  font-bold ${
                index === 0 ? "text-3xl" : "text-2xl"
              }`}
            >
              {study.title}
            </h2>
            <p className="dark:text-[#A1A1A1] text-[#272A2D]">
              {study.paragraph}
            </p>

            <BorderGradientButton text="Read More" />
          </div>
        </div>
      ))}

      <div className="flex justify-center mt-30">
        <GradientButton className="rounded-[3px]">
          Show Case Studies
        </GradientButton>
      </div>
    </div>
  );
};

export default CaseStudiesOfSuccess;
