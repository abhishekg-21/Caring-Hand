"use client";

import Link from "next/link";

export default function AboutSection() {
  return (
    <section className="bg-white text-gray-800 py-10 sm:py-16 px-4 sm:px-6">
      <div className="container mx-auto text-center">
        {/* Intro Headline */}
        <p className="text-sm sm:text-base md:text-lg leading-relaxed">
          Established in 2002, Smile Foundation is an Indian development
          organization, impacting the lives of over 20 lakh children and their
          families every year. We have more than 400 projects on education,
          healthcare, livelihood, and women empowerment in over 2,000 remote
          villages and urban slums across 27 states of India.
        </p>

        {/* Supporting Paragraph */}
        <p className="mt-4 sm:mt-6 text-sm sm:text-base md:text-lg leading-relaxed">
          Smile Foundation works as a catalyst in the cycle of change,
          complementing and supplementing government efforts{" "}
          <span className="text-gray-500 text-xs sm:text-sm">
            (view details)
          </span>{" "}
          to achieve the Sustainable Development Goals. We sensitize and partner
          with like-minded institutions and individuals to implement high-impact
          programmes that enable access, enhance quality, and help bring
          long-term behavioural change at the grassroots.
        </p>

        {/* Read More Link */}
        <div className="mt-6 sm:mt-8">
          <Link
            href="/about"
            className="text-green-600 text-sm sm:text-base hover:underline font-medium"
          >
            Read more &gt;
          </Link>
        </div>
      </div>
    </section>
  );
}
