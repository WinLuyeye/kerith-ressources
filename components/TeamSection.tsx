// components/DirectionSection.tsx
"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const directors = [
  {
    name: "Mr. Fely Samuna",
    role: "Chairman, KR",
    image: "https://ccikc.org/wp-content/uploads/2021/12/team-250x300.jpg",
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
    <section id="direction" className="bg-white py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-extrabold text-[#1f2937] mb-4">
          Notre Direction
        </h2>
        <motion.hr
          initial={{ width: 0 }}
          whileInView={{ width: "160px" }}
          transition={{ duration: 0.8 }}
          className="border-t-2 border-[#cf8e02]"
        />
        <p className="text-[#6b7280] text-lg font-medium mt-4">
          Découvrez les dirigeants qui pilotent Kerith Ressources, assurant
          stratégie, innovation et développement durable.
        </p>

        <div className="mt-16 grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {directors.map((member, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              whileHover={{ scale: 1.05 }}
              className="flex flex-col items-center cursor-pointer"
            >
              <Link
                href="#"
                className="flex flex-col"
              >
                <div className="relative w-[250px] h-[250px] overflow-hidden">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="max-w-fit"
                  />
                </div>
                <h3 className="mt-5 text-xl font-semibold text-[#1f2937]">
                  {member.name}
                </h3>
                <p className="text-sm font-extrabold uppercase text-[#6b7280]">
                  {member.role}
                </p>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
