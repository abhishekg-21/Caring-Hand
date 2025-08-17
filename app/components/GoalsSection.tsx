import React from "react";
import Image from "next/image"; // It's good practice to use Next.js Image component

const goals = [
  {
    image: "/images/Goals_Section/good-health.png.webp",
    title: "GOOD HEALTH & WELL BEING",
  },
  {
    image: "/images/Goals_Section/gender-equality.png.webp",
    title: "GENDER EQUALITY",
  },
  {
    image: "/images/Goals_Section/quality-education-copy.png.webp",
    title: "QUALITY EDUCATION",
  },
  {
    image: "/images/Goals_Section/economic-growth.png.webp",
    title: "DECENT WORK & ECONOMIC GROWTH",
  },
  {
    image: "/images/Goals_Section/reduced-copy.png.webp",
    title: "REDUCED INEQUALITIES",
  },
  {
    image: "/images/Goals_Section/partnership.png.webp",
    title: "PARTNERSHIPS FOR THE GOALS",
  },
];

const GoalsSection = () => {
  return (
    <div className="text-center py-10 sm:py-16 bg-white">
      <h3 className="text-base sm:text-lg text-black font-bold mb-2">
        TOWARDS ACHIEVING
      </h3>
      <h2 className="text-2xl sm:text-3xl font-extrabold pb-6 sm:pb-10 text-black">
        SUSTAINABLE DEVELOPMENT GOALS
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6 px-4 sm:px-8 max-w-7xl mx-auto">
        {goals.map((goal, i) => (
          <div key={i} className="flex flex-col items-center">
            <div className="relative w-full h-[100px] sm:h-[120px] md:h-[150px] lg:h-[180px]">
              <Image
                src={goal.image}
                alt={goal.title}
                layout="fill"
                objectFit="contain"
              />
            </div>
            <p className="mt-2 text-xs sm:text-sm font-semibold text-gray-700 uppercase leading-tight">
              {goal.title}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GoalsSection;
