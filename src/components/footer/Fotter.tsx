import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-200 mx-auto rounded-[12px] max-w-[1280px]">
      <div className="container mx-auto px-20 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo Column */}
          <div className="flex items-start justify-start md:justify-start">
            <div className="flex items-start space-x-2">
              <div className="relative w-10 h-10">
                <svg
                  viewBox="0 0 40 40"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-full h-full text-blue-500"
                >
                  <path
                    d="M20 40C31.0457 40 40 31.0457 40 20C40 8.9543 31.0457 0 20 0C8.9543 0 0 8.9543 0 20C0 31.0457 8.9543 40 20 40Z"
                    fill="white"
                  />
                  <path
                    d="M32.5 20C32.5 26.9036 26.9036 32.5 20 32.5C13.0964 32.5 7.5 26.9036 7.5 20C7.5 13.0964 13.0964 7.5 20 7.5"
                    stroke="#2D89EF"
                    strokeWidth="4"
                    strokeLinecap="round"
                  />
                  <path
                    d="M20 7.5C26.9036 7.5 32.5 13.0964 32.5 20"
                    stroke="#2D89EF"
                    strokeWidth="4"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
              <div className="font-bold text-gray-800 text-lg tracking-tight">
                UNIVERSAL
                <br />
                PERK
              </div>
            </div>
          </div>

          {/* Solutions Column */}
          <div className="border-l border-r border-gray-200 px-14 ">
            <h3 className="text-gray-800 font-semibold mb-4">Solutions</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>
                <Link
                  href="#"
                  className="hover:text-blue-500 transition-colors"
                >
                  Custom AI Voice Agent
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-blue-500 transition-colors"
                >
                  Custom AI Chatbot
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-blue-500 transition-colors"
                >
                  Cloud Solutions
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-blue-500 transition-colors"
                >
                  AI Development Services
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h3 className="text-gray-800 font-semibold mb-4">Solutions</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>12785 Research Blvd, Suite 125</li>
              <li>Austin TX 78750</li>
              <li className="pt-2">422 Longview St STE A,</li>
              <li>San Jose CA 95113</li>
              <li className="pt-2">+1 (555)555-7514</li>
              <li>
                <a
                  href="mailto:contact@universalperk.com"
                  className="hover:text-blue-500 transition-colors"
                >
                  contact@universalperk.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
