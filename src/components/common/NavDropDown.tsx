// components/common/NavDropdown.tsx
"use client";
import React from "react";
import Link from "next/link";

interface DropdownLink {
  label: string;
  href: string;
}

interface NavDropdownProps {
  label: string;
  parentHref: string;
  childrenLinks: DropdownLink[];
  show: boolean;
  toggle: () => void;
  isMobile?: boolean;
}

const NavDropdown: React.FC<NavDropdownProps> = ({
  label,
  parentHref,
  childrenLinks,
  show,
  toggle,
  isMobile = false,
}) => {
  return (
    <div
      className={`relative ${!isMobile ? "group" : ""}`}
      onMouseEnter={!isMobile ? toggle : undefined}
      onMouseLeave={!isMobile ? toggle : undefined}
    >
      {isMobile ? (
        <button
          onClick={toggle}
          className="text-base hover:text-blue-400 transition w-full text-left"
        >
          {label} ▾
        </button>
      ) : (
        <Link
          href={parentHref}
          className="text-base md:text-lg hover:text-blue-400 transition cursor-pointer"
        >
          {label}
        </Link>
      )}

      {show && (
        <div
          className={
            isMobile
              ? "flex flex-col pl-4 mt-2"
              : "absolute top-8 left-0 z-20 min-w-[220px] px-4 py-2 rounded-xl shadow-lg border border-white/20 bg-white/10 backdrop-blur-md text-white"
          }
        >
          {childrenLinks.map(({ label, href }) => (
            <Link
              key={href}
              href={href}
              className={
                isMobile
                  ? "text-sm py-1 hover:text-blue-300"
                  : "block py-2 px-2 rounded-md hover:bg-white/20 transition duration-200"
              }
            >
              {label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default NavDropdown;
