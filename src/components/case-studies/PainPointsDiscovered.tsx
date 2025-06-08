// components/PainPointsDiscovered.tsx
export default function PainPointsDiscovered() {
  return (
    <section className="bg-gradient-to-r from-[#2563EB] to-[#2CA2F4] py-12 ">
      <div className="max-w-7xl sm:px-10 px-4 mx-auto text-center">
        <h2 className="text-3xl font-semibold text-[#E8E9EA] mb-10">
          Pain Points Discovered
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 text-left text-white">
          <div>
            <h3 className="text-xl font-semibold mb-2">
              Accurate Issue Reporting
            </h3>
            <p className="text-[#E8E9EA]">
              The challenge was ensuring that users could provide accurate
              details about when and where the issue with the car occurred. This
              was solved by integrating Google Maps to allow users to drop a pin
              at the exact location of the incident and capture the time of the
              event.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">
              Balancing Rentals and Reporting
            </h3>
            <p className="text-[#E8E9EA]">
              It was important to balance the user experience between the car
              rental functionality and the issue reporting process. To address
              this, distinct workflows were designed, separating car booking and
              issue reporting to avoid conflict.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">
              Seamless Communication
            </h3>
            <p className="text-[#E8E9EA]">
              Initially, users experienced delays in coordinating with owners or
              admins. This was addressed by integrating real-time chat features,
              making communication faster and more direct.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">
              Admin Overload with Issue Reports
            </h3>
            <p className="text-[#E8E9EA]">
              With the potential for numerous car-related reports, admins could
              be overwhelmed. To manage this, filters and prioritization options
              were added to the admin dashboard, allowing reports to be
              categorized and addressed based on urgency.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
