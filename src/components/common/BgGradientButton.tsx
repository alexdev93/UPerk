// components/GradientButton.tsx
import React from "react";

type GradientButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  width?: string;
};

const GradientButton: React.FC<GradientButtonProps> = ({
  children,
  onClick,
  className = "",
  width,
}) => {
  return (
    <button
      onClick={onClick}
      className={`bg-gradient-to-r from-[#2563EB] cursor-pointer via-[#2CA2F4] to-[#2CA2F4] text-[#EAEAEA] font-medium py-2 px-4 shadow-md hover:opacity-90 transition ${
        width ? `w-[${width}]` : "w-[215px]"
      } ${className}`}
    >
      {children}
    </button>
  );
};

export default GradientButton;
