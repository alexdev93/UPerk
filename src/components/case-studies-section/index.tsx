import React, { useEffect } from "react";
import CaseStudiesOfSuccess from "./CaseStudies";
import Banner from "../common/Banner";

const caseStudiesData = [
  {
    route: "/case-studies/das-guzo",
    imageUrl: "/images/case-studies/iPhone-15.svg",
    title: "DASGUZO: REVOLUTIONIZING PEER-TO-PEER CAR RENTALS",
    paragraph:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nec eros ut justo consequat malesuada. Integer nec eros ac urna feugiat dapibus nec sit amet lorem. Vivamus nec justo id sapien auctor scelerisque. Sed non libero auctor, tempus urna nec, efficitur nulla.",
  },
  {
    route: "/case-studies/das-guzo-crm",
    imageUrl: "/images/case-studies/Macbook_Laptop.svg",
    title: "ENHANCING ORGANIZATIONAL EFFICIENCY WITH A CRM SOLUTION",
    paragraph:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nec eros ut justo consequat malesuada. Integer nec eros ac urna feugiat dapibus nec sit amet lorem. Vivamus nec justo id sapien auctor scelerisque.",
  },
];

const CaseStudy = () => {
  useEffect(() => {
    // This effect can be used to fetch or manipulate data if needed
    // For now, we are just logging the case studies data
    console.log("Case Studies Data:", caseStudiesData);
  }, []);

  return (
    <div className="mt-[120px] max-w-7xl sm:px-10 px-4 mx-auto">
      <Banner
        heading="Case Studies of Success: Real-Life Examples of Impactful Change"
        paragraph="Explore our collection of case studies showcasing real-life examples of impactful change. Discover how innovative strategies have transformed businesses and driven success across various industries."
      />
      <CaseStudiesOfSuccess caseStudiesData={caseStudiesData} />
    </div>
  );
};

export default CaseStudy;
