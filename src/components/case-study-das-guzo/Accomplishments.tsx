import Image from "next/image";
import React from "react";
const cardData = [
  {
    title: "Centralized Data Management",
    description:
      "A single, unified database for storing and managing all stakeholder information (donors, volunteers, partners)",
  },
  {
    title: "Automated Workflows",
    description:
      "Workflow automation for follow-ups, event reminders, and personalised communications.",
  },
  {
    title: "Enhanced Event Management",
    description:
      " Tools for tracking donations and volunteer activities with detailed reporting.",
  },
];
const Accomplishments = () => {
  return (
    <section className="py-20  ">
      <div className="max-w-7xl sm:px-10 px-4 mx-auto ">
        <div className="flex flex-col justify-center items-center">
          <Image
            src={"/images/das-guzo/dasguzo.svg"}
            width={300}
            height={100}
            alt="das guzo"
            className="pb-4"
          />
          <div className="max-w-[583px] w-full text-center py-6 mx-auto">
            <h2 className="  text-3xl sm:text-4xl font-semibold mb-4 text-[#272A2D] dark:text-[#E8E9EA]">
              Accomplishments
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 ">
          {cardData.map((card, index) => (
            <div
              key={index}
              className="rounded-lg p-6 bg-[#F2F3F4] dark:bg-[#222222] shadow-md"
            >
              <h3 className="text-xl font-semibold mb-2 text-[#272A2D] dark:text-[#FFFFFF]">
                {card.title}
              </h3>
              <p className="text-sm leading-relaxed text-[#272A2D] dark:text-[#A5A5A5]">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Accomplishments;
