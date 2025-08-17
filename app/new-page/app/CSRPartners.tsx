"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

const partners = [
  { name: "Ericsson", image: "/images/new-page/CSRPartners/Ericsson_logo.png" },
  {
    name: "Berger",
    image: "/images/new-page/CSRPartners/BFS-Logo-Ratios-1200X300.jpg.webp",
  },
  {
    name: "Allianz",
    image: "/images/new-page/CSRPartners/AZ_Logo_positive_CMYK.jpg.webp",
  },
  {
    name: "Bajaj",
    image: "/images/new-page/CSRPartners/Euronet_Worldwide_logo.png",
  },
  { name: "NTT Data", image: "/images/new-page/CSRPartners/ntt-data.png" },
  // repeat some to loop
  {
    name: "Ericsson",
    image: "/images/new-page/CSRPartners/PPG-NEW-LOGO-scaled.jpg.webp",
  },
  { name: "Berger", image: "/images/new-page/CSRPartners/r1-rcm-1.jpg.webp" },
  {
    name: "Berger",
    image: "/images/new-page/CSRPartners/Jaipur-golden.png.webp",
  },
  //   { name: "Berger", image: "/images/berger.png" },
];

const CSRPartners = () => {
  const scrollRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    let animationFrameId: number;

    const scroll = () => {
      if (scrollRef.current) {
        scrollRef.current.scrollLeft += 1;

        // Seamless scroll reset
        if (scrollRef.current.scrollLeft >= scrollRef.current.scrollWidth / 2) {
          scrollRef.current.scrollLeft = 0;
        }
      }

      animationFrameId = requestAnimationFrame(scroll);
    };

    animationFrameId = requestAnimationFrame(scroll);

    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  return (
    <section className="bg-white py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-extrabold uppercase text-black mb-10">
          CSR Partners
        </h2>

        <div
          ref={scrollRef}
          className="flex overflow-x-auto no-scrollbar scroll-smooth"
          style={{ whiteSpace: "nowrap" }}
        >
          {[...partners, ...partners].map((partner, index) => (
            <div
              key={index}
              className="min-w-[200px] flex items-center justify-center border p-6 bg-white shadow-sm mx-3"
            >
              <Image
                src={partner.image}
                alt={partner.name}
                width={140}
                height={80}
                className="object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CSRPartners;
