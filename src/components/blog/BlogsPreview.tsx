// BlogsPreview.tsx
import React from "react";
import Image from "next/image";
import { Heading } from "../common/Heading";
import { Paragraph } from "../common/Paragraph";
import { getImageUrlFromContent, getDescriptionFromContent } from "@/lib/utils"; // adjust path
import { ArticleData } from "./types";

interface BlogProps {
  blogs: ArticleData[];
  handleReadMore: (arg1: ArticleData) => void;
}
const BlogsPreview: React.FC<BlogProps> = ({ blogs, handleReadMore }) => {
  return (
    <div className="p-6 flex justify-center">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-12 gap-y-12">
        {blogs.map((blog: ArticleData) => (
          <div
            key={blog?.id}
            className="max-w-[273px] flex-shrink-0 text-white rounded-lg shadow-lg flex flex-col"
          >
            <Image
              src={
                getImageUrlFromContent(blog?.content) ||
                "/images/insights/fallback-blog-image.svg"
              }
              alt="Card Image"
              className="w-full h-48 object-cover"
              width={400}
              height={200}
            />
            <div className="p-4 text-center flex flex-col flex-grow justify-between">
              <div>
                <button className="w-[95px] inline-block bg-[#2664EC1A] dark:bg-black text-xs text-[#2563EB] font-semibold px-2 py-1 rounded-[10.5px] mb-2">
                  {blog?.username}
                </button>
                <Heading
                  level={4}
                  className="text-left text-[#2A2A33] dark:text-[white] mb-2"
                >
                  {blog?.title}
                </Heading>
                <Paragraph className="text-left text-[12px] text-[#2A2A33] dark:text-[#A5A5A5] mb-4">
                  {getDescriptionFromContent(blog?.content) || ""}
                </Paragraph>
              </div>
              <div className="text-left ">
                <button
                  onClick={() => handleReadMore(blog)}
                  className="text-blue-400 cursor-pointer font-semibold hover:underline"
                >
                  Read Now →
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogsPreview;
