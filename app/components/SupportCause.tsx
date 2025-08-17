import Image from "next/image";
import Link from "next/link";

const causes = [
  {
    title: "Tayyari Kal Ki",
    img: "/images/SupportCause/Tayyari-Kal-Ki-1-e1662546538529.png",
    copy: "Career readiness & skilling for youth.",
    link: "/tayyari-kal-ki",
  },
  {
    title: "Health Cannot Wait",
    img: "/images/SupportCause/Health-Cannot-Wait-2-e1662546609209-1.png",
    copy: "Medical outreach for underserved communities.",
    link: "/health-cannot-wait",
  },
  {
    title: "Shiksha Na Ruke",
    img: "/images/SupportCause/Shiksha-na-ruke-1-e1662546701472-1.png",
    copy: "Helping children continue education.",
    link: "/shiksha-na-ruke",
  },
  {
    title: "She Can Fly",
    img: "/images/SupportCause/sHE-cAN-fLY-1.jpg",
    copy: "Empowering girls to soar.",
    link: "/she-can-fly",
  },
];

export default function SupportCause() {
  return (
    <section id="support" className="py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <h2 className="text-center text-2xl md:text-3xl font-bold mb-8">
          Support a Cause
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
          {causes.map((c) => (
            <div
              key={c.title}
              className="card overflow-hidden rounded-lg shadow-md"
            >
              <Link href={c.link}>
                <div className="relative aspect-video overflow-hidden rounded-t-lg group">
                  <Image
                    src={c.img}
                    alt={c.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-opacity-40 flex items-end p-4 transition-opacity duration-300">
                    <h3 className="text-white text-xl text-left uppercase font-extrabold leading-snug">
                      {c.title}
                    </h3>
                  </div>
                </div>
              </Link>
              <div className="p-4 bg-white">
                <p className="text-sm text-gray-600">{c.copy}</p>
                <Link
                  href={c.link}
                  className="inline-block mt-3 text-green-600 font-semibold hover:underline"
                >
                  Know More →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
