'use client'

import React, { useState } from "react";
import AIInsightCard from "../ai-insights-trends/AIInsightCard";
import BlogBanner from "./BlogBanner";
import { Footer } from "../footer/Fotter";
import BlogDetail from "./BlogDetail";
import Navebar from "../header/Navebar";
const Blog = () => {
const [blogDetail, setBlogDetail]  = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
    const cardsData = [
      {
        imgUrl: "/images/insights/ai-assistant.svg",
        buttonText: "Technology",
        description:
          "Learn about various AI assistants, including voice assistants, and their capabilities in enhancing personal and business productivity",
        title: "What Is An AI Assistant? 12 Capabilities You Need To Know",
      },
      {
        imgUrl: "/images/insights/all-tools.svg",
        buttonText: "Social Media",
        description:
          "Discover the best AI tools for content creation in 2025, including voice and audio generation",
        title: "Best AI Tools For Content Creation in 2025",
      },
      {
        imgUrl: "/images/insights/voice-assistant.svg",
        buttonText: "AI Assistant",
        description:
          "Explore how AI voice assistants are transforming customer experience, engagement, and service",
        title: "AI Voice Assistants: Transforming Customer Experience",
      },
      {
        imgUrl: "/images/insights/voice-ai-health.svg",
        buttonText: "Healthcare",
        description:
          "Investigate how voice AI is being integrated into healthcare and its impact on data management",
        title: "The Future Of Voice AI in Healthcare",
      },
      {
        imgUrl: "/images/insights/ai-in-everyday-life.svg",
        buttonText: "Everyday Life",
        description:
          "Discover AI's transformative role in everyday life and why its integration matters",
        title: "AI In Everyday Life: Transformations You Didn't Notice",
      },
      {
        imgUrl: "/images/insights/ai-ethics.svg",
        buttonText: "AI Ethics",
        description:
          "Learn about balancing innovation and responsibility in AI development and deployment",
        title: "AI Ethics: Balancing Innovation And Responsibility",
      },
      {
        imgUrl: "/images/ai/ai-in-finance.svg",
        buttonText: "Finance",
        description:
          "Understand how AI enhances decision-making and risk assessment in financial strategies",
        title: "AI In Finance: Enhancing Decision Making",
      },
      {
        imgUrl: "/images/insights/ai-powered-creativity.svg",
        buttonText: "AI-Powered Creativity",
        description:
          "Explore how AI is influencing creative fields like art and music in the digital age",
        title: "AI-Powered Creativity: Art And Music In The Digital Age",
      },
    ];
  
  
  
  const handlReadBlog = () => {
    if (blogDetail) {
      setBlogDetail(false)
    } else {
      setBlogDetail(true)
    } 

  };
  console.log("see the blog detail", blogDetail)
  
    return (
      <>
        <Navebar toggleMenu={toggleMenu} isMenuOpen={isMenuOpen} />
        <div className="mb-12">
          <BlogBanner onShowBlogDetail={handlReadBlog} blogDetail={blogDetail} />
        </div>
        {!blogDetail && (
          <div className="p-6 flex justify-center">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-12 gap-y-12">
              {cardsData.slice(0, 8).map((card, index) => (
                <AIInsightCard
                  key={index}
                  imgUrl={card.imgUrl}
                  buttonText={card.buttonText}
                  description={card.description}
                  title={card.title}
                />
              ))}
            </div>
          </div>
        )}
        {blogDetail && <BlogDetail />}{" "}
        <div className="mt-[120px] mb-[30px]">
          <Footer />
        </div>
      </>
    );
};

export default Blog;
