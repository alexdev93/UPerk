const cardData = [
  {
    title: "Group and Stakeholder Interviews",
    description:
      "Conducted in-depth interviews with various stakeholder groups to understand their needs, expectations, and challenges. Data gathered during this phase guided the design and development process.",
  },
  {
    title: "Data Gathering",
    description:
      "Collected all relevant data, including past communication records, stakeholder interactions, and organisational workflows, to create an accurate baseline for the CRM’s configuration.",
  },
  {
    title: "Defining KPIs and Objectives",
    description:
      "We worked closely with WMTFA to establish clear Key Performance Indicators (KPIs) as well as short, medium, and long-term objectives to monitor and evaluate progress.",
  },
  {
    title: "User Experience Research",
    description:
      "Based on the gathered data, we designed a user-friendly interface with an intuitive workflow, ensuring easy navigation for WMTFA’s team.",
  },
  {
    title: "Prototyping and Testing",
    description:
      "We created interactive prototypes and conducted usability testing to ensure the design aligned with user needs, incorporating feedback iteratively.",
  }
];

export default function ImplementationApproach() {
  return (
    <section className="py-20  ">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-semibold mb-4 text-[#272A2D] dark:text-[#E8E9EA]">
          Our Implementation Process
        </h2>
        <p className="text-lg max-w-4xl mb-16 text-[#272A2D] dark:text-[#DBDDDE]">
          The CRM system implementation was a multi-phased process that included
          distinct activities across UX design, software development, and
          cloud/system architecture:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 ">
          {cardData.map((card, index) => (
            <div
              key={index}
              className="rounded-lg p-6 bg-[#F2F3F4] dark:bg-[#222222] shadow-md"
            >
              <h3 className="text-xl font-semibold mb-2 text-[#272A2D] dark:text-[#E8E9EA]">
                {card.title}
              </h3>
              <p className="text-sm leading-relaxed text-[#272A2D] dark:text-[#E8E9EA]">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
