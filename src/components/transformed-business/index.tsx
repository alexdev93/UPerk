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
    <>
      <Banner
        heading="See How We’ve Transformed Businesses with Our AI Expertise"
        paragraph="Discover real-life success stories of startups that have overcome challenges through our innovative AI solutions, driving rapid growth and improved performance."
      />
      <div className="flex justify-center mx-auto mt-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-18">
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
    </>
  );
};

export default TransformedBusiness;
