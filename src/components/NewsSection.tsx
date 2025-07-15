const newsItems = [
  {
    title: "Journée d’Accueil et d’Intégration",
    description: "Des Professionnels de santé nouvellement recrutés.",
    image: "/images/news/accueil-s2-1.jpeg",
    date: "FÉV 2025"
  },
  {
    title: "Intégration du personnel Infirmier",
    description: "Nouvellement recrutés, un seul centre, une seule équipe.",
    image: "/images/news/accueil-s2-3.png",
    date: "FÉV 2025"
  },
  {
    title: "Formation en Langue Amazighe",
    description: "Sessions dédiées au personnel CHU et enseignants.",
    image: "/images/news/accueil-s2-4.jpeg",
    date: "FÉV 2025"
  },
  {
    title: "Horaires Ramadan 1446 AH / 2025 AD",
    description: "Annonce concernant l’ouverture pendant le mois béni.",
    image: "/images/news/accueil-s2-5.jpg",
    date: "FÉV 2025"
  }, 
  {
    title: "Assises Franco-Marocaines du Thermalisme",
    description: "Première édition à la faculté de médecine de Fès.",
    image: "/images/news/accueil-s2-2.jpeg",
    date: "FÉV 2025"
  },
  {
    title: "Session de formation le 10 et 11 Février 2025",
    description: "Des sessions d’intégration pour les ingénieurs, administrateurs et techniciens nouvellement recrutés.",
    image: "/images/news/accueil-s2-6.jpeg",
    date: "FÉV 2025"
  }
];

export default function NewsSection() {
  return (
    <section className="bg-gray-50 py-16 px-6 max-w-7xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-10 text-blue-900 tracking-wide underline">
        Les Dernières Nouvelles
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {newsItems.map((item, index) => (
          <div
            key={index}
            className="relative group rounded-lg shadow-md transition-transform hover:scale-105 overflow-hidden"
          >
            <div className={`flex flex-col md:flex-row ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''} items-center`}>
              <div className="w-full md:w-1/2 flex items-center justify-center p-4">
                <img
                  src={item.image}
                  alt={item.title}
                  className="object-contain max-h-64 w-full rounded-lg"
                />
              </div>
              <div className="w-full md:w-1/2 p-4 flex flex-col justify-center space-y-2">
                <span className="absolute top-4 left-4 bg-blue-200 text-blue-800 text-xs font-semibold px-2 py-1 rounded-full opacity-0 group-hover:opacity-100 transition">
                  {item.date}
                </span>
                <h3 className="text-xl font-semibold text-blue-800">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

