import React from "react";
import DescriptionCard from "./DescriptionCard";
import ImageCard from "./ImageCard";

const DevelopmentPipeline = () => {
  const pipelineSteps = [
    {
      title: "Discovery & Project Planning",
      description:
        "Our expert AI developers collaborate closely with your team to deeply understand your business objectives, technical requirements, and success criteria. We craft a detailed project roadmap, ensuring alignment and setting the stage for a successful AI implementation.",
      imageUrl: "/images/cost-placeholder.jpg",
    },
    {
      title: "Define Your KPI’s & Success Metrics",
      description:
        "We work with you to establish clear, measurable Key Performance Indicators (KPIs) and success metrics tailored to your AI project. This ensures that every development phase aligns with your business goals and delivers tangible, quantifiable results.",
      imageUrl: "/images/cost-placeholder.jpg",
    },
    {
      title: "AI Agent Development",
      description:
        "Our team builds and trains your AI agent using cutting-edge algorithms, ensuring it meets your specific use case requirements. We focus on creating a robust, scalable solution that integrates seamlessly into your existing systems.",
      imageUrl: "/images/cost-placeholder.jpg",
    },
    {
      title: "Enterprise Deployment",
      description:
        "We deploy your AI agent into your enterprise environment, ensuring smooth integration with your infrastructure. Our team handles all aspects of deployment, from testing to final rollout, minimizing disruptions and ensuring operational continuity.",
      imageUrl: "/images/cost-placeholder.jpg",
    },
    {
      title: "Performance Optimization & Maintenance",
      description:
        "Post-deployment, we continuously monitor and optimize your AI agent’s performance to ensure it meets evolving business needs. Our maintenance services include regular updates, performance tuning, and support to keep your AI solution running at peak efficiency.",
      imageUrl: "/images/cost-placeholder.jpg",
    },
  ];

  return (
    <div className="bg-black min-h-screen py-12 px-4">
      <div className="max-w-4xl mx-auto flex flex-col gap-8">
        {pipelineSteps.map((step, index) => (
          <div
            key={index}
            className={`flex flex-col ${
              index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
            } gap-8 items-center`}
          >
            <div className="w-full md:w-1/2">
              <DescriptionCard
                title={step.title}
                description={step.description}
              />
            </div>
            <div className="w-full md:w-1/2">
              <ImageCard
                title={step.title.split(" ")[0]}
                imageUrl={step.imageUrl}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DevelopmentPipeline;
