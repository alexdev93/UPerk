import Link from "next/link";
import Image from "next/image";
export function Footer() {
  return (
    <div className="mx-4 sm:mx-0">
      <footer className="bg-gray-50  mx-auto rounded-[12px] max-w-[1280px]">
        <div className="container mx-auto px-20 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Logo Column */}
            <div className="flex items-start justify-start md:justify-start">
              <div className="flex items-start space-x-2">
                <div className="relative w-10 h-10">
                  <Image
                  src={"/icons/logo.svg"}
                    width={200}
                    height={200}
                    alt="logo"
                  />
                </div>
                <div className="font-bold text-gray-800 text-lg tracking-tight">
                  UNIVERSAL
                  <br />
                  PERK
                </div>
              </div>
            </div>
            {/* Solutions Column */}
            <div className="sm:border-l sm:border-r mr-0 sm:mr-6 border-l-0 border-r-0  border-gray-200 sm:px-14 ">
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
    </div>
  );
}
