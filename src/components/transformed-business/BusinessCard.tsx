import Image from "next/image";
import { Paragraph } from "../common/Paragraph";
import { Heading } from "../common/Heading";
type BusinessCardProps = {
  logoUrl: string;
  name: string;
  description: string;
};

const BusinessCard = ({ logoUrl, name, description }: BusinessCardProps) => {
  return (
    <div
      className="text-left max-w-[343px] max-h-[331px] mx-auto text-white rounded-lg shadow-lg p-6 
    bg-gradient-to-b from-[#F6F6F6] to-[#FFFFFF]
    dark:bg-gradient-to-b dark:from-[#292929] dark:to-[#242424]"
    >
      <Image
        src={logoUrl}
        alt="Logo"
        width={64}
        height={64}
        className=" mb-4"
      />
      <Heading
        level={4}
        className="text-[#2B272D] dark:text-[white]  font-bold text-left"
      >
        {name}
      </Heading>
      <Paragraph className="text-left text-[#2B272D] dark:text-[#A5A5A5] text-sm mt-2">
        {description}
      </Paragraph>
      <a
        href="#"
        className="text-blue-400 hover:text-blue-300 text-left block mt-4"
      >
        Read More...
      </a>
    </div>
  );
};

export default BusinessCard;
