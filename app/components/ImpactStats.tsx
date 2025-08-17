"use client";

export default function ImpactSection() {
  return (
    <section className="bg-gray-100 py-12 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto text-center">
        {/* Title */}
        <h2 className="text-3xl sm:text-4xl font-extrabold text-black mb-8 sm:mb-12">
          OUR IMPACT
        </h2>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-y-10 gap-x-6">
          {/* Item 1 */}
          <div>
            <p className="text-green-500 text-4xl sm:text-5xl font-extrabold">
              20+
            </p>
            <p className="text-green-600 text-base sm:text-lg font-semibold">
              LAC
            </p>
            <p className="text-gray-700 text-xs sm:text-sm mt-1">
              children and their families are impacted every year
            </p>
          </div>

          {/* Item 2 */}
          <div>
            <p className="text-green-500 text-4xl sm:text-5xl font-extrabold">
              2000+
            </p>
            <p className="text-green-600 text-base sm:text-lg font-semibold">
              VILLAGES
            </p>
            <p className="text-gray-700 text-xs sm:text-sm mt-1">
              and slums are reached out to across the country
            </p>
          </div>

          {/* Item 3 */}
          <div>
            <p className="text-green-500 text-4xl sm:text-5xl font-extrabold">
              400+
            </p>
            <p className="text-green-600 text-base sm:text-lg font-semibold">
              PROJECTS
            </p>
            <p className="text-gray-700 text-xs sm:text-sm mt-1">
              focused on education, healthcare, and women empowerment
            </p>
          </div>

          {/* Item 4 */}
          <div>
            <p className="text-green-500 text-4xl sm:text-5xl font-extrabold">
              27+
            </p>
            <p className="text-green-600 text-base sm:text-lg font-semibold">
              STATES
            </p>
            <p className="text-gray-700 text-xs sm:text-sm mt-1">
              are reached including the remotest areas
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
