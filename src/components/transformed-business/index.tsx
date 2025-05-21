import React from "react";
import Banner from "../common/Banner";
import BusinessCard from "./BusinessCard";

const businessData = [
  {
    logoUrl: "/icons/payPal.svg",
    name: "Paypal",
    description:
      "Migrated REST to GraphQL, improving performance by 300%, and modernized legacy code for better scalability and maintainability.",
  },
  {
    logoUrl: "/icons/bayer.svg",
    name: "Bayer",
    description:
      "Migrated REST to GraphQL, improving performance by 300%, and modernized legacy code for better scalability and maintainability.",
  },
  {
    logoUrl: "/icons/turing.svg",
    name: "WMTF/A",
    description:
      "Migrated REST to GraphQL, improving performance by 300%, and modernized legacy code for better scalability and maintainability.",
  },
  {
    logoUrl: "/icons/tik-tok.svg",
    name: "TikTok",
    description:
      "Migrated REST to GraphQL, improving performance by 300%, and modernized legacy code for better scalability and maintainability.",
  },
  {
    logoUrl: "/icons/cognizant.svg",
    name: "Cognizant",
    description:
      "Migrated REST to GraphQL, improving performance by 300%, and modernized legacy code for better scalability and maintainability.",
  },
];

const TransformedBusiness = () => {
  return (
    <div className="max-w-7xl sm:px-10 px-4 mx-auto mt-[120px]">
      <Banner
        heading="See How We’ve Transformed Businesses with Our AI Expertise"
        paragraph="Discover real-life success stories of startups that have overcome challenges through our innovative AI solutions, driving rapid growth and improved performance."
      />
      <div className="flex relative flex-wrap justify-center gap-14 p-6  min-h-screen ">
        {/* <div
          style={{
            background: "linear-gradient(to bottom, #2563EB, #2CA2F4, #34E5FF)",
          }}
          className="h-30 w-full z-[-10] blur-3xl md:overflow-x-visible overflow-x-auto absolute top-1/2 -translate-y-1/2 "
        ></div> */}
        {businessData.map((business, index) => (
          <BusinessCard
            key={index}
            logoUrl={business.logoUrl}
            name={business.name}
            description={business.description}
          />
        ))}
      </div>
    </div>
  );
};

export default TransformedBusiness;
