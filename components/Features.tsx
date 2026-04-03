// components/ServicesSection.tsx

import Link from "next/link";
import { LucidePickaxe, Factory, TrendingUp, Users } from "lucide-react";

const services = [
  {
    title: "Prospection",
    description:
      "Nous examinons en profondeur les gisements, estimons leurs réserves et déterminons leur valeur.",
    link: "https://gecamines.cd/prospection",
    icon: LucidePickaxe,
  },
  {
    title: "Exploitation",
    description:
      "Les activités sont organisées au Sud-Est de la RDC en plusieurs groupes miniers stratégiques.",
    link: "https://gecamines.cd/prospection-et-exploitation/",
    icon: Factory,
  },
  {
    title: "Optimisation financière",
    description:
      "Essentielle pour assurer notre succès et notre croissance dans le secteur minier.",
    link: "https://gecamines.cd/optimisation-financiere",
    icon: TrendingUp,
  },
  {
    title: "Capital humain",
    description:
      "Le bien-être des équipes améliore la productivité et la performance globale.",
    link: "https://gecamines.cd/social",
    icon: Users,
  },
];

export default function Features() {
  return (
    <section className="-py-16 bg-white">
      <div className="max-w-7xl mx-auto">
        
        {/* GRID */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <div
                key={index}
                className="relative bg-gray-100 p-8 pt-12 duration-300 group"
              >
                {/* ICON */}
                <div className="absolute -top-16 right-24 bg-[#003233] text-white p-3">
                  <Icon size={70} />
                </div>

                {/* CONTENT */}
                <h3 className="text-2xl font-semibold mb-3 text-gray-900 group-hover:text-[#003233]-colors">
                  {service.title}
                </h3>

                <p className="text-base font-light text-black mb-6 ">
                  {service.description}
                </p>

                {/* BUTTON */}
                <Link
                  href={service.link}
                  className="text-sm font-medium text-[#003233] hover:underline"
                >
                  En savoir plus →
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}