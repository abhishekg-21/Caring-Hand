"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const stories = [
  {
    id: 1,
    title: "Tayyari Kal Ki",
    img: "/images/Stories/1-Smile-Foundation-s-Real-Work-Real-Change-to-support-the-underprivileged-people-YouTube-1.png",
  },
  {
    id: 2,
    title: "Health Cannot Wait",
    img: "/images/Stories/1-WorldHealthDay-YouTube-1.png",
  },
  {
    id: 3,
    title: "Shiksha Na Ruke",
    img: "/images/Stories/8-Rupali-Paraja-–-Mission-Education-Beneficiary-Darigabadi-Odisha-YouTube-1.png",
  },
  {
    id: 4,
    title: "She Can Fly",
    img: "/images/Stories/8-Shiksha-Na-Ruke-for-the-children-of-sugarcane-cutters-in-Beed-Maharashtra-YouTube-1.png",
  },
  {
    id: 5,
    title: "She Can Fly",
    img: "/images/Stories/8-WorldHealthDay-YouTube-1.png",
  },
  {
    id: 6,
    title: "She Can Fly",
    img: "/images/Stories/Shiksha-Na-Ruke-Anthem.jpg",
  },
];

export default function Stories() {
  const [startIndex, setStartIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(3);

  // Determine the number of visible stories based on screen size
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setVisibleCount(3);
      } else if (window.innerWidth >= 640) {
        setVisibleCount(2);
      } else {
        setVisibleCount(1);
      }
    };

    handleResize(); // Set initial count
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Update story index for auto-scroll
  useEffect(() => {
    const interval = setInterval(() => {
      setStartIndex((prevIndex) => (prevIndex + 1) % stories.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const visibleStories = [];
  for (let i = 0; i < visibleCount; i++) {
    visibleStories.push(stories[(startIndex + i) % stories.length]);
  }

  return (
    <section id="stories" className="py-12 md:py-16 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <h2 className="text-center text-2xl md:text-3xl font-bold mb-8">
          Stories in Motion
        </h2>
        <div className="flex justify-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 transition-all duration-500 ease-in-out">
            {visibleStories.map((s) => (
              <article
                key={s.id}
                className="relative w-full overflow-hidden rounded-lg shadow-lg"
              >
                <div className="relative w-full aspect-video">
                  <Image
                    src={s.img}
                    alt={s.title}
                    fill
                    className="object-cover"
                  />
                  {/* play button */}
                  <div className="absolute inset-0 flex items-center justify-center bg-opacity-30 opacity-100 group-hover:opacity-100 transition-opacity">
                    <div className="w-14 h-14 rounded-full bg-white/90 grid place-items-center hover:scale-105 transition">
                      <div className="ml-0.5 w-0 h-0 border-y-8 border-y-transparent border-l-[14px] border-l-brand-green" />
                    </div>
                  </div>
                </div>
                <div className="p-4 bg-white">
                  <h3 className="font-semibold text-lg">{s.title}</h3>
                  <p className="text-sm text-gray-600 mt-1">
                    Short description about the campaign and impact.
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
