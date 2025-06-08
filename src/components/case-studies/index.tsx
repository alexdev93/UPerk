"use client";
import React, { useState } from "react";
import Navebar from "../header/Navebar";
import CaseStudyBanner from "./CaseStudyBanner";
import ImplementationApproach from "./ImplementationApproach";
import PainPointsDiscovered from "./PainPointsDiscovered";
import RequirementForSuccess from "./RequirementForSuccess";
import TechStackSection from "./TechStackSection";
import Banner from "./Banner";
import Accomplishments from "./Accomplishments";
import { Footer } from "../footer/Fotter";
const CaseStudies = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <Navebar toggleMenu={toggleMenu} isMenuOpen={isMenuOpen} />
      <div className="max-w-7xl sm:px-10 px-4 mx-auto mt-[50px]">
        <CaseStudyBanner />
        <ImplementationApproach />
      </div>
          <PainPointsDiscovered />
          <RequirementForSuccess />
          <TechStackSection />
          <Banner />
      <Accomplishments />
      <Footer  />
    </>
  );
};

export default CaseStudies;
