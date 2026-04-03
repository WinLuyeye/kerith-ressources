// components/Actualites.tsx
'use client';

import Image from "next/image";

export default function Actualites() {
  const cards = [
    {
      img: "",
      title: "Intelligent Automation",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut feugiat aliquet convallis. Morbi cursus scelerisque est.",
      link: "#",
    },
    {
      img: "",
      title: "Immersive User Interface",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut feugiat aliquet convallis. Morbi cursus scelerisque est.",
      link: "#",
    },
    {
      img: "",
      title: "Real-time Collaboration",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut feugiat aliquet convallis. Morbi cursus scelerisque est.",
      link: "#",
    },
  ];

  return (
    <section
      id="features"
      className="w-full bg-gray-100 pt-[90px] pb-[90px] px-5"
    >
      <div className="max-w-[1200px] mx-auto">
        {/* Heading */}
        <div className="flex flex-col items-center mb-16">
          <h2 className="text-[2.5rem] text-center text-[#1f2937] mb-5">
            A few things we’re great at
          </h2>
          <div className="py-2">
            <hr className="border-t-2 border-[#003233] w-16 mx-auto" />
          </div>
          <p className="text-center text-[#1f2937] text-lg font-medium max-w-2xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut feugiat aliquet convallis. Morbi cursus scelerisque est, a sodales mi fringilla sit amet.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {cards.map((card, index) => (
            <div key={index} className="flex flex-col items-start">
              <div className="relative w-full h-[250px] sm:h-[300px] lg:h-[350px] mb-4">
                <Image
                  src={card.img}
                  alt={card.title}
                  fill
                  style={{ objectFit: "cover" }}
                  className="rounded-md"
                  priority={index === 0}
                />
              </div>
              <h3 className="text-[#1f2937] text-xl font-semibold mb-2">{card.title}</h3>
              <p className="text-[#1f2937] text-base font-light leading-relaxed mb-3">{card.text}</p>
              <a
                href={card.link}
                className="text-[#f87171] font-bold underline hover:text-[#f59e0b] transition-colors"
              >
                Read more
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}