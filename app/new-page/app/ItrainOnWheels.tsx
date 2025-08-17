// components/ItrainOnWheels.tsx
"use client";

import Image from "next/image";

const ItrainOnWheels = () => {
  return (
    <section className="bg-gray-100 py-16 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* LEFT - TEXT */}
        <div>
          <h2 className="text-3xl font-extrabold uppercase text-black mb-6">
            iTrain on Wheels
          </h2>

          <p className="text-gray-800 mb-4 leading-relaxed">
            In the fast-paced and ever-evolving professional landscape,
            upskilling has become crucial for employees and workers to remain
            competitive and advance in their careers.
          </p>

          <p className="text-gray-800 mb-4 leading-relaxed">
            Since 2021, Berger Paints has joined hands with Smile Foundation
            through their CSR initiative to support the <strong>iTrain</strong>{" "}
            on Wheels programme, aimed at enhancing the painting skills of local
            painters. This project aims to provide painters across India with
            specialized training in various techniques, empowering them for more
            diverse employment opportunities and elevating their overall quality
            of life.
          </p>

          <p className="text-gray-800 leading-relaxed">
            <strong>iTrain</strong> on Wheels serves as a platform for painters
            to acquire new skills and improve their existing ones. The ultimate
            goal is to improve their livelihoods and create a positive impact on
            their overall well-being.
          </p>
        </div>

        {/* RIGHT - IMAGE or VIDEO */}
        <div className="flex justify-center">
          <div className="rounded-lg overflow-hidden shadow-lg max-w-md">
            <Image
              src="/images/new-page/ItrainOnWheels/maxresdefault-e1686719774260.jpg"
              alt="iTrain on Wheels"
              width={600}
              height={400}
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ItrainOnWheels;
