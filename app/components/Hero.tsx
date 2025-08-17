"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";

const images = [
  {
    src: "/images/Banner3-1.jpg.webp",
    alt: "Ensuring fair opportunity for women & girls",
    link: "/new-page",
  },
  {
    src: "/images/Hero/Banner2-1.jpg.webp",
    alt: "Empowering Women Globally",
    link: "/another-page",
  },
  {
    src: "/images/Hero/Banner1-scaled.jpg.webp",
    alt: "Creating Equal Chances",
    link: "/equal-opportunity",
  },
];

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const currentIndex = useRef(0);

  useEffect(() => {
    const scrollContainer = containerRef.current;
    if (!scrollContainer) return;

    const scrollInterval = setInterval(() => {
      currentIndex.current = (currentIndex.current + 1) % images.length;
      const scrollX = scrollContainer.offsetWidth * currentIndex.current;

      scrollContainer.scrollTo({
        left: scrollX,
        behavior: "smooth",
      });
    }, 5000); // Scroll every 5 seconds

    return () => clearInterval(scrollInterval);
  }, []);

  return (
    <section className="relative overflow-hidden">
      <div
        ref={containerRef}
        className="flex w-full overflow-x-auto scroll-smooth snap-x snap-mandatory no-scrollbar"
        style={{
          height: "100vh",
          maxHeight: "100svh", // Adjusts for mobile browser UI
        }}
      >
        {images.map((image, index) => (
          <div
            key={index}
            className="relative flex-shrink-0 w-full h-full snap-center"
          >
            <Link href={image.link}>
              <Image
                src={image.src}
                alt={image.alt}
                fill
                priority
                sizes="100vw"
                className="object-cover cursor-pointer"
              />
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}
