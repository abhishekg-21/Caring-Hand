import Image from "next/image";

const ImpactSection = () => {
  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-extrabold uppercase mb-8 text-black">
          IMPACT 2023-24
        </h2>

        <div className="flex flex-col lg:flex-row gap-10 items-start">
          {/* Left: Image */}
          <div className="w-full lg:w-1/2">
            <Image
              src="/images/new-page/ImpactSection/day-four-15-1-768x575.jpg.webp"
              alt="Impact"
              width={600}
              height={400}
              className="rounded-md w-full object-cover"
            />
          </div>

          {/* Right: Stats */}
          <div className="w-full lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6 lg:mt-0">
            {/* Stat 1 */}
            <div>
              <p className="text-4xl font-bold text-green-600">9,000</p>
              <p className="text-base font-semibold text-black">
                youth were trained, 5500 were placed
              </p>
            </div>

            {/* Stat 2 */}
            <div>
              <p className="text-4xl font-bold text-green-600">1,00,000+</p>
              <p className="text-base font-semibold text-black">
                painters were upskilled in 25 states across India
              </p>
            </div>

            {/* Stat 3 */}
            <div>
              <p className="text-4xl font-bold text-gray-700">96%</p>
              <p className="text-base text-gray-500">
                enrollees qualified to receive the STeP certification
              </p>
            </div>

            {/* Stat 4 */}
            <div>
              <p className="text-4xl font-bold text-gray-700">800+</p>
              <p className="text-base text-gray-500">
                career counseling sessions & industry exposure visits
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImpactSection;
