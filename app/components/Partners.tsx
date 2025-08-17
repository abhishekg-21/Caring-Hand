"use client";

import Image from "next/image";

const partnerLogos = [
  "/images/Partners/0bacf30454e3dd659199ce9e8480578b-1.png",
  "/images/Partners/1200px-Convergys-Logo.svg-1.png",
  "/images/Partners/2560px-Deutsche_Bank_logo.svg-1.png",
  "/images/Partners/2560px-IndiGo_Airlines_logo.svg-1.png",
  "/images/Partners/Airbus_Logo_2017.svg-1.png",
  "/images/Partners/dow-logo.png.webp",
  "/images/Partners/Ericsson-logo-1.png",
  "/images/Partners/FIS_company_Fidelity_National_Information_Services_Inc._Corporate_Logo.svg-1.png",
  "/images/Partners/hdb-financial.jpg.webp",
  "/images/Partners/Hexaware-logo-1.webp",
  "/images/Partners/Interactive_Brokers-Logo.png.webp",
  "/images/Partners/kfc_PNG53-1.png",
  "/images/Partners/LOGO-Hab-Shifa-1.png",
  "/images/Partners/mel.jpg.webp",
  "/images/Partners/Mitsubishi_Electric_logo-1.png",
  "/images/Partners/New_HNF_Logo_2018_RGB-1.png",
  "/images/Partners/new-cisco-logo-png-1-1.png",
  "/images/Partners/Novartis-Logo-1.png",
  "/images/Partners/oqifn81mcwdjx0xgv2gj-1-e1671005640263.png.webp",
  "/images/Partners/otis-logo.png.webp",
  "/images/Partners/Philips_logo_new.svg-1.png",
  "/images/Partners/Puma-Logo-PNG-HD-1.png",
  "/images/Partners/purepng.com-oracle-logologobrand-logoiconslogos-251519939873wlyup-1.png.webp",
  "/images/Partners/RELAXO.NS_BIG-0bc977b5-1.png",
  "/images/Partners/Reliance-Industries-Limited-RIL-Logo-1966-1.png",
];

export default function Partners() {
  const columnSpeeds = [18, 20, 22, 19, 21];

  const columns = Array.from({ length: 5 }, (_, colIndex) =>
    partnerLogos.filter((_, i) => i % 5 === colIndex)
  );

  return (
    <section
      id="partners"
      className="py-12 sm:py-20 md:py-28 overflow-hidden bg-[#d6e7e6]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <h2 className="text-center font-bold text-2xl sm:text-3xl mb-8 sm:mb-12">
          Our Partners in Change
        </h2>

        {/* Mobile-first: Horizontal Marquee for small screens */}
        <div className="md:hidden">
          <div className="relative overflow-hidden h-24">
            <div className="animate-marquee flex gap-4">
              {/* Duplicate the list to create a seamless loop */}
              {partnerLogos.concat(partnerLogos).map((logo, i) => (
                <div
                  key={i}
                  className="flex-shrink-0 w-28 h-20 flex items-center justify-center"
                >
                  <Image
                    src={logo}
                    alt={`Partner Logo ${i + 1}`}
                    width={112}
                    height={56}
                    className="object-contain w-auto h-full"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Desktop: Vertical Columns for medium screens and up */}
        <div className="hidden md:grid md:grid-cols-3 lg:grid-cols-5 gap-4 h-64 sm:h-72 mt-8">
          {columns.slice(0, 5).map((logos, colIndex) => (
            <div
              key={colIndex}
              className="relative overflow-hidden"
              style={{
                animation: `moveUp ${columnSpeeds[colIndex]}s linear infinite`,
              }}
            >
              <div className="flex flex-col items-center">
                {logos.map((logo, i) => (
                  <div
                    key={i}
                    className="h-20 sm:h-24 flex items-center justify-center p-1 sm:p-2"
                  >
                    <Image
                      src={logo}
                      alt={`Partner Logo ${i + 1}`}
                      width={120}
                      height={60}
                      className="object-contain w-auto h-full"
                    />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes moveUp {
          0% {
            transform: translateY(100%);
          }
          100% {
            transform: translateY(-100%);
          }
        }
        @keyframes marquee {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
      `}</style>
    </section>
  );
}
