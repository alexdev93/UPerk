"use client";

import React from "react";
import { Heading } from "../common/Heading";
import { Paragraph } from "../common/Paragraph";

interface BlogDetailProps {
  blogDetail: boolean;
  blog: {
    title?: string;
    username?: string;
    pubDate?: string;
    content?: string;
  };
}

const DynamicBlogDetail: React.FC<BlogDetailProps> = ({ blogDetail, blog }) => {
  if (!blogDetail || !blog.content) {
    return null;
  }

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <Heading
        level={1}
        className="dark:text-[#E8E9EA] text-4xl text-[#272A2D] md:text-5xl font-extrabold leading-tight mb-4"
      >
        {blog.title || "No Title Available"}
      </Heading>
      <Paragraph className="text-lg text-[#A5A5A5] mb-8">
        By Author: {blog.username || "Unknown"} |{" "}
        {blog.pubDate
          ? new Date(blog.pubDate).toLocaleDateString()
          : "No Date Available"}
      </Paragraph>
      <div
        className="prose dark:prose-invert max-w-none
    prose-p:mb-6 prose-p:text-[#272A2D] dark:prose-p:text-[#E8E9EA]
    prose-h3:text-xl prose-h3:font-bold prose-h3:mb-4 prose-h3:text-[#272A2D] dark:prose-h3:text-[#E8E9EA]
    prose-img:rounded-lg prose-img:max-w-full prose-img:mb-6
    prose-blockquote:border-l-4 prose-blockquote:pl-4 prose-blockquote:italic prose-blockquote:text-gray-600 dark:prose-blockquote:text-gray-300
    prose-a:text-blue-600 hover:prose-a:underline"
        dangerouslySetInnerHTML={{ __html: blog.content }}
      />
    </div>
  );
};

export default DynamicBlogDetail;
