import Image from "next/image";

const requirements = [
  {
    icon: "/images/success-requirement/user-friendly.svg",
    title: "Centralised Stakeholder Data",
    description:
      "A single, unified database for storing and managing all stakeholder information (donors, volunteers, partners)",
  },
  {
    icon: "/images/success-requirement/payment-integration.svg",
    title: "Automated Communication",
    description:
      "A single, unified database for storing and managing all stakeholder information (donors, volunteers, partners)",
  },
  {
    icon: "/images/success-requirement/chat-functionality.svg",
    title: "Real-Time Tracking",
    description:
      " Tools for tracking donations and volunteer activities with detailed reporting.",
  },
  {
    icon: "/images/success-requirement/admin-dashboard.svg",
    title: "Events Management",
    description:
      "Features to handle event registration, attendance tracking, and the collection of event data to analyze participation and engagement.",
  },
  {
    icon: "/images/success-requirement/admin-dashboard.svg",
    title: "Advanced Analytics",
    description:
      "Predictive analytics to forecast donor behavior and improve future campaigns.",
  },
  {
    icon: "/images/success-requirement/admin-dashboard.svg",
    title: "AI-Driven Chatbot",
    description: "To streamline stakeholder queries and provide 24/7 support.",
  },
  {
    icon: "/images/success-requirement/admin-dashboard.svg",
    title: "Data Security and Compliance",
    description:
      "Ensured through encryption, GDPR compliance, and frequent system backups to protect stakeholder data.",
  },
];

export default function RequirementForSuccess() {
  return (
    <div className="max-w-7xl sm:px-10 px-4 mx-auto py-12">
      <h2 className="text-3xl dark:text-[#E8E9EA] font-semibold mb-4">
        Requirements For Success
      </h2>
      {/* <p className="dark:text-[#DBDDDE] mb-12 ">
        To meet DASGUZO’s vision, several key requirements had to be addressed:
      </p> */}

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-left">
        {requirements.map((item, index) => (
          <div
            key={index}
            className=" bg-[#F8F8F8] dark:bg-gradient-to-r from-[#232323] to-[#292929] p-6 rounded-lg flex gap-4 items-start"
          >
            <div className="flex-shrink-0">
              <Image src={item.icon} alt={item.title} width={40} height={40} />
            </div>
            <div>
              <h3 className="text-lg text-[#272A2D] dark:text-[#FFFFFF] font-semibold mb-1">
                {item.title}
              </h3>
              <p className="dark:text-[#A5A5A5] text-[#272A2D] text-sm">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
