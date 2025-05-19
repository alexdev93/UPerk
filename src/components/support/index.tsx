import React from "react";
import Banner from "../common/Banner";
import SupportCard from "./SupportCard";

const Support = () => {
  const cardData = [
    {
      title: "Excessive Costs & Limitations",
      subtitle: "Excessive Support Costs & Scaling Limitations",
      description:
        "Slash support costs with AI, handling 80% of queries. Omni-channel support across WhatsApp, Instagram, Messenger, and your website.",
      buttonText: "Lower Support Costs",
      imageUrl: "/images/placeholder.webp",
    },
    {
      title: "Excessive Costs & Limitations",
      subtitle: "Excessive Support Costs & Scaling Limitations",
      description:
        "Slash support costs with AI, handling 80% of queries. Omni-channel support across WhatsApp, Instagram, Messenger, and your website.",
      buttonText: "Lower Support Costs",
      imageUrl: "/images/placeholder.webp",
    },
    {
      title: "Excessive Costs & Limitations",
      subtitle: "Excessive Support Costs & Scaling Limitations",
      description:
        "Slash support costs with AI, handling 80% of queries. Omni-channel support across WhatsApp, Instagram, Messenger, and your website.",
      buttonText: "Lower Support Costs",
      imageUrl: "/images/placeholder.webp",
    },
  ];

  return (
    <div className="max-w-[1280px] mx-auto px-4 ">
      <Banner
        heading="Solving Sales & Support Bottlenecks Faced By Many Startups"
        paragraph="Eliminate Leaks, Slow Responses, And Stagnating AI That Torpedoes Your Selling and Support—so You Can Focus on Growth"
      />
      <div className="flex gap-6 overflow-x-auto justify-center pb-4 snap-x snap-mandatory no-shrink">
        {cardData.map((card, index) => (
          <div key={index} className="flex-none w-[320px] snap-start">
            <SupportCard
              title={card.title}
              subtitle={card.subtitle}
              description={card.description}
              buttonText={card.buttonText}
              imageUrl={card.imageUrl}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Support;
