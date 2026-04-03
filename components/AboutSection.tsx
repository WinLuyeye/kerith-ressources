// components/About.tsx
"use client";

import Image from "next/image";
import Link from "next/link";

export default function AboutSection() {
  return (
    <section id="about" className="w-full pt-[90px] pb-[90px] px-5 bg-white">
      <div className="max-w-[1200px] mx-auto">
        <div className="flex flex-col lg:flex-row items-center lg:space-x-10">
          {/* Texte */}
          <div className="lg:w-5/12 flex flex-col justify-center">
            <h2 className="text-[2.5rem] text-[#1f2937] mb-1">A propos</h2>

            <div className="py-4">
              <hr className="border-t-2 border-[#003233] w-16" />
            </div>

            <p className="text-[#1f2937] text-lg font-medium mb-4">
              KERITH RESSOURCES SARL
            </p>

            <p className="text-[#1f2937] text-base font-light leading-relaxed mb-6">
              KERITH RESOURCES SARL est une société minière de droit congolais
              qui détient trente (30) concessions situées dans le territoire de
              Luozi, en province du Kongo-Central. La société a obtenu le Permis
              de Recherches n°16000, couvrant 15 carrés miniers, et bénéficie de
              droits exclusifs pour prospecter et rechercher des substances
              minérales telles que le fer, le cuivre, la bauxite et l’or ...
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/about"
                className="cursor-pointer bg-[#003233] text-white px-10 py-5 uppercase text-sm font-light hover:bg-white hover:text-[#003233] hover:border hover:border-[#003233]"
              >
                A savoir plus
              </Link>
            </div>
          </div>

          {/* Image avec next/image */}
          <div className="lg:w-7/12 mt-10 lg:mt-0 relative w-full h-[400px] sm:h-[500px] lg:h-[600px]">
            <Image
              src="/public/logo2.png"
              fill
              style={{ objectFit: "cover" }}
              className="rounded-md"
              priority
              alt={""}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
