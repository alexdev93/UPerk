import React from 'react'
import Image from 'next/image'
const TrustedBy = () => {
  return (
    <div className="pb-4 pt-8 mb-10 flex flex-col max-w-[785px] mx-auto w-full justify-center bg-[#F8F8F8] mt-[90px] dark:bg-[#222222]">
      <h2 className="mb-[20px] text-center text-[#272A2C] dark:text-[#E8E9EA]">
        Trusted By
      </h2>
      <div className="flex items-center justify-center gap-12">
        <Image src="/icons/tik-tok.svg" alt="TikTok" width={40} height={40} />
        <Image src="/icons/payPal.svg" alt="PayPal" width={80} height={40} />
        <Image src="/icons/turing.svg" alt="Turing" width={60} height={40} />
        <Image src="/icons/bayer.svg" alt="Logo 4" width={40} height={40} />
        <Image
          src="/icons/cognizant.svg"
          alt="Cognizant"
          width={108}
          height={40}
        />
      </div>
    </div>
  );
}

export default TrustedBy