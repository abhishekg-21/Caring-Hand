import Image from "next/image";

const steps = [
  {
    label: "Mobilisation",
    icon: "/images/new-page/HowWeWork/mobilization.png",
  },
  { label: "Enrolment", icon: "/images/new-page/HowWeWork/enrolment.png" },
  {
    label: "Livelihood Skills Training (3/4 months)",
    icon: "/images/new-page/HowWeWork/training.png",
  },
  {
    label: "Industry Exposure",
    icon: "/images/new-page/HowWeWork/industry.png.webp",
  },
  {
    label: "Career Counseling",
    icon: "/images/new-page/HowWeWork/career.png.webp",
  },
  {
    label: "Placement Support",
    icon: "/images/new-page/HowWeWork/placement.png.webp",
  },
  {
    label: "Post-Placement Support",
    icon: "/images/new-page/HowWeWork/Layer-7.png",
  },
];

const HowWeWork = () => {
  return (
    <section className="bg-gray-200 py-16">
      <div className="max-w-7xl h-[330px] mx-auto px-4 text-center">
        <h2 className="text-3xl font-extrabold uppercase mb-12 text-black">
          How We Work
        </h2>

        <div className="flex flex-wrap justify-center gap-6">
          {steps.map((step, index) => (
            <div
              key={index}
              className="flex flex-col items-center w-36 text-center"
            >
              {/* Alternating colors */}
              <div
                className={`w-35 h-40 rounded-full flex items-center justify-center mb-3 ${
                  index % 2 === 0 ? "bg-white" : "bg-green-300"
                }`}
              >
                <Image
                  src={step.icon}
                  alt={step.label}
                  width={80}
                  height={80}
                  className="object-contain"
                />
              </div>
              <p className="text-sm font-medium text-black">{step.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowWeWork;
