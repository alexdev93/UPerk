'use client';

import React, { useRef, useState } from "react";
import BlogBanner from "./BlogBanner";
import { Footer } from "../footer/Fotter";
import DynamicBlogDetail from "./DynamicBlogDetail";
import PreLoader from "../common/PreLoader";
import { ArticleData } from "./types";
import BlogsPreview from "./BlogsPreview";
import { getDescriptionFromContent, getImageUrlFromContent } from "@/lib/utils";

interface BlogProps {
  initialBlogs: ArticleData[];
}

const Blog = ({ initialBlogs }: BlogProps) => {
  const [blogDetail, setBlogDetail] = useState(false);
  const [blogs, setBlogs] = useState<ArticleData[]>(initialBlogs);
  const [singleBlog, setSingleBlog] = useState<ArticleData | null>(
    initialBlogs[0] || null
  );
  const blogDetailRef = useRef<HTMLDivElement | null>(null);

  const handleReadBlog = () => {
    setBlogDetail((prev) => !prev);
  };

  const handleReadMore = (blog: ArticleData) => {
    setSingleBlog(blog);
    setBlogDetail(true);

    // Remove selected blog from preview list
    if (blogs.length > 1) {
      setBlogs((prevBlogs) => prevBlogs.filter((b) => b.id !== blog.id));
    }

    // Smooth scroll to detail
    requestAnimationFrame(() => {
      blogDetailRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    });
  };

  return (
    <>
      {blogs.length === 0 ? (
        <div className="mt-50">
          <PreLoader />
        </div>
      ) : (
        <>
          {/* Blog Banner with background glow */}
          <div className="relative flex items-center justify-center mb-12">
            <div
              className="absolute top-0 left-1/2 -translate-x-1/2 w-[300px] h-[300px] rounded-full opacity-50 blur-[85px] z-[-1]"
              style={{
                background:
                  "linear-gradient(to bottom, #2563EB, #2CA2F4, #34E5FF)",
              }}
            />

            <BlogBanner
              onShowBlogDetail={handleReadBlog}
              blogDetail={blogDetail}
              blogData={singleBlog || {}}
            />
          </div>

          {/* Blog detail section */}
          {blogDetail && (
            <div ref={blogDetailRef}>
              <DynamicBlogDetail
                blogDetail={blogDetail}
                blog={singleBlog || {}}
              />
            </div>
          )}

          {/* Blog list preview */}
          <div className="p-6 flex justify-center">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-12 gap-y-12">
              {blogs.map((blog) => (
                <BlogsPreview
                  key={blog.id}
                  imgUrl={
                    getImageUrlFromContent(blog.content) ||
                    "/images/insights/fallback-blog-image.svg"
                  }
                  buttonText={`${blog.username}`}
                  description={
                    getDescriptionFromContent(blog.content) || ""
                  }
                  title={blog.title}
                  handleClick={() => handleReadMore(blog)}
                />
              ))}
            </div>
          </div>

          {/* Footer */}
          <div className="mt-[120px] mb-[30px]">
            <Footer />
          </div>
        </>
      )}
    </>
  );
};

export default Blog;
