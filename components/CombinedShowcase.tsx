// components/CombinedShowcase.tsx
'use client';

import Image from "next/image";

export default function CombinedShowcase() {
  const sections = [
    {
      title: "NDOKOLO",
      subtitle: "Régulation des défauts avec concentration résiduelle",
      text1: "Le site de Ndokolo présente une minéralisation contrôlée par des failles géologiques, où les processus résiduels ont concentré le manganèse à la surface.",
      text2: "Échantillon flottant (non in situ) : NDK01 avec une teneur exceptionnelle de 45.24% Mn, indiquant un potentiel intéressant pour l’exploitation minière responsable.",
      img: "/",
      reverse: false,
    },
    {
      title: "MBONDIKA",
      subtitle: "Mn massif de haute qualité (colluvial)",
      text1: "Mbondika est caractérisée par une minéralisation massive de haute teneur en manganèse, formée par des dépôts colluviaux concentrés par gravité.",
      text2: "Échantillon composite MDK01 : 43% Mn, illustrant la richesse du gisement et son intérêt pour des projets miniers à forte valeur ajoutée.",
      img: "/",
      reverse: true,
    },
  ];

  return (
    <section className="w-full bg-gray-50">
      <div className="max-w-[1200px] mx-auto flex flex-col gap-16 py-24 px-5">
        {/* Titre de la section */}
        <div className=" mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-4">
            Sites Miniers Stratégiques
          </h2>
                    <hr className="border-t-2 border-[#cf8e02] w-42 mb-6"/>
          <p className="text-gray-500 text-lg md:text-xl">
            Nous développons des projets miniers à forte valeur ajoutée, alliant exploitation responsable et innovation durable.
          </p>
        </div>

        {sections.map((section, index) => (
          <div
            key={index}
            className={`flex flex-col md:flex-row items-center gap-10 ${
              section.reverse ? "md:flex-row-reverse" : ""
            }`}
          >
            {/* Image */}
            <div className="relative w-full md:w-1/2 h-[400px] sm:h-[500px] md:h-[600px] rounded-lg overflow-hidden">
              <Image
                src={section.img}
                alt={section.title}
                fill
                style={{ objectFit: "cover" }}
                priority={index === 0}
                className="rounded-lg"
              />
            </div>

            {/* Texte */}
            <div className="w-full md:w-1/2 flex flex-col justify-center px-5">
              <h3 className="text-3xl md:text-4xl font-extrabold text-gray-800 mb-2">
                {section.title}
              </h3>
              <h4 className="text-xl md:text-2xl font-semibold text-gray-500 mb-4">
                {section.subtitle}
              </h4>
              <div className="mb-4">
                <hr className="border-t-2 border-[#f87171] w-16" />
              </div>
              <p className="text-gray-700 text-lg font-medium mb-2">{section.text1}</p>
              <p className="text-gray-700 text-base font-light leading-relaxed mb-4">{section.text2}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}