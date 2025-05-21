
import React from "react";
import Image from "next/image";

const ImageCard = ({ title, imageUrl}: {title:string | undefined, imageUrl:string | undefined}) => {
  return (
    <div className=" dark:bg-[#222222] relative max-w-[500px] w-full rounded-lg overflow-hidden h-[203px]">
   { imageUrl ?  <Image
        src={imageUrl}
        alt={title || "image"}
        width={500}
        height={203}
        className=" dark:opacity-40 "
      /> : ""}

      <div className="absolute inset-0 flex items-center justify-center">
        <h2 className="text-[#E8E9EA] text-3xl md:text-4xl font-bold uppercase text-center px-4">
          {title}
        </h2>
      </div>
    </div>
  );
};

export default ImageCard;