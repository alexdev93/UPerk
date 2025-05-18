// components/typography/Heading.tsx
import { cn } from "@/lib/utils";
import { ReactNode } from "react";

type HeadingProps = {
  level?: 1 | 2 | 3 | 4 | 5 | 6;
  children: ReactNode;
  className?: string;
};

export const Heading = ({ level = 1, children, className }: HeadingProps) => {
  // Map level to HTML heading tags
  const Tag = {
    1: "h1",
    2: "h2",
    3: "h3",
    4: "h4",
    5: "h5",
    6: "h6",
  }[level] as keyof JSX.IntrinsicElements;

  const baseStyles = {
    1: "text-5xl sm:text-4xl md:text-5xl font-bold tracking-tight dark:text-[#EAEAEA] text-black",
    2: "text-4xl font-bold",
    3: "text-2xl",
    4: "text-xl font-medium",
    5: "text-lg font-medium",
    6: "text-base font-medium",
  };

  return <Tag className={cn(baseStyles[level], className)}>{children}</Tag>;
};
