"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

const partners = [
  {
    src: "/images/new-page/EmploymentPartners/1.png.webp",
    alt: "Sri Balaji Hospital",
  },
  { src: "/images/new-page/EmploymentPartners/2.png.webp", alt: "GVK EMRI" },
  {
    src: "/images/new-page/EmploymentPartners/3.png.webp",
    alt: "Venkateshwar Hospital",
  },
  {
    src: "/images/new-page/EmploymentPartners/4.png.webp",
    alt: "HDB Financial Services",
  },
  {
    src: "/images/new-page/EmploymentPartners/5.png.webp",
    alt: "Portea Heal at Home",
  },
  {
    src: "/images/new-page/EmploymentPartners/6.png.webp",
    alt: "Portea Heal at Home",
  },
  {
    src: "/images/new-page/EmploymentPartners/7.jpg.webp",
    alt: "Portea Heal at Home",
  },
  {
    src: "/images/new-page/EmploymentPartners/9.png.webp",
    alt: "Portea Heal at Home",
  },
  {
    src: "/images/new-page/EmploymentPartners/11.png",
    alt: "Portea Heal at Home",
  },
  {
    src: "/images/new-page/EmploymentPartners/13.png",
    alt: "Portea Heal at Home",
  },
  {
    src: "/images/new-page/EmploymentPartners/AZ_Logo_positive_CMYK.jpg.webp",
    alt: "Portea Heal at Home",
  },
  {
    src: "/images/new-page/EmploymentPartners/BFS-Logo-Ratios-1200X300.jpg.webp",
    alt: "Portea Heal at Home",
  },
  {
    src: "/images/new-page/EmploymentPartners/day-four-15-1-768x575.jpg.webp",
    alt: "Portea Heal at Home",
  },
  {
    src: "/images/new-page/EmploymentPartners/ntt-data.png",
    alt: "Portea Heal at Home",
  },
  {
    src: "/images/new-page/EmploymentPartners/PPG-NEW-LOGO-scaled.jpg.webp",
    alt: "Portea Heal at Home",
  },
];

const EmploymentPartners = () => {
  const scrollRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const scrollInterval = setInterval(() => {
      if (scrollRef.current) {
        scrollRef.current.scrollLeft += 200; // scroll by 200px every 2s
        if (
          scrollRef.current.scrollLeft + scrollRef.current.clientWidth >=
          scrollRef.current.scrollWidth
        ) {
          // reset to start for infinite scroll effect
          scrollRef.current.scrollLeft = 0;
        }
      }
    }, 3000);

    return () => clearInterval(scrollInterval);
  }, []);

  return (
    <section className="bg-white py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-extrabold uppercase mb-10 text-black ">
          Employment Partners
        </h2>

        <div className="overflow-hidden">
          <div
            className="hide-scrollbar flex space-x-6 transition-all duration-500 ease-in-out"
            ref={scrollRef}
            style={{
              overflowX: "auto",
              scrollBehavior: "smooth",
              display: "flex",
              whiteSpace: "nowrap",
              scrollbarWidth: "none", // Firefox
            }}
          >
            {partners.map((partner, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-1/5 bg-white border border-gray-200 p-4 flex items-center justify-center shadow-sm"
              >
                <Image
                  src={partner.src}
                  alt={partner.alt}
                  width={180}
                  height={100}
                  className="object-contain h-24 w-auto"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EmploymentPartners;
