const cardData = [
  {
    title: "Dual-Flow Design",
    description:
      "The platform was designed with two clear paths: for users (one for renting and one for owners listing) to simplify the process. The focused clarity of each path enhances usability with different parts of the platform.",
  },
  {
    title: "Payment Integration",
    description:
      "DASGUZO integrated secure payment gateways for transactions between renters and car owners. Users can make bookings using both standard cards and digital wallets, ensuring prompt payments to owners.",
  },
  {
    title: "Google Maps Integration For Issue Reporting",
    description:
      "Users can report car-related issues by pinpointing precise live vehicle/location integration through Google Maps. It boosts precision when the issue occurred, ensuring accurate reports.",
  },
  {
    title: "Chat Communication",
    description:
      "A real-time chat feature allows renters and car owners to communicate efficiently. Ideal for clarifications, pick-up instructions, and resolution of open issues before or during the rental period.",
  },
  {
    title: "Simple Car Listing And Booking",
    description:
      "Car owners could quickly upload vehicle details, set pricing, and availability. A listing would appear in the app for renters to browse based on preferences and filter based on location, availability, and price.",
  },
  {
    title: "Admin Dashboard",
    description:
      "A comprehensive admin panel was created to manage car listings, user accounts, support tickets, and performance metrics. Admins could assign issues to the appropriate team for resolution and monitor the health of the platform.",
  },
];

export default function ImplementationApproach() {
  return (
    <section className="py-20  ">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-semibold mb-4 text-[#272A2D] dark:text-[#E8E9EA]">
          Our Implementation Approach
        </h2>
        <p className="text-lg max-w-4xl mb-16 text-[#272A2D] dark:text-[#DBDDDE]">
          To create a seamless platform for car rentals and issue reporting,
          DASGUZO focused on two core functionalities: a simple rental process
          and an efficient system for reporting car-related issues. Here’s how
          the solution was implemented:
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
