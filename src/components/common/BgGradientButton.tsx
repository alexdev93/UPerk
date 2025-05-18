// components/GradientButton.tsx
import React from "react";

type GradientButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
};

const GradientButton: React.FC<GradientButtonProps> = ({
  children,
  onClick,
  className = "",
}) => {
  return (
    <button
      onClick={onClick}
      className={`  w-[215px] bg-gradient-to-r from-[#2563EB] via-[#2CA2F4] to-[#2CA2F4] text-white font-medium py-2 px-4  shadow-md hover:opacity-90 transition ${className}`}
    >
      {children}
    </button>
  );
};

export default GradientButton;
