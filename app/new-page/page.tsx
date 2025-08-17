// // app/livelihood/page.tsx
// "use client";

// import Image from "next/image";
// import Link from "next/link";

// export default function LivelihoodPage() {
//   return (
//     <div className="font-sans">
//       {/* Hero Section */}
//       <section className="relative w-full h-[100vh]">
//         <Image
//           src="/images/livelihood-banner.jpg" // Replace with your actual banner image
//           alt="Skilled Workforce. Dignified Livelihood"
//           fill
//           className="object-cover"
//         />
//         <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
//           <h1 className="text-white text-4xl md:text-6xl font-bold text-center px-4">
//             SKILLED WORKFORCE. DIGNIFIED LIVELIHOOD
//           </h1>
//         </div>
//       </section>

//       {/* WHY SKILLING */}
//       <section className="py-12 px-6 max-w-6xl mx-auto">
//         <h2 className="text-xl font-semibold mb-4">WHY SKILLING?</h2>
//         <p className="text-gray-700 text-lg">
//           The youth, who constitute over 60% of India's population, is full of
//           untapped potential. However, a major part of it is unemployable due to
//           lack of proper education and skill training...
//         </p>
//       </section>

//       {/* WHAT WE DO */}
//       <section className="bg-green-100 py-12 px-6">
//         <div className="max-w-6xl mx-auto">
//           <h2 className="text-xl font-semibold mb-4">WHAT WE DO</h2>
//           <p className="text-gray-800 text-lg">
//             Smile Foundation trains underprivileged youth in market-oriented job
//             skills and places them in sectors like retail, hospitality, BPO,
//             healthcare, and more. Training also includes life skills, financial
//             literacy, and digital literacy.
//           </p>
//         </div>
//       </section>

//       {/* COURSES MODULE */}
//       <section className="py-12 px-6 max-w-6xl mx-auto text-center">
//         <h2 className="text-xl font-semibold mb-10">COURSES MODULE</h2>
//         <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
//           {[
//             { id: "02", name: "Retail", icon: "/icons/retail.png" },
//             { id: "04", name: "Hospitality", icon: "/icons/hospitality.png" },
//             { id: "06", name: "Digital Marketing", icon: "/icons/digital.png" },
//             { id: "07", name: "IT", icon: "/icons/it.png" },
//             { id: "03", name: "Banking", icon: "/icons/banking.png" },
//             { id: "05", name: "BPO", icon: "/icons/bpo.png" },
//           ].map((item) => (
//             <div key={item.id} className="flex flex-col items-center">
//               <Image src={item.icon} alt={item.name} width={60} height={60} />
//               <p className="mt-2 font-medium">{item.name}</p>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* HOW WE WORK */}
//       <section className="bg-gray-100 py-12 px-6">
//         <div className="max-w-6xl mx-auto text-center">
//           <h2 className="text-xl font-semibold mb-10">HOW WE WORK</h2>
//           <div className="grid grid-cols-3 md:grid-cols-6 gap-6">
//             {[
//               "Mobilization",
//               "Resources",
//               "Training",
//               "Industry Linkages",
//               "Career Progression",
//               "Post Placement",
//             ].map((label, i) => (
//               <div key={i} className="flex flex-col items-center">
//                 <div className="w-16 h-16 bg-white border rounded-full flex items-center justify-center mb-2">
//                   {/* Replace with icons */}
//                   <span className="text-lg font-bold">{i + 1}</span>
//                 </div>
//                 <p>{label}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* More sections continue... */}
//       {/* Add Employment Partners, iTrain on Wheels, Reach, Stories, Blogs, etc. */}
//     </div>
//   );
// }

import HeroSlider from "./app/HeroSlider";
import SkillingSection from "./app/SkillingSection";
import CoursesModule from "./app/CoursesModule";
import HowWeWork from "./app/HowWeWork";
import ImpactSection from "./app/ImpactSection";
import EmploymentPartners from "./app/EmploymentPartners";
import ItrainOnWheels from "./app/ItrainOnWheels";
import ReachPresence from "./app/ReachPresence";
import StoriesOfChange from "./app/StoriesOfChange";
import CSRPartners from "./app/CSRPartners";
import InspireUs from "./app/InspireUs";

export default function LivelihoodPage() {
  return (
    <>
      <HeroSlider />
      <SkillingSection />
      <CoursesModule />
      <HowWeWork />
      <ImpactSection />
      <EmploymentPartners />
      <ItrainOnWheels />
      <ReachPresence />
      <StoriesOfChange />
      <CSRPartners />
      <InspireUs />
    </>
  );
}
