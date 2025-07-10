"use client";
import React from "react";
import Image from "next/image";
import { Heading } from "../common/Heading";
import { Paragraph } from "../common/Paragraph";
import GradientButton from "../common/BgGradientButton";
import { getDescriptionFromContent, getImageUrlFromContent } from "@/lib/utils";
import { BlogBannerProps } from "./types";

const BlogBanner: React.FC<BlogBannerProps> = ({
  onShowBlogDetail,
  blogDetail,
  blogData,
}) => {
  // Use the first blog or fallback to defaults
  const blog = blogData || {
    username: "Unknown",
    title: "No Blog Available",
    content: "<p>No content available.</p>",
  };

  return (
    <div className="relative text-white flex flex-col md:flex-row items-center justify-between px-6 py-8 md:px-12 md:py-0">
      {/* Left Section - Text Content */}
      <div className="text-[#E8E9EA] w-full md:w-1/2 space-y-4 flex flex-col justify-center md:py-12">
        <div className="w-[178px] bg-black rounded-[60px] text-center">
          <span className="text-blue-400 text-sm font-medium uppercase tracking-wider">
            Author: {blog.username}
          </span>
        </div>
        <Heading
          level={1}
          className="dark:text-[#E8E9EA] text-4xl text-[#272A2D] md:text-5xl font-extrabold leading-tight"
        >
          {blog.title?.split(" ").map((word: string, index: number) => (
            <React.Fragment key={index}>
              {word}
              {index < blog.title.split(" ").length - 1 && " "}
              {index % 3 === 2 && <br />}
            </React.Fragment>
          ))}
        </Heading>
        {!blogDetail && (
          <Paragraph className="text-lg md:text-xl max-w-md dark:text-[#A5A5A5] text-[#A5A5A5]">
            {getDescriptionFromContent(blog.content)}
          </Paragraph>
        )}
        {!blogDetail ? (
          <GradientButton
            className="rounded-[22px] cursor-pointer"
            onClick={onShowBlogDetail}
          >
            Read Now
          </GradientButton>
        ) : (
          <p
            className="dark:text-gray-300 cursor-pointer flex items-center text-[#272A2D]"
            onClick={onShowBlogDetail}
          >
            ← Go Back To Blogs
          </p>
        )}
      </div>
      <div className="w-full md:w-1/2 flex justify-center md:justify-end h-full md:mt-0 mt-8">
        <div className="relative w-full h-full">
          {getImageUrlFromContent(blog.content) ? (
            <Image
              src={getImageUrlFromContent(blog.content)!}
              alt={blog.title}
              width={542}
              height={363}
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="w-full h-full bg-gray-100 flex items-center justify-center">
              <span className="text-gray-400 text-sm">No image available</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default BlogBanner;
