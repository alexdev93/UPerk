import React from "react";
import Image from "next/image";

const TrustedBy = () => {
  return (
    <div className="py-8 mb-10 flex flex-col max-w-[785px] mx-auto w-full justify-center bg-[#F8F8F8] mt-[90px] dark:bg-[#222222] ">
      <h2 className="mb-6 text-center text-[#272A2C] dark:text-[#E8E9EA] text-2xl font-semibold">
        Trusted By
      </h2>
      <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-12">
        <div className="relative w-20 h-10 sm:w-10 sm:h-10">
          <Image
            src="/icons/tik-tok.svg"
            alt="TikTok"
            layout="fill"
            objectFit="contain"
          />
        </div>
        <div className="relative w-24 h-10 sm:w-20 sm:h-10">
          <Image
            src="/icons/payPal.svg"
            alt="PayPal"
            layout="fill"
            objectFit="contain"
          />
        </div>
        <div className="relative w-20 h-10 sm:w-15 sm:h-10">
          <Image
            src="/icons/turing.svg"
            alt="Turing"
            layout="fill"
            objectFit="contain"
          />
        </div>
        <div className="relative w-20 h-10 sm:w-10 sm:h-10">
          <Image
            src="/icons/bayer.svg"
            alt="Bayer"
            layout="fill"
            objectFit="contain"
          />
        </div>
        <div className="relative w-28 h-10 sm:w-24 sm:h-10">
          <Image
            src="/icons/cognizant.svg"
            alt="Cognizant"
            layout="fill"
            objectFit="contain"
          />
        </div>
      </div>

   
    </div>
  );
};

export default TrustedBy;
