"use client";

import React from "react";
import { Heading } from "../common/Heading";
import { Paragraph } from "../common/Paragraph";
import BlockRendererClient from "../common/BlockRendererClient";
import { type BlocksContent } from "@strapi/blocks-react-renderer";

interface BlogDetailProps {
  blogDetail: boolean;
  blog: {
    title?: string;
    username?: string;
    pubDate?: string;
    content?: BlocksContent;
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
      <BlockRendererClient content={blog.content} />
    </div>
  );
};

export default DynamicBlogDetail;
