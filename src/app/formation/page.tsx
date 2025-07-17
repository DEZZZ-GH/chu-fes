
import Image from 'next/image';
import Link from 'next/link';

const formations = [
  {
    id: 'formation1',
    title: 'Session de formation le 10 et 11 Février 2025',
    image: '/images/formations/formation1.jpg'
  },
  {
    id: 'formation2',
    title: 'Inscription aux sessions de formation: Réservé aux professionnels du CHU Hassan II',
    image: '/images/formations/formation2.jpg'
  },
  {
    id: 'formation3',
    title: 'Session de formation sous le thème: Renforcement de la certification des causes de décès – HME 28/12/2020',
    image: '/images/formations/formation3.jpg'
  },
  {
    id: 'formation4',
    title: 'Session de formation sous le thème: Certification des causes de décès – Médecins de l’HME 31/12/2020',
    image: '/images/formations/formation4.jpg'
  },
  {
    id: 'formation5',
    title: 'Formation Médicale continue: La COVID au CHU',
    image: '/images/formations/formation5.jpg'
  },
];

export default function FormationPage() {
  return (
    <main className="max-w-6xl mx-auto px-4 py-12">
      <h1 className="text-3xl sm:text-4xl font-bold text-center text-gray-800 mb-6">
        Formations Continues
      </h1> 
    <div className="border-b border-cyan-500 w-24 mx-auto mb-8"></div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {formations.map(({ id, title, image }) => (
          <div
            key={id}
            className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition duration-300 flex flex-col"
          >
            <div className="relative h-48 w-full">
              <Image
                src={image}
                alt={title}
                fill
                className="object-cover"
              />
            </div>
            <div className="p-4 flex-1 flex flex-col justify-between">
              <h2 className="text-lg font-semibold text-gray-800 mb-4 line-clamp-3">
                {title}
              </h2>
              <Link
                href={`/formation/${id}`}
                className="mt-auto inline-block text-sm text-white font-medium bg-blue-700 hover:bg-blue-800 rounded px-4 py-2 w-fit"
              >
                Voir plus
              </Link>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}

