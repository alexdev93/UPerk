import React from "react";

const DescriptionCard = ({ title, description }) => {
  return (
    <div className="bg-gray-900 text-white p-6 md:p-8 rounded-lg flex flex-col gap-4 w-full max-w-2xl">
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-xl font-bold">
          {title.charAt(0)}
        </div>
        <h2 className="text-2xl md:text-3xl font-bold uppercase">{title}</h2>
      </div>
      <p className="text-gray-300 text-sm md:text-base">{description}</p>
    </div>
  );
};

export default DescriptionCard;






