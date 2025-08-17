import Image from "next/image";

export default function Accreditations() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Title */}
        <h2 className="text-3xl font-extrabold uppercase text-center mb-12">
          Empanelment & Accreditations
        </h2>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="bg-gray-100 rounded-xl p-6 shadow-md text-left">
            <Image
              src="/images/Accreditations/1-1.jpg" // Upload this image to public/
              alt="GuideStar India Platinum"
              width={300}
              height={200}
              className="mx-auto mb-6"
            />
            <div className="font-semibold mb-2">
              Smile Foundation has been accredited as a Guidestar India Platinum
            </div>
            <p className="text-sm text-gray-700">
              The accreditation recognizes and verifies the transparency and
              public accountability of organizations.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-gray-100 rounded-xl p-6 shadow-md text-left">
            <Image
              src="/images/Accreditations/2-1.jpg" // Upload this image to public/
              alt="CAF International"
              width={300}
              height={200}
              className="mx-auto mb-6"
            />
            <div className="font-semibold mb-2">
              Smile Foundation has been accredited as a Charities Aid Foundation
              (CAF) America
            </div>
            <p className="text-sm text-gray-700">
              The validation is extended to organizations on basis of a 100
              point due diligence review.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-gray-100 rounded-xl p-6 shadow-md text-left">
            <Image
              src="/images/Accreditations/3-1.jpg" // Upload this image to public/
              alt="United Nations Consultative Status"
              width={300}
              height={200}
              className="mx-auto mb-6"
            />
            <div className="font-semibold mb-2">
              Special Consultative Status with the United Nations Economic and
              Social Council
            </div>
            <p className="text-sm text-gray-700">
              Organization in Special Consultative Status with the United
              Nations Economic and Social Council (ECOSOC) since{" "}
              <strong>2012</strong>
            </p>
          </div>
        </div>

        {/* Footer Link */}
        <div className="text-center mt-10">
          <a href="#" className="text-green-600 font-medium text-sm underline">
            know more &gt;
          </a>
        </div>
      </div>
    </section>
  );
}
