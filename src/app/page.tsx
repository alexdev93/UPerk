import Header from "@/components/header/Header";
import TrustedBy from "@/components/trusted-by/TrustedBy";
import Support from "@/components/support";
import AICapabilitiesForBUsiness from "@/components/ai-capabilities-for-business";
import TransformedBusiness from "@/components/transformed-business";
import AIInsightsTrends from "@/components/ai-insights-trends";
import Subscrib from "@/components/subscribe/Subscrib";
import TechStackSection from "@/components/technologies/TechStackSection";
import DevelopmentPipeline from "@/components/development-pipline";
import { Footer } from "@/components/footer/Fotter";
import ProjectPlanningSteps from "@/components/MVP-for-startup";

export default function Home() {
  return (
    <div className="mb-[60px]">
      <Header />
      <TrustedBy />
      <Support />
      <ProjectPlanningSteps  />
      {/* <AICapabilitiesForBUsiness /> */}
      {/* <DevelopmentPipeline /> */}
      <TransformedBusiness />
      <AIInsightsTrends />

      <TechStackSection />
      <Subscrib />
      <Footer />
    </div>
  );
}
