import React from "react";
import Image from "next/image";
import Banner from "../common/Banner";

const TechStackSection = () => {
  const techLogos = [
    { name: "Node.js", path: "/icons/tech/node.svg" },
    { name: "JS", path: "/icons/tech/js.svg" },
    { name: "Angular", path: "/icons/tech/angular.svg" },
    { name: "Vue.js", path: "/icons/tech/vue.svg" },
    { name: "Flutter", path: "/icons/tech/flutter.svg" },
    { name: "Java", path: "/icons/tech/java.svg" },
    { name: "Vue.js", path: "/icons/tech/vue.svg" },
    { name: "React", path: "/icons/tech/react.svg" },
    { name: "JS", path: "/icons/tech/js.svg" },
    { name: "AWS", path: "/icons/tech/aws.svg" },
  ];

  return (
    <section className="bg-gradient-to-b from-gray-900 to-gray-800 py-16">
      <div className="container mx-auto px-4 text-center">
        <Banner
          heading="The Key Technologies We Use To Build Smart AI Solutions"
          paragraph="Explore The Cutting-Edge Technologies And Methodologies We Employ To Create Intelligent AI Solutions That Address Your Unique Business Needs And Challenges."
        />

        {/* Tech Logos Grid */}
        <div className="grid grid-cols-5 gap-6 justify-items-center mt-12">
          {techLogos.map((tech, index) => (
            <div
              key={index}
              className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center shadow-lg"
            >
              <Image
                src={tech.path}
                alt={`${tech.name} logo`}
                width={40}
                height={40}
                className="object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStackSection;
