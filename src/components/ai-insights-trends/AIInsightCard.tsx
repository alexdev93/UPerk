import Image from "next/image";
import { Heading } from "../common/Heading";
import { Paragraph } from "../common/Paragraph";
interface CardProps {
  imgUrl: string;
  buttonText: string;
  description: string;
  title: string;
}

const AIInsightCard: React.FC<CardProps> = ({
  imgUrl,
  buttonText,
  description,
  title,
}) => {
  return (
    <div className="max-w-[273px] flex-shrink-0  text-white rounded-lg shadow-lg ">
      <Image
        src={imgUrl}
        alt="Card Image"
        className="w-full h-48 object-cover"
        width={400}
        height={200}
      />
      <div className="p-4">
        <span className="inline-block dark:bg-black bg-[#2664EC1A] text-xs text-[#2563EB] font-semibold px-2 py-1 rounded-[10.5px] mb-2">
          {buttonText}
        </span>
        <Heading level={4} className="text-[#2A2A33] dark:text-[white] mb-2">
          {title}
        </Heading>
        <Paragraph className=" text-[12px] text-[#2A2A33] dark:text-[#A5A5A5] mb-4">
          {description}
        </Paragraph>
        <button className="text-blue-400  font-semibold hover:underline">
          Read Now →
        </button>
      </div>
    </div>
  );
};

export default AIInsightCard;
