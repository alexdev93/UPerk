import React from "react";
import Banner from "../common/Banner";
import SupportCard from "./SupportCard";
import BackgroundGlow from "../common/BackgroundGlow";

const Support = () => {
  const cardData = [
    {
      title: "Excessive Costs & Limitations",
      subtitle: "Excessive Support Costs & Scaling Limitations",
      description:
        "Slash support costs 40%+ with AI handling 80% of queries instantly—no large teams. 24/7 service, no overtime, with omnichannel AI support across WhatsApp, Instagram, Messenger, and your website.",

      buttonText: "Lower Support Costs",
      imageUrl: "/images/sales-support/image-1.svg",
    },
    {
      title: "Slow Lead Conversion",
      subtitle: "Slow Lead Qualification & Sales Funnel Drop-Offs",
      description:
        "AI engages leads instantly—qualifying via chat/voice, scheduling calls, and syncing with your CRM (HubSpot/Salesforce/Zoho) to eliminate leaks and accelerate sales.",
      buttonText: "Lower Support Costs",
      imageUrl: "/images/sales-support/image-2.svg",
    },
    {
      title: "Inefficient Appointments",
      subtitle: "Inefficiencies in Appointment Scheduling & Service Bookings",
      description:
        "AI books, reschedules, and confirms appointments 24/7—via chat, voice, or calendar sync—plus cuts no-shows with automated reminders.",
      buttonText: "Lower Support Costs",
      imageUrl: "/images/sales-support/image-3.png",
    },
  ];

  return (
    <div className="max-w-7xl sm:px-10 px-4 mx-auto mt-[120px]">
      <Banner
        heading="Solving Sales & Support Bottlenecks Faced By Many Startups"
        paragraph="Eliminate Leaks, Slow Responses, And Stagnating AI That Torpedoes Your Selling and Support—so You Can Focus on Growth"
      />
      <div className=" relative flex gap-20 md:overflow-x-visible overflow-x-auto justify-start pb-4 snap-x snap-mandatory no-shrink scroll-smooth pl-4 pr-4 scrollbar-thin">
       <BackgroundGlow />
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
