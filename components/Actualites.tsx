// components/Actualites.tsx
'use client';

import Image from "next/image";

export default function Actualites() {
  const news = [
    {
      img: "https://www.primature.gouv.cd/wp-content/uploads/2025/07/WhatsApp-Image-2025-07-08-at-10.48.36-scaled.jpeg", 
      title: "Kerith Ressources signe un nouveau partenariat",
      text: "Kerith Ressources a conclu un accord stratégique pour développer ses opérations minières avec un accent sur la durabilité et l’innovation.",
      link: "#",
    },
    {
      img: "https://www.primature.gouv.cd/wp-content/uploads/2025/07/WhatsApp-Image-2025-07-08-at-10.48.36-scaled.jpeg",
      title: "Lancement du projet Ndokolo",
      text: "Le projet minier de Ndokolo démarre avec des échantillons prometteurs contenant jusqu’à 45% de manganèse, illustrant le potentiel de la région.",
      link: "#",
    },
    {
      img: "https://www.primature.gouv.cd/wp-content/uploads/2025/07/WhatsApp-Image-2025-07-08-at-10.48.36-scaled.jpeg",
      title: "Mbondika : exploration avancée",
      text: "Les études à Mbondika révèlent une minéralisation massive en manganèse, ouvrant la voie à de futurs projets miniers à forte valeur ajoutée.",
      link: "#",
    },
  ];

  return (
    <section id="actualites" className="w-full bg-gray-100 pt-[90px] pb-[90px] px-5">
      <div className="max-w-[1200px] mx-auto">
        {/* Heading */}
        <div className="flex flex-col mb-16">
          <h2 className="text-4xl md:text-5xl text-gray-800 font-extrabold mb-4">
            Dernières Nouvelles
          </h2>
          <div className="py-2">
            <hr className=" w-16 mx-auto" />
          </div>
          <p className="text-gray-600 text-lg md:text-xl font-medium max-w-2xl mt-4">
            Restez informé des derniers développements de Kerith Ressources, de nos projets miniers et de nos initiatives stratégiques.
          </p>
        </div>

        {/* News Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {news.map((item, index) => (
            <div key={index} className="overflow-hidden flex flex-col">
              <div className="relative w-full h-[250px] sm:h-[300px] lg:h-[250px]">
                <Image
                  src={item.img}
                  alt={item.title}
                  fill
                  style={{ objectFit: "cover" }}
                  priority={index === 0}
                />
              </div>
              <div className="py-5 flex flex-col flex-1">
                <h3 className="text-gray-800 text-xl font-semibold mb-3">{item.title}</h3>
                <p className="text-gray-600 text-base font-light mb-4 leading-relaxed flex-1">{item.text}</p>
                <a
                  href={item.link}
                  className="text-[#f87171] font-bold underline hover:text-[#f59e0b] transition-colors mt-auto"
                >
                  Lire la suite
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}