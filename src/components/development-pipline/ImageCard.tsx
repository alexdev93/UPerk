
import React from "react";
import Image from "next/image";

const ImageCard = ({ title, imageUrl }) => {
  return (
    <div className="relative w-full max-w-2xl h-48 md:h-64 rounded-lg overflow-hidden">
      <Image
        src={imageUrl}
        alt={title}
        layout="fill"
        objectFit="cover"
        className="opacity-50"
      />
      <div className="absolute inset-0 flex items-center justify-center">
        <h2 className="text-white text-3xl md:text-4xl font-bold uppercase text-center px-4">
          {title}
        </h2>
      </div>
    </div>
  );
};

export default ImageCard;