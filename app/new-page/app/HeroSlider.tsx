"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

const images = [
  {
    src: "/images/new-page/HeroSlider/1-e1678098310266.jpg",
    alt: "Banner 1",
  },
  { src: "/images/new-pageH/eroSlider/2.jpg", alt: "Banner 2" },
  { src: "/images/new-page/HeroSlider/3.jpg", alt: "Banner 3" },
  { src: "/images/new-page/HeroSlider/4.jpg", alt: "Banner 4" },
  { src: "/images/new-page/HeroSlider/5.jpg", alt: "Banner 5" },
  { src: "/images/new-page/HeroSlider/6.jpg", alt: "Banner 6" },
  { src: "/images/new-page/HeroSlider/7.jpg", alt: "Banner 7" },
  { src: "/images/new-page/HeroSlider/8.jpg", alt: "Banner 8" },
  {
    src: "/images/new-page/HeroSlider/9-e1678098467965.jpg",
    alt: "Banner 9",
  },
];

export default function HeroSlider() {
  const containerRef = useRef<HTMLDivElement>(null);
  const currentIndex = useRef(0);

  useEffect(() => {
    const interval = setInterval(() => {
      const container = containerRef.current;
      if (!container) return;

      currentIndex.current = (currentIndex.current + 1) % images.length;
      const scrollToX = container.offsetWidth * currentIndex.current;

      container.scrollTo({
        left: scrollToX,
        behavior: "smooth",
      });
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full h-[100vh] overflow-hidden">
      <div
        ref={containerRef}
        className="flex h-full w-full overflow-x-auto scroll-smooth snap-x snap-mandatory"
      >
        {images.map((image, index) => (
          <div
            key={index}
            className="relative flex-shrink-0 w-full h-full snap-center"
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 flex items-center justify- bg-opacity-50">
              <h1 className="text-white text-4xl md:text-6xl font-bold text-center px-20">
                SKILLED WORKFORCE. DIGNIFIED LIVELIHOOD
              </h1>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
