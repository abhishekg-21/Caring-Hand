import Image from "next/image";

const stories = [
  {
    name: "GEETA",
    text: "My childhood was not about balloons, toy cars or kites. In the last days of every month, we usually had no money.",
    image: "/images/new-page/StoriesOfChange/geeta-e1678097508694.jpg.webp", // replace with local image path
  },
  {
    name: "DIPTI",
    text: "Knowing that my care, touch, and time can help a patient make it through the night is one of most rewarding feelings",
    image: "/images/new-page/StoriesOfChange/dipti-e1678097274334.jpg.webp",
  },
  {
    name: "SARITA",
    text: "If you lost a little weight, you would look so beautiful; for a girl, it’s important – don’t you want to get married to a",
    image: "/images/new-page/StoriesOfChange/sarita-1.jpg.webp",
  },
];

const StoriesOfChange = () => {
  return (
    <section className="bg-white py-16 px-4">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl font-extrabold uppercase text-black mb-12">
          Stories of Change
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {stories.map((story, index) => (
            <div
              key={index}
              className="bg-[#f5f5f5] rounded-md shadow-sm px-6 py-8 flex flex-col justify-between items-start border-b-[4px] border-lime-400"
            >
              <h3 className="text-md font-bold uppercase mb-4">{story.name}</h3>
              <div className="flex gap-4 mb-6">
                <Image
                  src={story.image}
                  alt={story.name}
                  width={100}
                  height={100}
                  className="object-cover rounded-sm"
                />
                <p className="text-left text-sm text-gray-800">{story.text}</p>
              </div>
              <button className="bg-white text-lime-600 font-semibold text-sm border border-lime-300 px-4 py-2 rounded-md hover:bg-lime-100 transition">
                READ MORE
              </button>
            </div>
          ))}
        </div>

        <div className="mt-12">
          <button className="bg-lime-500 text-white px-6 py-2 rounded-full font-medium hover:bg-lime-600 transition">
            VIEW ALL
          </button>
        </div>
      </div>
    </section>
  );
};

export default StoriesOfChange;
