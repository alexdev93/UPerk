'use client'
import React from "react";
import Banner from "./Banner"; // Assuming Banner component is already built
import Image from "next/image";
import { Paragraph } from "../common/Paragraph";
import { Heading } from "../common/Heading";

// Card Component using Tailwind CSS
interface CardProps {
  title: string;
  subtitle: string;
  description: string;
  iconUrl: string;
}

const Card = ({ title, subtitle, description, iconUrl }: CardProps) => {
  return (
    <div className="dark:bg-[#1e1e1e] bg-white text-white rounded-xl py-6 px-[13px] w-[236px] h-[205px] shadow-lg flex-shrink-0">
      <div className="flex items-center mb-4">
        {iconUrl && (
          <Image
            src={iconUrl}
            alt="icon"
            className="mr-2 mb-3"
            width={20}
            height={20}
          />
        )}
        <div>
          <Heading
            level={4}
            className="dark:text-white text-[#272A2D] font-semibold text-sm"
          >
            {title}
          </Heading>
          <Paragraph className="text-[#272A2D] dark:text-[#A5A5A5] text-xs">
            {subtitle}
          </Paragraph>
        </div>
      </div>
      <Paragraph className="text-[#272A2D] dark:text-[#A5A5A5] text-sm mb-4">
        {description}
      </Paragraph>
      <a href="#" className="text-blue-500 text-sm font-medium hover:underline">
        Show More
      </a>
    </div>
  );
};

// Main Page Component
export default function AICapabilitiesForBusiness() {
  const cards = [
    {
      title: "Lead Generation & Sales AI",
      subtitle: "AI Chatbots & Voice Assistants",
      description:
        "Maximize your sales potential with AI-driven lead generation and automated sales processes.",
      iconUrl: "/icons/service/leade-generation.svg",
    },
    {
      title: "Customer Support AI",
      subtitle: "Intelligent Chat & Voice Agents",
      description:
        "Enhance customer satisfaction with 24/7 AI-powered support and faster response times.",
      iconUrl: "/icons/service/customer-support.svg",
    },
    {
      title: "AI Recruiting Assistant",
      subtitle: "Candidate Sourcing & Screening",
      description:
        "Streamline hiring with AI that sources, screens, and ranks candidates efficiently.",
      iconUrl: "/icons/service/Recruiting-assistant.svg",
    },
    {
      title: "Virtual Assistant",
      subtitle: "Appointment Scheduling & Reminders",
      description:
        "Boost productivity with an AI assistant that manages tasks, schedules, and more.",
      iconUrl: "/icons/service/vertual-assistant.svg",
    },
    {
      title: "Mobile App Development",
      subtitle: "AI-Driven App Development",
      description:
        "Create intuitive mobile apps with AI-powered development and seamless user experiences.",
      iconUrl: "/icons/service/mobil-app.svg",
    },
    {
      title: "Web Development",
      subtitle: "Responsive Web Solutions",
      description:
        "Build stunning, responsive websites with AI-driven design and development.",
      iconUrl: "/icons/service/web-app.svg",
    },
    {
      title: "Cloud Services & Integration",
      subtitle: "Scalable Cloud Solutions",
      description:
        "Optimize your business with secure, scalable cloud solutions and seamless integrations.",
      iconUrl: "/icons/service/cloud-solution.svg",
    },
  ];

  return (
    <div className="relative xl:h-[900px] mt-50 h-[700px]">
      {/* Inclined Background with Reduced Skew */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-400 transform -skew-y-6 origin-top-left z-0 top-0"></div>

      {/* Content Container */}
      <div className="relative z-10 pt-1 pb-24 px-8">
        {/* Banner Component */}
        <div className="text-center mb-16">
          <Banner
            heading="Our Comprehensive AI Capabilities For Business Growth"
            paragraph="Leverage our AI-driven tools to enhance efficiency, boost sales, and streamline customer support, empowering your business to thrive."
          />
        </div>

        {/* Cards Grid */}
        <div className="mx-auto flex justify-center xl:flex-wrap gap-12 overflow-x-auto scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-100 xl:overflow-x-hidden">
          {cards.map((card, index) => (
            <Card
              key={index}
              title={card.title}
              subtitle={card.subtitle}
              description={card.description}
              iconUrl={card.iconUrl}
            />
          ))}
        </div>
      </div>

      {/* Custom CSS to ensure cards maintain size */}
      <style jsx>{`
        .flex > .flex-shrink-0 {
          min-width: 236px;
        }
        @media (max-width: 1279px) {
          .flex {
            flex-wrap: nowrap;
          }
        }
      `}</style>
    </div>
  );
}
