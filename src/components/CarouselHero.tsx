'use client';
import Image from 'next/image';
import Link from 'next/link';

const features = [
  {
    title: 'CHU Hassan II – Fès',
    subtitle:
      'Un établissement public hospitalo-universitaire engagé dans les soins, la formation et la recherche.',
    image: '/images/accueil/accueil-s1-1.jpg', 
    path: '/hospitalisation',
  },
  {
    title: 'Urgences 24h/24',
    subtitle:
      'Un service réactif et disponible en continu pour répondre aux situations d\'urgence médicale à tout moment.',
    image: '/images/accueil/accueil-s1-2.jpg',
    path: '/urgences',
  },
  {
    title: 'Technologie Médicale Avancée',
    subtitle:
      'Des équipements de pointe pour un diagnostic précis et une prise en charge optimale des patients.',
    image: '/images/accueil/accueil-s1-3.jpg',
    path: '/examen'
  },
  {
    title: 'Laboratoire de Diagnostic',
    subtitle:
      'Un centre d’analyses médicales rigoureux au service de la recherche et de la précision clinique.',
    image: '/images/accueil/accueil-s1-4.jpg',
    path: '/consultation',
  },
];

export default function FeatureShowcase() {
  return (
    <section className="w-full bg-gradient-to-b from-white to-gray-50 py-16 pt-4">
      <h2 className="text-5xl font-bold text-center mb-10 drop-shadow-xl">
        À la découverte du CHU Hassan II
      </h2>
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8">
        {features.map((feature, index) => {
          const cardContent = (
            <div className="bg-white rounded-2xl shadow-md p-4 flex flex-col justify-center hover:-translate-y-1 transition-transform hover:shadow-lg">
              <Image
                src={feature.image}
                alt={feature.title}
                width={500}
                height={220}
                className="rounded-t-2xl object-cover h-[220px] w-full transition-transform hover:scale-105"
                priority
              />
              <h3 className="text-2xl font-semibold mt-4 text-blue-900">
                {feature.title}
              </h3>
              <p className="text-gray-600">{feature.subtitle}</p>
            </div>
          );

          return feature.path ? (
            <Link key={index} href={feature.path}>{cardContent}</Link>
          ) : (
            <div key={index}>{cardContent}</div>
          );
        })}
      </div>
    </section>
  );
}



 
