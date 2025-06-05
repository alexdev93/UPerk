"use client";
import DescriptionCard from "./DescriptionCard";
import ImageCard from "./ImageCard";
import GradientButton from "../common/BgGradientButton";
import Banner from "../common/Banner";
import { useState } from "react";
import GetAQuote from "../get-a-quote/GetAQuote";
const DevelopmentPipeline = () => {
  // const line = (
  //   <svg
  //     width="379"
  //     height="2"
  //     viewBox="0 0 379 2"
  //     fill="none"
  //     xmlns="http://www.w3.org/2000/svg"
  //   >
  //     <path
  //       opacity="0.28"
  //       d="M1 1L378 0.999967"
  //       stroke="url(#paint0_linear_87_1110)"
  //       stroke-width="2"
  //       stroke-linecap="round"
  //     />
  //     <defs>
  //       <linearGradient
  //         id="paint0_linear_87_1110"
  //         x1="1"
  //         y1="1.5"
  //         x2="378"
  //         y2="1.49997"
  //         gradientUnits="userSpaceOnUse"
  //       >
  //         <stop stop-color="#2563EB" />
  //         <stop offset="0.25" stop-color="#1FBAFF" stop-opacity="0" />
  //         <stop offset="0.5" stop-color="#2FBAF8" />
  //         <stop offset="0.75" stop-color="#1EE2FF" stop-opacity="0" />
  //         <stop offset="1" stop-color="#34E5FF" />
  //       </linearGradient>
  //     </defs>
  //   </svg>
  // );
  const pipelineData = [
    {
      type: "description",
      title: "Discovery & Project Planning",
      description:
        "An in-depth assessment of your needs and goals. We create a detailed specification for your AI project to guide development.",
    },
    {
      type: "image",
      title: "Plan",
      imageUrl: "/images/pipline/plan.png",
    },
    {
      type: "description",
      title: "Define Your KPIs & Success Metrics",
      description:
        "We establish quantifiable goals and metrics to measure success. This creates a framework for evaluating the project's performance.",
    },
    {
      type: "image",
      title: "Define",
      imageUrl: "/images/pipline/define.png",
    },
    {
      type: "description",
      title: "AI Agent Development",
      description:
        "This is the creation of the agent, including model selection, prompt engineering, and fine-tuning. We build the core that makes the AI work.",
    },
    {
      type: "image",
      title: "Develop",
      imageUrl: "/images/pipline/develop.png",
    },
    {
      type: "description",
      title: "Enterprise Deployment",
      description:
        "We integrate your AI solution with existing systems and workflows. This ensures a seamless transition to your digital ecosystem.",
    },
    {
      type: "image",
      title: "Deploy",
      imageUrl: "/images/pipline/deploy.png",
    },
    {
      type: "description",
      title: "Performance Optimization & Maintenance",
      description:
        "Continuous monitoring and fine-tuning of your AI solution to ensure optimal performance and adaptation to changing needs.",
    },
    {
      type: "image",
      title: "Optimize & Maintain",
      imageUrl: "/images/pipline/optimize-maintain.png",
    },
  ];

  const [showForm, setShowForm] = useState(false);

  const handleQuoteOpen = () => {
    setShowForm(true);
  };

  const handleQuoteClose = () => {
    setShowForm(false);
  };
  return (
    <>
      <div className="max-w-7xl sm:px-10 px-4 mx-auto mt-[120px]">
        <Banner
          heading="A Step-by-Step Approach of Enterprise AI Agent Development Pipeline"
          paragraph="Our systematic approach to building production-ready AI agents with enterprise-grade reliability and performance"
        />
        <div className="max-w-7xl mx-auto">
          {/* Desktop version - zigzag layout */}
          <div className="hidden md:flex md:flex-col">
            {pipelineData.map((item, index) => {
              if (index % 2 === 0 && index < pipelineData.length) {
                const descriptionItem = item;
                const imageItem = pipelineData[index + 1];
                const stepNumber = Math.floor(index / 2) + 1;

                // Even rows (description on left, image on right)
                if ((index / 2) % 2 === 0) {
                  return (
                    <div key={index} className="relative">
                      <div className="flex justify-between items-center mb-8 gap-12">
                        <div className="pr-12 z-[999] pb-12">
                          <DescriptionCard
                            title={descriptionItem.title}
                            description={descriptionItem.description}
                          />
                        </div>
                        <div className="pl-12 z-[9999] pb-12">
                          <ImageCard
                            title={imageItem.title}
                            imageUrl={imageItem.imageUrl}
                          />
                        </div>
                      </div>
                      {/* Connector lines with number */}
                      {index < pipelineData.length - 1 && (
                        <>
                          {/* Horizontal line connecting left card to right card with number */}
                          <div className="absolute top-1/3 left-[10%] sm:left-[20%] w-[400px] md:w-[550px] h-0.5 bg-gradient-to-r from-[#2563EB] via-[#1FBAFF00] via-[#2FBAF8] via-[#1EE2FF00] to-[#34E5FF]"></div>{" "}
                          {/* Number circle on the horizontal line */}
                          <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold">
                            {stepNumber}
                          </div>
                          {/* Vertical line from right card to next row (except for last pair) */}
                          {index < pipelineData.length - 2 && (
                            <div className="absolute top-[150px] right-[19.3%] h-[250px] w-0.5 bg-blue-500"></div>
                          )}
                        </>
                      )}
                    </div>
                  );
                }
                // Odd rows (image on left, description on right)
                else {
                  return (
                    <div key={index} className="relative">
                      <div className="flex justify-between items-center mb-8 gap-12">
                        <div className="pr-12 z-[9999] pb-12">
                          <ImageCard
                            title={imageItem.title}
                            imageUrl={imageItem.imageUrl}
                          />
                        </div>
                        <div className="pl-12 z-[9999] pb-12">
                          <DescriptionCard
                            title={descriptionItem.title}
                            description={descriptionItem.description}
                          />
                        </div>
                      </div>
                      {/* Connector lines with number */}
                      {index < pipelineData.length - 1 && (
                        <>
                          {/* Horizontal line connecting left card to right card with number */}
                          <div className="absolute top-1/3 left-[10%] sm:left-[20%] w-[400px] md:w-[550px] h-0.5 bg-blue-500"></div>

                          {/* Number circle on the horizontal line */}
                          <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-gradient-to-r from-blue-600 via-blue-400 to-blue-600 flex items-center justify-center text-white font-bold">
                            {stepNumber}
                          </div>

                          {/* Vertical line from right card to next row (except for last pair) */}
                          {index < pipelineData.length - 2 && (
                            <div className="absolute top-[150px] left-[19%] h-[250px] w-0.5 bg-blue-500"></div>
                          )}
                        </>
                      )}
                    </div>
                  );
                }
              }
              return null;
            })}
          </div>

          {/* Mobile version - vertical layout */}
          <div className="md:hidden flex flex-col items-center">
            {pipelineData.map((item, index) => (
              <div key={index} className="relative w-full mb-8">
                {item.type === "description" ? (
                  <div className="flex justify-center">
                    <DescriptionCard
                      title={item.title}
                      description={item.description}
                    />
                  </div>
                ) : (
                  <div className="flex justify-center">
                    <ImageCard title={item.title} imageUrl={item.imageUrl} />
                  </div>
                )}

                {/* Connector line with number (except for last item) */}
                {index < pipelineData.length - 1 && (
                  <div className="absolute left-1/2 transform -translate-x-1/2 top-full h-16 flex flex-col items-center">
                    <div className="w-0.5 h-full bg-blue-500"></div>
                    {/* {index % 2 === 0 && (
                    <div className="absolute top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold">
                      {Math.floor(index / 2) + 1}
                    </div>
                  )} */}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="flex justify-center mt-12" onClick={handleQuoteOpen}>
            {/* <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-md transition-colors"></button> */}

            <GradientButton width="338px">
              {" "}
              Start Your Development Process
            </GradientButton>
          </div>
        </div>
      </div>
      {/* Get a Quote Form */}
      {showForm && (
        <div>
          <GetAQuote handleQuoteClose={handleQuoteClose} />
        </div>
      )}
    </>
  );
};

export default DevelopmentPipeline;
