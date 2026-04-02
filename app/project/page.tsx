// components/Project.tsx
'use client';

const Project = () => {
  const highlights = [
    {
      title: 'Prospection',
      description: 'Nous examinons en profondeur les gisements, estimons leurs réserves et déterminons leur valeur.',
      stat: '30',
      statLabel: 'Concessions minières',
      imageBg: 'bg-gradient-to-br from-green-900 to-green-700',
    },
    {
      title: 'Localisation',
      description: 'Situé dans le territoire de Luozi, province du Kongo-Central, avec un accès stratégique aux infrastructures de transport.',
      stat: 'Luozi',
      statLabel: 'Territoire stratégique',
      imageBg: 'bg-gradient-to-br from-blue-900 to-blue-700',
    },
    {
      title: 'Accès à l\'énergie',
      description: 'Bénéficie d\'un accès privilégié aux barrages d\'Inga et de Zongo pour une alimentation électrique stable et durable.',
      stat: 'Inga & Zongo',
      statLabel: 'Sources hydroélectriques',
      imageBg: 'bg-gradient-to-br from-yellow-900 to-yellow-700',
    },
    {
      title: 'Potentiel d\'exploitation',
      description: 'Minéralisation à haute teneur en manganèse avec des échantillons atteignant 45.24% Mn, offrant un excellent retour sur investissement.',
      stat: '45.24%',
      statLabel: 'Teneur en Mn',
      imageBg: 'bg-gradient-to-br from-purple-900 to-purple-700',
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Nos <span className="text-green-600">Atouts</span>
          </h2>
          <div className="w-20 h-1 bg-green-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((item, index) => (
            <div
              key={index}
              className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              {/* En-tête coloré */}
              <div className={`${item.imageBg} h-32 flex items-center justify-center relative overflow-hidden`}>
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
                <div className="text-center text-white relative z-10">
                  <div className="text-4xl font-bold">{item.stat}</div>
                  <div className="text-xs opacity-90 mt-1">{item.statLabel}</div>
                </div>
              </div>

              {/* Corps */}
              <div className="p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-green-600 transition-colors">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  {item.description}
                </p>
                <button className="text-green-600 text-sm font-semibold inline-flex items-center group-hover:text-green-700">
                  En savoir plus...
                  <svg
                    className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Bandeau supplémentaire */}
        <div className="mt-12 bg-green-600 rounded-xl p-6 text-white text-center">
          <p className="text-lg font-semibold">
            Un potentiel minier exceptionnel au service du développement de la RDC
          </p>
        </div>
      </div>
    </section>
  );
};

export default Project;