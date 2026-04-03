// components/TeamSection.tsx
"use client";

import Image from "next/image";
import { FaInstagram, FaFacebookF, FaWhatsapp } from "react-icons/fa";

const teamMembers = [
  {
    name: "Gilbert Fletche",
    role: "Financial Strategist",
    image: "/",
    socials: {
      instagram: "#",
      facebook: "#",
      whatsapp: "#",
    },
  },
  {
    name: "Olivia Rodriguez",
    role: "Financial Analyst",
    image: "/",
    socials: {
      instagram: "#",
      facebook: "#",
      whatsapp: "#",
    },
  },
];

export default function TeamSection() {
  return (
    <section
      id="team"
      className="bg-orange-50 py-24 px-5"
    >
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-orange-700">Our Team</h2>
        <hr className="border-orange-200 my-10 w-24 mx-auto" />
        <p className="text-orange-700 text-lg font-medium max-w-2xl mx-auto">
          Lorem ipsum dolor sit amet, at mei dolore tritani repudiandae. In his nemore temporibus consequuntur, vim ad prima vivendum consetetur.
        </p>

        <div className="mt-16 grid gap-10 md:grid-cols-2 lg:grid-cols-3 justify-items-center">
          {teamMembers.map((member, idx) => (
            <div key={idx} className="flex flex-col items-center">
              <div className="relative w-36 h-36 rounded-full overflow-hidden">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="mt-5 text-xl font-semibold text-orange-700">{member.name}</h3>
              <p className="text-sm font-bold uppercase text-orange-900">{member.role}</p>
              <div className="flex space-x-4 mt-5 text-orange-700 text-xl">
                <a href={member.socials.instagram} target="_blank" rel="noopener noreferrer">
                  <FaInstagram />
                </a>
                <a href={member.socials.facebook} target="_blank" rel="noopener noreferrer">
                  <FaFacebookF />
                </a>
                <a href={member.socials.whatsapp} target="_blank" rel="noopener noreferrer">
                  <FaWhatsapp />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}