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
import Chatbot from "@/components/chatbot/Chatbot";
import CaseStudy from "@/components/case-studies-section";
export default function Home() {
  return (
    <div className="mb-[30px]">
      <Header />
      <div className="flex justify-center">
        <TrustedBy />
        <div className="mt-35 mr-7">
          <Chatbot  />
        </div>
      </div>
      <Support />
      <ProjectPlanningSteps />
      <AICapabilitiesForBUsiness />
      <DevelopmentPipeline />
      <TransformedBusiness />
      < CaseStudy />
      <AIInsightsTrends />
      <TechStackSection />
      <Subscrib />
      <Footer />   
    </div>
  );
}
