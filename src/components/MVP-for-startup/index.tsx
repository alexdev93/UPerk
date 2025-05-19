import React from "react";
import Banner from "../common/Banner";
import ProjectPlanningSteps from "./WorkFlowSteps";
const WorkFlow = () => {
  return (
    <div className="mt-50">
      <Banner
        heading="90-Day MVP for Startups: Launch Fast, Validate & Iterate"
        paragraph="Build, launch, and validate your startup’s MVP in 90 days—fast-track your way to product-market fit."
      />
      <ProjectPlanningSteps />
    </div>
  );
};

export default WorkFlow;
