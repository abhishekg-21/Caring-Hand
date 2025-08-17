import React from "react";
import {
  FaBookOpen,
  FaHeartbeat,
  FaFistRaised,
  FaClipboardList,
  FaParachuteBox,
  FaHandsHelping,
} from "react-icons/fa";

const programmes = [
  {
    icon: <FaBookOpen size={40} className="text-yellow-500" />,
    title: "EDUCATION",
    description: "Education, nutrition and holistic development of children",
    color: "text-yellow-500 border-yellow-500",
  },
  {
    icon: <FaHeartbeat size={40} className="text-purple-400" />,
    title: "HEALTHCARE",
    description:
      "Taking healthcare services to doorsteps of hard to reach communities",
    color: "text-purple-400 border-purple-400",
  },
  {
    icon: <FaFistRaised size={40} className="text-teal-400" />,
    title: "WOMEN EMPOWERMENT",
    description:
      "Empowering adolescent girls & women through community engagement",
    color: "text-teal-400 border-teal-400",
  },
  {
    icon: <FaClipboardList size={40} className="text-orange-300" />,
    title: "LIVELIHOOD",
    description:
      "Skill training and placement support for underprivileged youth",
    color: "text-orange-300 border-orange-300",
  },
  {
    icon: <FaParachuteBox size={40} className="text-green-500" />,
    title: "EMPOWERING GRASSROOTS",
    description:
      "Helping community-based organizations become locally sustainable",
    color: "text-green-500 border-green-500",
  },
  {
    icon: <FaHandsHelping size={40} className="text-red-500" />,
    title: "DISASTER RESPONSE",
    description:
      "Reach out and respond to the needs of the disaster-affected people",
    color: "text-red-500 border-red-500",
  },
];

export default function ProgrammesSection() {
  return (
    <section className="py-12 sm:py-16 px-4 sm:px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-center text-2xl sm:text-3xl font-extrabold mb-8 sm:mb-12">
          OUR PROGRAMMES
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programmes.map((item, idx) => (
            <div
              key={idx}
              className="flex flex-col sm:flex-row items-center sm:items-start gap-4 text-center sm:text-left"
            >
              <div className="flex-shrink-0">{item.icon}</div>
              <div className="flex-grow">
                <h3
                  className={`text-lg sm:text-xl font-extrabold uppercase border-b-4 inline-block mb-1 sm:mb-2 ${item.color}`}
                >
                  {item.title}
                </h3>
                <p className="text-gray-700 text-sm sm:text-base">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
