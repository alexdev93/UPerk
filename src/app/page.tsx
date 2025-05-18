import Header from "@/components/header/Header";
import TrustedBy from "@/components/trusted-by/TrustedBy";
import Support from "@/components/support";
import WorkFlow from "@/components/MVP-for-startup";
import AICapabilitiesForBUsiness from "@/components/ai-capabilities-for-business";
import TransformedBusiness from "@/components/transformed-business";
import AIInsightsTrends from "@/components/ai-insights-trends";
import Subscrib from "@/components/subscribe/Subscrib";
import TechStackSection from "@/components/technologies/TechStackSection";
import DevelopmentPipeline from "@/components/development-pipline";

export default function Home() {
  return (
    <div className="mb-[60px]">
      <Header />
      <TrustedBy />
      <Support />
      {/* <WorkFlow  /> */}
      {/* <AICapabilitiesForBUsiness /> */}
      <DevelopmentPipeline  />
      <TransformedBusiness />
      <AIInsightsTrends />

      {/* <TechStackSection   /> */}
      {/* <Subscrib  /> */}
    </div>
  );
}
