import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation'; 

const formations = {
  formation1: {
    title: 'Session de formation le 10 et 11 Février 2025',
    detailImage: '/images/formations/formex1.jpeg'
  },
  formation2: {
    title: 'Inscription aux sessions de formation: Réservé aux professionnels du CHU Hassan II',
    paragraph: "Il n'est plus possible de répondre au formulaire Formations pour le personnel du CHU Hassan II Fes. Si vous pensez qu'il s'agit d'une erreur, contactez le propriétaire du formulaire."
  },
  formation3: {
    title: 'Renforcement de la certification des causes de décès – HME 28/12/2020',
    detailImage: '/images/formations/formex3.jpg'
  },
  formation4: {
    title: 'Certification des causes de décès – Médecins de l’HME 31/12/2020',
    detailImage: '/images/formations/formex4.jpg'
  },
  formation5: {
    title: 'Formation Médicale continue: La COVID au CHU',
    detailImage: '/images/formations/formex5.png'
  },
} as const;
type Slug = keyof typeof formations;

interface PageProps {
  params: {
    slug: string;
  };
  searchParams?: { [key: string]: string | string[] | undefined };
}

export default function FormationDetailPage({ params }: PageProps) {
  const slug = params.slug as Slug;
   const data = formations[slug];

  if (!data) return notFound();

  return (
    <main className="max-w-3xl mx-auto px-4 py-12">
<h1 className="text-3xl sm:text-4xl font-extrabold text-center text-gray-800 mb-4">
  {data.title}
</h1>
      <div className="border-b border-cyan-500 w-24 mx-auto mb-8"></div>
      {'detailImage' in data && (
        <div className="w-full mb-8">
          <Image
            src={data.detailImage}
            alt={data.title}
            width={1000}
            height={1400}
            className="w-full h-auto rounded-xl"
          />
        </div>
      )}

      {'paragraph' in data && (
        <p className="text-gray-700 leading-relaxed mb-10 whitespace-pre-line">
          {data.paragraph}
        </p>
      )}

      <Link
        href="/formation"
        className="inline-block text-sm text-blue-700 font-medium border border-blue-700 hover:bg-blue-700 hover:text-white rounded px-4 py-2"
      >
        ← Retour
      </Link>
    </main>
  );
} 

export async function generateStaticParams() {
  return [
    { slug: 'formation1' },
    { slug: 'formation2' },
    { slug: 'formation3' },
    { slug: 'formation4' },
    { slug: 'formation5' },
  ];
}



