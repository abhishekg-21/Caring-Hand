import Image from "next/image";

const ReachPresence = () => {
  return (
    <section className="bg-white py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-extrabold uppercase text-black mb-10">
          Reach & Presence
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left Box - Projects */}
          <div className="bg-[#98beb9] p-8 flex flex-col items-center text-center">
            <div className="text-7xl font-extrabold text-[#ffff2e] mb-2">
              82
            </div>
            <div className="uppercase text-white font-bold text-sm mb-4">
              Projects
            </div>
            <Image
              src="/images/new-page/ReachPresence/Layer-17-copy-2.png.webp" // Replace with your local path
              alt="Projects Icon"
              width={120}
              height={120}
              className="object-contain"
            />
          </div>

          {/* Right Box - States */}
          <div className="bg-[#98beb9] p-8 flex flex-col items-center text-center">
            <div className="text-7xl font-extrabold text-[#ffff2e] mb-2">8</div>
            <div className="uppercase text-white font-bold text-sm mb-4">
              States
            </div>
            <Image
              src="/images/new-page/ReachPresence/iconss.png.webp" // Replace with your local path
              alt="States Icon"
              width={120}
              height={120}
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReachPresence;
