"use client";

import React, { useEffect, useState } from "react";
import AIInsightCard from "../ai-insights-trends/AIInsightCard";
import BlogBanner from "./BlogBanner";
import { Footer } from "../footer/Fotter";
import BlogDetail from "./BlogDetail";
import Navebar from "../header/Navebar";
import axios from "axios";
import DynamicBlogDetail from "./DynamicBlogDetail";
const Blog = () => {
  const [blogDetail, setBlogDetail] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [blogs, setBlogs] = useState([]);

  console.log("see  the blog", blogs)

  useEffect(() => {
    axios
      .get(
        "https://nbttrereyf.execute-api.us-east-1.amazonaws.com/prod/api/blogs"
      )
      .then((response) => {
        setBlogs(response.data.posts); // Assuming the API returns the blog data in posts
      })
      .catch((error) => {
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
  const getFirstParagraph = (content) => {
    const parser = new DOMParser();
    const doc = parser.parseFromString(content, "text/html");
    const firstParagraph = doc.querySelector("p");
    return firstParagraph ? firstParagraph.textContent : "";
  };

  // Extract first image URL from content for AIInsightCard imgUrl
  const getFirstImage = (content) => {
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
      <div className="mb-12">
        <BlogBanner
          onShowBlogDetail={handleReadBlog}
          blogDetail={blogDetail}
          blogs={blogs}
        />{" "}
      </div>
      {!blogDetail && (
        <div className="p-6 flex justify-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-12 gap-y-12">
            {blogs.slice(0, 8).map((blog, index) => (
              <AIInsightCard
                key={blog.id}
                imgUrl={getFirstImage(blog.content)}
                buttonText={`Author ${blog.username}`}
                description={getFirstParagraph(blog.content)}
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
  );
};

export default Blog;
