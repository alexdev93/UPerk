import React from "react";
import Banner from "../common/Banner";
import WorkFlowSteps from "./WorkFlowSteps";
const WorkFlow = () => {
  return (
    <div>
      <Banner
        heading="90-Day MVP for Startups: Launch Fast, Validate & Iterate"
        paragraph="Build, launch, and validate your startup’s MVP in 90 days—fast-track your way to product-market fit."
      />
      <WorkFlowSteps />
    </div>
  );
};

export default WorkFlow;
