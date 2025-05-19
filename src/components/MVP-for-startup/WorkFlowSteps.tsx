"use client";
import GradientButton from "../common/BgGradientButton";
import { useMediaQuery } from "@/hooks/use-mobile";
//steps

const steps = [
  {
    id: 1,
    title: "Discovery & Project Planning",
    description:
      "Our discovery phase includes in-depth analysis of your existing workflows, user needs, and project requirements to ensure a strong foundation for success.",
  },
  {
    id: 2,
    title: "Process Optimization",
    description:
      "We analyze your business to identify areas where digital solutions can streamline operations and enhance productivity for maximum impact.",
  },
  {
    id: 3,
    title: "Define KPIs & Success Metrics",
    description:
      "We help you establish clear, measurable KPIs and success metrics to track progress and ensure alignment with your business objectives.",
  },
  {
    id: 4,
    title: "Timeline & Milestone Planning",
    description:
      "Our team works collaboratively with yours to map out a comprehensive project timeline with clear milestones and deliverables.",
  },
  {
    id: 5,
    title: "Risk Assessment & Strategy",
    description:
      "We conduct thorough research to identify potential challenges and develop proactive strategies to mitigate risks throughout the project lifecycle.",
  },
];

export default function ProjectPlanningSteps() {
  const isMobile = useMediaQuery("(max-width: 768px)");

  return (
    <div className="w-full min-h-screen  text-white p-4 md:p-8 flex flex-col items-center justify-center">
      {isMobile ? (
        // Mobile Layout
        <div className="w-full max-w-md space-y-4">
          {steps.map((step) => (
            <div
              key={step.id}
              className="relative p-5 bg-zinc-900 rounded-lg min-h-[120px] flex"
            >
              <div className="absolute right-5 top-5 w-7 h-7 rounded-full bg-blue-600 flex items-center justify-center text-white font-medium text-sm">
                {step.id}
              </div>
              <div className="mr-12 space-y-1.5">
                <h3 className="font-medium text-sm">{step.title}</h3>
                <p className="text-xs leading-relaxed text-zinc-400">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
          <button className="w-full bg-blue-600 hover:bg-blue-700 text-white rounded-md py-2.5 mt-6 font-medium">
            Let&apos;s Get Started
          </button>
        </div>
      ) : (
        // Desktop Layout
        <div className="w-full max-w-7xl relative mt-16">
          <div className="grid grid-cols-5 gap-8 relative z-10">
            {steps.map((step, index) => {
              const isOdd = step.id % 2 !== 0;

              return (
                <div
                  key={step.id}
                  className="relative flex flex-col items-center "
                >
                  {/* ODD Steps: Card on Top */}
                  {isOdd && (
                    <div className="mb-0 bg-zinc-900 p-5  rounded-lg min-h-[200px] w-full text-left">
                      <h3 className="font-medium text-sm mb-1.5">
                        {step.title}
                      </h3>
                      <p className="text-xs leading-relaxed text-zinc-400">
                        {step.description}
                      </p>
                    </div>
                  )}

                  {/* Vertical Line + Step Number */}

                  <div className="flex flex-col items-center">
                    {/* Vertical line BEFORE the circle: only for ODD steps */}
                    {isOdd && (
                      <>
                        <div className="w-0.5 h-6 bg-cyan-500" />
                        <div className="w-0.5 h-6 bg-cyan-500" />
                        <div className="w-0.5 h-6 bg-cyan-500" />
                        <div className="w-0.5 h-6 bg-cyan-500" />
                      </>
                    )}

                    {/* Step Number */}
                    <div className="w-8 h-8 rounded-full bg-blue-600 text-white text-sm font-semibold flex items-center justify-center z-10">
                      {step.id}
                    </div>

                    {/* Vertical line AFTER the circle: only for EVEN steps */}
                    {!isOdd && (
                      <>
                        <div className="w-0.5 h-6 bg-cyan-500" />
                        <div className="w-0.5 h-6 bg-cyan-500" />
                        <div className="w-0.5 h-6 bg-cyan-500" />
                        <div className="w-0.5 h-6 bg-cyan-500" />
                      </>
                    )}
                  </div>

                  {/* EVEN Steps: Card on Bottom */}
                  {!isOdd && (
                    <div className="mt-0 bg-zinc-900 p-5 rounded-lg min-h-[200px] w-full text-left">
                      <h3 className="font-medium text-sm mb-1.5">
                        {step.title}
                      </h3>
                      <p className="text-xs leading-relaxed text-zinc-400">
                        {step.description}
                      </p>
                    </div>
                  )}

                  {/* Horizontal line to next step (not after last step) */}
                  {index < steps.length - 1 && (
                    <div
                      className={`absolute ${
                        isOdd ? "bottom-4" : "top-4"
                      } right-[-50%] w-full h-0.5 bg-cyan-500 z-0`}
                    />
                  )}
                </div>
              );
            })}
          </div>

          {/* CTA Button */}
          <div className="flex justify-center mt-24">
           

            <GradientButton className="rounded-[3px]">
              Start Your 90 Day MVP
            </GradientButton>
          </div>
        </div>
      )}
    </div>
  );
}
