import React from "react";
import Banner from "../common/Banner";
import AIInsightCard from "./AIInsightCard";

const AIInsightsTrends = () => {
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
        "Discover AI tools that unlock value, technology for content creation, including voiceovers and AI video generation",
      title: "Best AI Tools For Content Creation In 2025",
    },
    {
      imgUrl: "/images/insights/voice-assistant.svg",
      buttonText: "AI Assistant",
      description:
        "Explore how voice assistants are enhancing customer service and engagement in businesses today",
      title: "AI Voice Assistants: Transforming Customer Experience",
    },
    {
      imgUrl: "/images/insights/voice-ai-health.svg",
      buttonText: "Health Care",
      description:
        "Investigate how AI is being integrated into healthcare systems for patient interaction and data management",
      title: "The Future Of Voice AI In Healthcare",
    },
  ];

  return (
    <>
      <div className="max-w-7xl sm:px-10 px-4 mx-auto mt-[120px]">
        <Banner
          heading="Explore the World of AI Insights and Trends"
          paragraph="Uncover inspiring success stories of startups that have leveraged our innovative AI solutions to tackle challenges, accelerate growth, and enhance performance."
        />
      </div>
      <div className="overflow-x-auto   snap-x snap-mandatory scroll-px-6 p-6">
        <div className="flex gap-6 pl-6 pr-6 justify-center">
          {cardsData.map((card, index) => (
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
    </>
  );
};

export default AIInsightsTrends;
