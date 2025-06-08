import Image from 'next/image';
import React from 'react'
const cardData = [
  {
    title: "User Trust and Satisfaction",
    description:
      "DASGUZO implemented a review system where users could leave feedback after completing a booking. This enhanced transparency and helped users make informed decisions, contributing to a higher level of trust and satisfaction on the platform",
  },
  {
    title: "Seamless Maps Integration",
    description:
      "The integration of Google Maps for reporting car-related issues made it easier for users to provide precise details, ensuring that all issues were accurately reported and resolved efficiently.",
  },
  {
    title: "Booking Requests and Approvals",
    description:
      "The platform provided clear workflows for renters to request bookings and for owners/admins to approve or reject them. This transparency helped streamline the rental process and enhanced user trust",
  },
  {
    title: "Admin Dashboard Management",
    description:
      "The admin dashboard was designed for easy management of car listings, bookings, and issue reports. Admins could efficiently track, prioritize, and resolve both rental-related tasks and user-reported problems",
  },
];
const Accomplishments = () => {
  return (
    <section className="py-20  ">
      <div className="max-w-7xl sm:px-10 px-4 mx-auto ">
        <div className="flex flex-col justify-center items-center">
          <Image
            src={"/images/das-guzo/dasguzo.svg"}
            width={300}
            height={100}
            alt="das guzo"
            className="pb-4"
          />
          <div className="max-w-[583px] w-full text-center py-6 mx-auto">
            <h2 className="  text-3xl sm:text-4xl font-semibold mb-4 text-[#272A2D] dark:text-[#E8E9EA]">
              Some Of the many Accomplishments In This Project
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 ">
          {cardData.map((card, index) => (
            <div
              key={index}
              className="rounded-lg p-6 bg-[#F2F3F4] dark:bg-[#222222] shadow-md"
            >
              <h3 className="text-xl font-semibold mb-2 text-[#272A2D] dark:text-[#FFFFFF]">
                {card.title}
              </h3>
              <p className="text-sm leading-relaxed text-[#272A2D] dark:text-[#A5A5A5]">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Accomplishments