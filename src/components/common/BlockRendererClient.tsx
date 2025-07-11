"use client";
import Image from "next/image";
import {
  BlocksRenderer,
  type BlocksContent,
} from "@strapi/blocks-react-renderer";

export default function BlockRendererClient({
  content,
}: {
  readonly content: BlocksContent;
}) {
  if (!content) return null;

  return (
    <BlocksRenderer
      content={content}
      blocks={{
        image: ({ image }) => {
          return (
            <Image
              src={
                image.url ||
                "https://s7d2.scene7.com/is/image/TWCNews/n13_attractions_insider_universal_globe?wid=1250&hei=703&$wide-bg$"
              }
              width={image.width || 600}
              height={image.height || 400}
              alt={image.alternativeText || "Blog Image"}
              className="w-full h-auto object-cover"
            />
          );
        },
        paragraph: ({ children }) => <p>{children}</p>,
      }}
    />
  );
}
