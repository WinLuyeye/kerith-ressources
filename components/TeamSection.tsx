// components/DirectionSection.tsx
"use client";

import Image from "next/image";
import Link from "next/link";

const directors = [
  {
    name: "Mr. Fely Samuna",
    role: "Chairman, KR",
    image: "/images/gilbert.jpg",
    socials: {
      instagram: "#",
      facebook: "#",
      whatsapp: "#",
    },
    profileLink: "/direction/gilbert-fletche",
  },
];

export default function DirectionSection() {
  return (
    <section id="direction" className="bg-white py-24 px-5">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-[#1f2937]">Notre Direction</h2>
        <hr className="border-t-2 border-[#f87171] my-10 w-24" />
        <p className="text-[#6b7280] text-lg font-medium ">
          Découvrez les dirigeants qui pilotent Kerith Ressources, assurant stratégie, innovation et développement durable.
        </p>

        <div className="mt-16 grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {directors.map((member, idx) => (
            <Link
              key={idx}
              href={member.profileLink}
              className="flex flex-col  cursor-pointer"
            >
              <div className="relative w-[250px] h-[250px] o">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="mt-5 text-xl font-semibold text-[#1f2937]">{member.name}</h3>
              <p className="text-sm font-bold uppercase text-[#6b7280]">{member.role}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}