"use client";

import React, { useEffect, useState } from "react";
import AIInsightCard from "../ai-insights-trends/AIInsightCard";
import BlogBanner from "./BlogBanner";
import { Footer } from "../footer/Fotter";
// import BlogDetail from "./BlogDetail";
import Navebar from "../header/Navebar";
import axios from "axios";
import DynamicBlogDetail from "./DynamicBlogDetail";
import PreLoader from "../common/PreLoader";
interface ArticleData {
  content: string;
  fetchedAt: string; // ISO string, e.g., "2025-05-24T19:33:37.636Z"
  id: string; // UUID, e.g., "2c72e05a-8b59-4230-8269-4723022a3308"
  link: string; // URL to the article
  pubDate: string; // Publication date as string, e.g., "2019-01-20 07:16:34"
  title: string; // Title of the article
  username: string; // Author's username
}

const Blog = () => {
  const [blogDetail, setBlogDetail] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [blogs, setBlogs] = useState<ArticleData[]>([]);
  const [error, setError] = useState("");

  console.log("see  the blog", blogs);

  useEffect(() => {
    axios
      .get(
        "https://nbttrereyf.execute-api.us-east-1.amazonaws.com/prod/api/blogs"
      )
      .then((response) => {
        setBlogs(response.data.posts); // Assuming the API returns the blog data in posts
      })
      .catch((error) => {
        setError("error");
        console.error("Error fetching blogs:", error);
      });
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleReadBlog = () => {
    setBlogDetail(!blogDetail);
  };

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
          <div className=" text-red-800 rounded-xl p-4 " >
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
          <div className="mb-12">
            <BlogBanner
              onShowBlogDetail={handleReadBlog}
              blogDetail={blogDetail}
              blogs={blogs}
            />
          </div>
          {!blogDetail && (
            <div className="p-6 flex justify-center">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-12 gap-y-12">
                {blogs.slice(0, 8).map((blog) => (
                  <AIInsightCard
                    key={blog.id}
                    imgUrl={getFirstImage(blog.content)}
                    buttonText={`${blog.username}`}
                    description={getFirstParagraph(blog.content) || ""}
                    title={blog.title}
                  />
                ))}
              </div>
            </div>
          )}
          {blogDetail && (
            <DynamicBlogDetail blogDetail={blogDetail} blog={blogs[0] || {}} />
          )}
          <div className="mt-[120px] mb-[30px]">
            <Footer />
          </div>
        </>
      )}
    </>
  );
};

export default Blog;
