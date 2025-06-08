import React from 'react'
import Image from 'next/image'
const Banner = () => {
  return (
      <div className="bg-gradient-to-r from-[#2563EB] to-[#2CA2F4] flex justify-center">
          
          <Image
              src={"/images/case-studies/iPhone-15.svg"}
              width={400}
              height={400}
              alt='banner'
          />
    </div>
  );
}

export default Banner