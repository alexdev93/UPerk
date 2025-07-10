"use client";

import React, { useEffect, useRef, useState } from "react";
import BlogBanner from "./BlogBanner";
import { Footer } from "../footer/Fotter";
import Navebar from "../header/Navebar";
import DynamicBlogDetail from "./DynamicBlogDetail";
import PreLoader from "../common/PreLoader";
import { ArticleData } from "./types";
import BlogsPreview from "./BlogsPreview";
// import axios from "axios";
import { fetchFromStrapi } from "@/lib/api";
// import { fetchFromStrapi } from "@/lib/api";

// Extract first paragraph from content for AIInsightCard description
/* eslint-disable @typescript-eslint/no-explicit-any */
const getFirstParagraph = (content: any) => {
  const parser = new DOMParser();
  const doc = parser.parseFromString(content, "text/html");
  const firstParagraph = doc.querySelector("p");
  return firstParagraph
    ? firstParagraph.textContent?.substring(0, 143) + "..."
    : "";
};

// Extract first image URL from content for AIInsightCard imgUrl
/* eslint-disable @typescript-eslint/no-explicit-any */
const getFirstImage = (content: any) => {
  const parser = new DOMParser();
  const doc = parser.parseFromString(content, "text/html");
  const firstImage = doc.querySelector("img");
  return firstImage
    ? firstImage.src
    : "/images/insights/fallback-blog-image.svg"; // Fallback image if none found
};

const Blog = () => {
  const [blogDetail, setBlogDetail] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [blogs, setBlogs] = useState<ArticleData[]>([]);
  const [singleBlog, setSingleBlog] = useState<ArticleData | null>(null);
  const [error, setError] = useState("");
  const blogDetailRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await fetchFromStrapi("blogs?populate=*");
        const data = response.data || [];
        setBlogs(response.data); // Assuming the API returns the blog data in posts
        setSingleBlog(response.data[0] || null);
        console.log("strapi", data[0]);
      } catch (error) {
        setError("error");
        console.error("Error fetching blogs:", error);
      }
      // axios
      //   .get(
      //     "https://nbttrereyf.execute-api.us-east-1.amazonaws.com/prod/api/blogs"
      //   )
      //   .then((response) => {
      //     setBlogs(response.data.posts); // Assuming the API returns the blog data in posts
      //     setSingleBlog(response.data.posts[0] || null);
      //   })
      //   .catch((error) => {
      //     setError("error");
      //     console.error("Error fetching blogs:", error);
      //   });
    };

    fetchBlogs();
  }, []);

  // console.log("medium", singleBlog);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleReadBlog = () => {
    setBlogDetail(!blogDetail);
  };

  const handleReadMore = (blog: ArticleData) => {
    setSingleBlog(blog);
    setBlogDetail(true);

    // Remove the selected blog from the blogs list
    if (blogs.length > 1) {
      setBlogs((prevBlogs) => prevBlogs.filter((b) => b.id !== blog.id));
    }
    // Clear blogs if only one blog was present

    // Scroll to the blog detail section
    setTimeout(() => {
      blogDetailRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }, 0);
  };

  return (
    <>
      <Navebar toggleMenu={toggleMenu} isMenuOpen={isMenuOpen} />

      {blogs.length === 0 ? (
        <div className="mt-50">
          <PreLoader />
        </div>
      ) : error ? (
        <div
          className={`flex flex-col justify-center items-center min-h-[30vh] mx-auto mt-4 w-full
           text-primary rounded-lg py-4`}
        >
          <div className=" text-red-800 rounded-xl p-4 ">
            <h4
              className="font-bold text-center text-primary mb-0"
              style={{
                fontSize: "1rem",
              }}
            >
              Oops! Something went wrong while loading the blogs
            </h4>
          </div>
        </div>
      ) : (
        <>
          <div className="relative flex items-center justify-center mb-12">
            {/* Glowing Circular Background Behind BlogBanner */}
            <div
              className="absolute top-0 left-1/2 -translate-x-1/2 w-[300px] h-[300px] rounded-full opacity-50 blur-[85px] z-[-1]"
              style={{
                background:
                  "linear-gradient(to bottom, #2563EB, #2CA2F4, #34E5FF)",
              }}
            />

            {/* BlogBanner Content */}
            <BlogBanner
              onShowBlogDetail={handleReadBlog}
              blogDetail={blogDetail}
              blogData={singleBlog || {}}
            />
          </div>

          {blogDetail && (
            <div ref={blogDetailRef}>
              <DynamicBlogDetail
                blogDetail={blogDetail}
                blog={singleBlog || {}}
              />
            </div>
          )}

          <div className="overflow-x-auto   snap-x snap-mandatory scroll-px-6 p-6">
            <div className="flex gap-6 pl-6 pr-6 justify-center">
              {blogs.map((blog) => (
                <BlogsPreview
                  key={blog.id}
                  imgUrl={getFirstImage(blog.content)}
                  buttonText={`${blog.username}`}
                  description={getFirstParagraph(blog.content) || ""}
                  title={blog.title}
                  handleClick={() => handleReadMore(blog)}
                />
              ))}
            </div>
          </div>
          {/* {!blogDetail && (
            <div className="overflow-x-auto   snap-x snap-mandatory scroll-px-6 p-6">
              <div className="flex gap-6 pl-6 pr-6 justify-center">
                {blogs.map((blog) => (
                  <BlogsPreview
                    key={blog.id}
                    imgUrl={getFirstImage(blog.content)}
                    buttonText={`${blog.username}`}
                    description={getFirstParagraph(blog.content) || ""}
                    title={blog.title}
                    handleClick={() => handleReadMore(blog)}
                  />
                ))}
              </div>
            </div>
          )} */}
          <div className="mt-[120px] mb-[30px]">
            <Footer />
          </div>
        </>
      )}
    </>
  );
};

export default Blog;
