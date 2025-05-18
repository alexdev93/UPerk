"use client";

export default function WorkFlowSteps() {
  return (
    <>
      <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center p-4">
        <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-4">
          <div className="w-full md:w-1/5 text-center">
            <div className="bg-gray-800 p-4 rounded-lg">
              <div className="bg-blue-600 w-10 h-10 rounded-full flex items-center justify-center mx-auto mb-2">
                1
              </div>
              <p className="text-sm">Define KPIs & Success Metrics</p>
              <p className="text-xs text-gray-400">
                Identify key performance indicators, success metrics, investment
                scope, monitoring system setup, and KPI dashboard.
              </p>
            </div>
          </div>
          <div className="w-px h-16 bg-gray-600 hidden md:block"></div>
          <div className="w-full md:w-1/5 text-center">
            <div className="bg-gray-800 p-4 rounded-lg">
              <div className="bg-blue-600 w-10 h-10 rounded-full flex items-center justify-center mx-auto mb-2">
                2
              </div>
              <p className="text-sm">Discovery & Project Planning</p>
              <p className="text-xs text-gray-400">
                Our technical team conducts data scoping, UX design, wireframes,
                and initial infrastructure setup to define scope.
              </p>
            </div>
          </div>
          <div className="w-px h-16 bg-gray-600 hidden md:block"></div>
          <div className="w-full md:w-1/5 text-center">
            <div className="bg-gray-800 p-4 rounded-lg">
              <div className="bg-blue-600 w-10 h-10 rounded-full flex items-center justify-center mx-auto mb-2">
                3
              </div>
              <p className="text-sm">Discovery & Project Planning</p>
              <p className="text-xs text-gray-400">
                Our technical team begins coding, testing, and deploying your
                product with regular updates.
              </p>
            </div>
          </div>
          <div className="w-px h-16 bg-gray-600 hidden md:block"></div>
          <div className="w-full md:w-1/5 text-center">
            <div className="bg-gray-800 p-4 rounded-lg">
              <div className="bg-blue-600 w-10 h-10 rounded-full flex items-center justify-center mx-auto mb-2">
                4
              </div>
              <p className="text-sm">Discovery & Project Planning</p>
              <p className="text-xs text-gray-400">
                Our technical team equips you with analytics, reporting, and
                optimization tools to enhance performance.
              </p>
            </div>
          </div>
          <div className="w-px h-16 bg-gray-600 hidden md:block"></div>
          <div className="w-full md:w-1/5 text-center">
            <div className="bg-gray-800 p-4 rounded-lg">
              <div className="bg-blue-600 w-10 h-10 rounded-full flex items-center justify-center mx-auto mb-2">
                5
              </div>
              <p className="text-sm">Discovery & Project Planning</p>
              <p className="text-xs text-gray-400">
                Our technical team hands over the product, trains your team, and
                provides ongoing support.
              </p>
            </div>
          </div>
        </div>
      </div>
      <button className="mt-8 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
        Start Your 30 Day MVP
      </button>
    </>
  );
}



