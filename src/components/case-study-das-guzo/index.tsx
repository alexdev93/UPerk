import React from "react";
import CaseStudyBanner from "./CaseStudyBanner";
import ImplementationApproach from "./ImplementationApproach";
import PainPointsDiscovered from "./PainPointsDiscovered";
import RequirementForSuccess from "./RequirementForSuccess";
import Banner from "./Banner";
import Accomplishments from "./Accomplishments";
const CaseStudiesDas = () => {
  return (
    <>
      <div className="max-w-7xl sm:px-10 px-4 mx-auto mt-[50px]">
        <CaseStudyBanner />
        <ImplementationApproach />
      </div>
      <PainPointsDiscovered />
      <RequirementForSuccess />
      <Banner />
      <Accomplishments />
    </>
  );
};

export default CaseStudiesDas;
