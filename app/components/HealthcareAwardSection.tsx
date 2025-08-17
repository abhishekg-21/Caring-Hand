"use client";

import Image from "next/image";
import React from "react";

const goals = [
  {
    image:
      "/images/HealthCareAward/Smile-Foundation-Receives-at-CSR-Health-Awards-2024-by-the-IHW-Council.jpg",
    title: "GOOD HEALTH & WELL BEING",
  },
];

export default function HealthcareAwardSection() {
  return (
    <section className="w-full bg-[#e7c2af] py-12 px-4 sm:px-6 md:px-8 lg:px-12">
      <div className="max-w-screen-xl mx-auto flex flex-col lg:flex-row items-center gap-8">
        {/* Text Section */}
        <div className="w-full lg:w-1/2">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white mb-4 leading-snug">
            &apos;Best CSR Excellence in Healthcare Award&apos; by Assocham
          </h2>
          <p className="text-white text-sm sm:text-base leading-relaxed">
            This recognition celebrates our Smile on Wheels mobile healthcare
            programme that has been instrumental in reaching the most isolated
            areas, expanding access to healthcare and supporting the National
            Health Mission&apos;s vision of health for all.
          </p>
          <a
            href="#"
            className="mt-4 inline-block text-white underline font-semibold text-sm sm:text-base"
          >
            view all &gt;
          </a>
        </div>

        {/* Image Section */}
        <div className="w-full lg:w-1/2 flex justify-center">
          {goals.map((goal, i) => (
            <div
              key={i}
              className="relative w-full max-w-md aspect-[4/3] rounded-lg overflow-hidden"
            >
              <Image
                src={goal.image}
                alt={goal.title}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover rounded-lg"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
