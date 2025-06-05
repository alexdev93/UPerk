import React from "react";

const PreLoader = ({ noBackground }: { noBackground?: boolean }) => {
  return (
    <div
      className=" z-999999 flex  items-center justify-center"
      style={{ backgroundColor: noBackground ? "" : "bg-white" }}
    >
      <div className="h-16 w-16 animate-spin rounded-full border-4 border-solid border-blue border-t-transparent"></div>
    </div>
  );
};

export default PreLoader;
