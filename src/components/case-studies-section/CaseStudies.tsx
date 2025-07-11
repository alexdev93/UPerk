"use client";

import React from "react";
import Image from "next/image";
import BorderGradientButton from "../common/BorderGradientButton";
import GradientButton from "../common/BgGradientButton";
import { useRouter } from "next/navigation";
import { CaseStudiesProps } from "./types";


const CaseStudiesOfSuccess = ({ caseStudiesData }: CaseStudiesProps) => {
  const router = useRouter();
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

            <BorderGradientButton
              text="Read More"
              onHandleBookAcall={() => {
                if (study.route) {
                  router.push(study.route);
                }
              }}
            />
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
