// lib/utils.ts
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const getDescriptionFromContent = (content: any): string | null => {
  if (!Array.isArray(content)) return "";

  const firstParagraph = content.find(
    (block) => block?.type === "paragraph" && Array.isArray(block.children)
  );

  const firstText =
    firstParagraph?.children
      ?.find((child) => typeof child?.text === "string")
      ?.text.slice(0, 143) + "...";

  return firstText || "";
};

export function getImageUrlFromContent(content: any): string | null {
  if (!Array.isArray(content)) return null;

  for (const block of content) {
    if (block.type === "image" && block.image?.url) {
      return block.image.url;
    }
  }

  return null; // no image found
}
