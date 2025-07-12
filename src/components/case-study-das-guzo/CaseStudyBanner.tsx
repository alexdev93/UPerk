import Image from "next/image";

export default function CaseStudyBanner() {
  return (
    <div className="flex flex-col">
      <div className="flex flex-col lg:flex-row items-center justify-between">
        {/* Text Content */}
        <div className="max-w-2xl">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 leading-tight dark:text-[#E8E9EA] text-[#272A2D]">
            <span className="bg-gradient-to-r from-[#2563EB] via-[#2FBAF8] to-[#34E5FF] bg-clip-text text-transparent">
              Enhancing
            </span>
            <br />
            Organizational Efficiency with a CRM Solution
          </h2>
          <p className="dark:text-[#E8E9EA] text-lg leading-relaxed text-[#272A2D]">
            The main objective of implementing a CRM system was to improve
            organizational efficiency by centralizing stakeholder data,
            automating workflows, and integrating communication tools. This
            initiative was designed to help non-profit organizations better
            manage donor relations, volunteer activities, and streamline
            communication efforts, ultimately increasing their operational focus
            on mission-critical tasks rather than administrative duties.
          </p>
        </div>

        {/* Single Phone Image */}
        <div
          className="absolute top-[200px] left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full opacity-50 blur-[85px] z-[-1]"
          style={{
            background: "linear-gradient(to left, #2563EB, #2CA2F4, #34E5FF)",
          }}
        />
        <div className="relative w-full max-w-md flex justify-center ">
          <Image
            src="/images/case-studies/Macbook_Laptop.svg"
            alt="DASGUZO App Mockup"
            width={300}
            height={600}
            className="w-auto h-auto max-h-[600px] drop-shadow-2xl"
            priority
          />
        </div>
      </div>
      {/* Who Was The Client Section */}
      <div className="py-16 items-start text-left">
        <div className="">
          <h3 className="text-2xl sm:text-3xl font-semibold mb-4 dark:text-[#E8E9EA] text-[#272A2D]">
            Client Overview
          </h3>
          <p className="text-[#272A2D] dark:text-[#DBDDDE] text-base sm:text-lg leading-relaxed">
            a non-profit organization that focuses on civic engagement and
            advocacy. Founded in 2021, WMTFA promotes multiracial democracy and
            counteracts racism. Like many nonprofits, they faced significant
            challenges managing data, communication, and stakeholder
            relationships before adopting the CRM solution.
          </p>
        </div>
      </div>
    </div>
  );
}
