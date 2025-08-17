"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const partners = [
  {
    name: "Ericsson",
    image:
      "/images/new-page/InspireUs/Moumita-Hazra-–-STeP-Beneficiary-Kolkata-YouTube-1.png",
  },
  {
    name: "Berger",
    image:
      "/images/new-page/InspireUs/Ramesh-Awasthi-Pooja-Karmakar-and-Vinay-M-–-Beneficiaries-YouTube-1.png",
  },
  {
    name: "Allianz",
    image:
      "/images/new-page/InspireUs/STeP-Towards-The-Better-Life-Empowering-The-Youth-Of-India-Smile-Foundation-YouTube-1.png",
  },
];

const IMAGE_WIDTH = 1200; // You can adjust based on your container width

const InspireUs = () => {
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const [isPaused, setIsPaused] = useState(false);

  // Auto scroll every 4 seconds
  useEffect(() => {
    if (isPaused) {
      if (intervalRef.current) clearInterval(intervalRef.current);
      return;
    }

    intervalRef.current = setInterval(() => {
      if (!scrollRef.current) return;

      scrollRef.current.scrollBy({ left: IMAGE_WIDTH, behavior: "smooth" });

      if (
        scrollRef.current.scrollLeft + scrollRef.current.clientWidth >=
        scrollRef.current.scrollWidth
      ) {
        setTimeout(() => {
          if (scrollRef.current) scrollRef.current.scrollLeft = 0;
        }, 500);
      }
    }, 4000);

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [isPaused]);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -IMAGE_WIDTH, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: IMAGE_WIDTH, behavior: "smooth" });
    }
  };

  return (
    <section className="bg-[#F3F3F3] py-10 px-4 md:px-6">
      <div className="max-w-7xl mx-auto relative">
        <h2 className="text-3xl font-extrabold uppercase text-black mb-8">
          CHANGES THAT INSPIRE US
        </h2>

        {/* Left Arrow */}
        <button
          onClick={scrollLeft}
          aria-label="Scroll Left"
          className="absolute top-1/2 left-2 -translate-y-1/2 z-20 bg-white rounded-full w-10 h-10 shadow-md flex items-center justify-center hover:bg-gray-100 transition"
        >
          &#10094;
        </button>

        {/* Right Arrow */}
        <button
          onClick={scrollRight}
          aria-label="Scroll Right"
          className="absolute top-1/2 right-2 -translate-y-1/2 z-20 bg-white rounded-full w-10 h-10 shadow-md flex items-center justify-center hover:bg-gray-100 transition"
        >
          &#10095;
        </button>

        <div
          className="overflow-hidden"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div
            ref={scrollRef}
            className="flex no-scrollbar scroll-smooth touch-pan-x"
            style={{
              scrollSnapType: "x mandatory",
              scrollBehavior: "smooth",
            }}
          >
            {[...partners, ...partners].map((partner, index) => (
              <div
                key={index}
                className="flex-shrink-0"
                style={{
                  width: IMAGE_WIDTH,
                  scrollSnapAlign: "center",
                }}
              >
                <div className="border p-6 bg-white shadow-sm flex items-center justify-center h-full">
                  <Image
                    src={partner.image}
                    alt={partner.name}
                    width={IMAGE_WIDTH}
                    height={600}
                    className="object-contain"
                    priority={index === 0}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default InspireUs;
