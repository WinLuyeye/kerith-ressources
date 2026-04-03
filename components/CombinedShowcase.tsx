// components/CombinedShowcase.tsx
'use client';

import Image from "next/image";

export default function CombinedShowcase() {
  const sections = [
    {
      title: "Dynamic Design Showcase",
      subtitle: "Innovative & Modern",
      text1:
        "Donec volutpat vel ipsum at posuere. Mauris vitae vulputate erat viverra, pretium massa. Curabitur posuere at lorem vel ullamcorper.",
      text2:
        "Phasellus justo risus, dignissim sit amet tellus ac, accumsan hendrerit mauris. Nullam ultricies, urna cursus facilisis posuere, diam nisl egestas erat, vitae posuere est quam ut diam.",
      img: "/",
      reverse: false,
    },
    {
      title: "Collaborative Project Hub",
      subtitle: "Teamwork & Efficiency",
      text1:
        "Donec volutpat vel ipsum at posuere. Mauris vitae vulputate erat viverra, pretium massa. Curabitur posuere at lorem vel ullamcorper.",
      text2:
        "Phasellus justo risus, dignissim sit amet tellus ac, accumsan hendrerit mauris. Nullam ultricies, urna cursus facilisis posuere, diam nisl egestas erat, vitae posuere est quam ut diam.",
      img: "/",
      reverse: true,
    },
  ];

  return (
    <section className="w-full bg-white">
      <div className="max-w-[1200px] mx-auto flex flex-col gap-32 py-24 px-5">
        {sections.map((section, index) => (
          <div
            key={index}
            className={`flex flex-col md:flex-row items-center gap-10 ${
              section.reverse ? "md:flex-row-reverse" : ""
            }`}
          >
            {/* Image */}
            <div className="relative w-full md:w-1/2 h-[400px] sm:h-[500px] md:h-[600px] rounded-md overflow-hidden">
              <Image
                src={section.img}
                alt={section.title}
                fill
                style={{ objectFit: "cover" }}
                priority={index === 0}
              />
            </div>

            {/* Texte */}
            <div className="w-full md:w-1/2 flex flex-col justify-center px-5">
              <h2 className="text-3xl md:text-4xl font-semibold text-[#1f2937] mb-2">
                {section.title}
              </h2>
              <h3 className="text-xl md:text-2xl font-medium text-[#6b7280] mb-4">
                {section.subtitle}
              </h3>
              <div className="mb-4">
                <hr className="border-t-2 border-[#f87171] w-16" />
              </div>
              <p className="text-[#1f2937] text-lg font-medium mb-2">{section.text1}</p>
              <p className="text-[#1f2937] text-base font-light leading-relaxed mb-4">{section.text2}</p>
              <a
                href="#"
                className="text-[#f87171] font-bold underline hover:text-[#f59e0b] transition-colors"
              >
                Read more
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}