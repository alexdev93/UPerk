import React from 'react'

const BackgroundGlow = () => {
  return (
    <>
      <div
        style={{
          background: "linear-gradient(to bottom, #2563EB, #2CA2F4, #34E5FF)",
        }}
        className="h-20 w-full z-[-10] blur-3xl absolute top-1/2 -translate-y-1/2 "
      ></div>
    </>
  );
}

export default BackgroundGlow