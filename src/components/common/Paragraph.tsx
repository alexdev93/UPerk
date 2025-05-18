// components/typography/Paragraph.tsx
import { cn } from "@/lib/utils";
import { ReactNode } from "react";

type ParagraphProps = {
  children: ReactNode;
  className?: string;
};

export const Paragraph = ({ children, className }: ParagraphProps) => {
  return (
    <p
      className={cn(
        "text-base leading-7",
        className
      )}
    >
      {children}
    </p>
  );
};
