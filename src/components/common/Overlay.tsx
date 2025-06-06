import React, { ReactNode } from "react";

type OverlayProps = {
  children: ReactNode;
};

const Overlay = ({ children }: OverlayProps) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-99999">
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-black/50 dark:bg-black/70" />

      {/* Content Container */}
      <div className="relative z-99999 max-h-[90vh] ">{children}</div>
    </div>
  );
};

export default Overlay;
