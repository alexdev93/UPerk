import React from "react";
import CaseStudiesOfSuccess from "./CaseStudies";
import Banner from "../common/Banner";

const caseStudiesData = [
  {
    route: "/case-studies/das-guzo",
    imageUrl: "/images/case-studies/iPhone-15.svg",
    title: "DASGUZO: REVOLUTIONIZING PEER-TO-PEER CAR RENTALS",
    paragraph:
      "DASGUZO aims to create a streamlined Peer-to-Peer (P2P) car rental platform, allowing users to rent vehicles from local owners easily. The app will also enable users to report car-related issues—such as mechanical problems or damage—simply and track their resolution.",
  },
  {
    route: "/case-studies/das-guzo-crm",
    imageUrl: "/images/case-studies/Macbook_Laptop.svg",
    title: "ENHANCING ORGANIZATIONAL EFFICIENCY WITH A CRM SOLUTION",
    paragraph:
      "The main objective of implementing a CRM system was to improve organizational efficiency by centralizing stakeholder data, automating workflows, and integrating communication tools. This initiative was designed to help non-profit organizations better manage donor relations, volunteer activities, and streamline communication efforts, ultimately increasing their operational focus on mission-critical tasks rather than administrative duties.",
  },
];

const CaseStudy = () => {
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
