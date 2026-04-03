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
    <section className="relative z-20 px-6 bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto">
        
        {/* GRID */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <div
                key={index}
                className="relative bg-gray-200 p-8 pt-16 duration-300 group "
              >
                {/* ICON CENTERED */}
                <div className="absolute -top-12 left-1/2 -translate-x-1/2 bg-[#003233] text-white p-4 ">
                  <Icon size={50} />
                </div>

                {/* CONTENT */}
                <h3 className="text-2xl font-semibold mb-3 text-gray-900  group-hover:text-[#003233]">
                  {service.title}
                </h3>

                <p className="text-base font-light text-black mb-6 ">
                  {service.description}
                </p>

                {/* BUTTON */}
                <div className="">
                  <Link
                    href={service.link}
                    className="text-sm font-extrabold text-[#003233] hover:underline"
                  >
                    En savoir plus →
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}