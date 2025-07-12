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
            <h3 className="text-xl font-semibold mb-2">Fragmented Data</h3>
            <p className="text-[#E8E9EA]">
              Stakeholder information was spread across multiple platforms,
              leading to inefficiencies and data silos
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">
              Inefficient Communication
            </h3>
            <p className="text-[#E8E9EA]">
              Without a centralised tool, communications with donors,
              volunteers, and partners were time-consuming and prone to errors.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">Lack of KPIs</h3>
            <p className="text-[#E8E9EA]">
              WMTFA had no clearly defined Key Performance Indicators (KPIs). We
              helped them establish measurable KPIs, along with short-term,
              medium-term, and long-term objectives as part of a comprehensive
              monitoring and evaluation strategy.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">Limited Reporting</h3>
            <p className="text-[#E8E9EA]">
              Inadequate reporting tools limited their ability to gain
              actionable insights into donor and volunteer activities.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
