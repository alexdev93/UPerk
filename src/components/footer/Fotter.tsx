import Link from "next/link";
import Image from "next/image";
export function Footer() {
  return (
    <div className="mx-4 sm:mx-0">
      <footer className="bg-gradient-to-r from-[#F8F8F8] to-[#F6F6F6] dark:bg-gradient-to-r dark:from-[#1C1C1C] dark:to-[#1C1C1C] mx-auto rounded-[12px] max-w-[1280px]">
        {" "}
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
                <div className="font-bold text-gray-800 dark:text-[#DEE4EA] text-lg tracking-tight">
                  UNIVERSAL
                  <br />
                  PERK
                </div>
              </div>
            </div>
            {/* Solutions Column */}
            <div className="lg:border-l lg:border-r mr-0 lg:mr-6 border-l-0 border-r-0  border-gray-200  dark:border-[black] lg:px-14 ">
              <h3 className="text-gray-800 font-semibold mb-4 dark:text-[#E8E9EA]">
                Solutions
              </h3>
              <ul className="space-y-2 font-light  text-sm text-gray-600 dark:text-[#E8E9EA]">
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
              <h3 className="text-gray-800 dark:text-[#E8E9EA]  mb-4 ">
                Solutions
              </h3>
              <ul className="space-y-2  text-sm font-light  text-[#2B2B36] dark:text-[#E8E9EA]">
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
          <div className="mt-6 ">
            <hr className="border-t dark:border-[black] border-white mb-5" />
          </div>
          <div className="dark:flex flex-col justify-center  items-center dark:text-[#959595] hidden  font-light">
            <p>13785 Research Blvd, Suite 125 Austin, TX 78750</p>
            <p>422 Langone St STE A, San Jose, CA 95113</p>
            <p>+1 (650)256-7514</p>
            <p>contact@universalperk.com</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
