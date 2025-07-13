'use client';
import Image from 'next/image';

const features = [
  {
    title: 'CHU Hassan II – Fès',
    subtitle:
      'Un établissement public hospitalo-universitaire engagé dans les soins, la formation et la recherche.',
    image: '/images/accueil/accueil-s1-1.jpg',
  },
  {
    title: 'Urgences 24h/24',
    subtitle:
      'Un service réactif et disponible en continu pour répondre aux situations d\'urgence médicale à tout moment.',
    image: '/images/accueil/accueil-s1-2.jpg',
  },
  {
    title: 'Technologie Médicale Avancée',
    subtitle:
      'Des équipements de pointe pour un diagnostic précis et une prise en charge optimale des patients.',
    image: '/images/accueil/accueil-s1-3.jpg',
  },
  {
    title: 'Laboratoire de Diagnostic',
    subtitle:
      'Un centre d’analyses médicales rigoureux au service de la recherche et de la précision clinique.',
    image: '/images/accueil/accueil-s1-4.jpg',
  },
];

export default function FeatureShowcase() {
  return (
    <section className="w-full bg-white py-16">
      <h2 className="text-3xl font-bold text-center mb-10">À la découverte du CHU Hassan II</h2>
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-10">
        {features.map((feature, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md p-4">
            <Image
              src={feature.image}
              alt={feature.title}
              width={500}
              height={220}
              className="rounded-t-lg object-cover h-[220px] w-full"
              priority
            />
            <h3 className="text-xl font-semibold mt-4">{feature.title}</h3>
            <p className="text-gray-600">{feature.subtitle}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

 
