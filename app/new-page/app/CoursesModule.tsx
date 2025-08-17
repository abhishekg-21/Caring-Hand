import Image from "next/image";

const CoursesModule = () => {
  return (
    <section className="pt-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 text-left">
        <h2 className="text-3xl font-extrabold uppercase mb-8">
          Courses Module
        </h2>

        <div className="w-full h-full">
          <Image
            src="/images/new-page/CourseModule/Untitled-1-1-e1676357186165-1980x909.png.webp"
            alt="Course Icon"
            width={2000}
            height={800}
            className="object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default CoursesModule;
