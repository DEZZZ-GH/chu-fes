'use client';
import Link from 'next/link';

export default function RechercheSection() {
  return (
    <section className="px-6 py-12 bg-white">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 text-center">
        {/* Recherche */}
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Recherche et Innovation
          </h2>
          <div className="w-20 h-1 bg-cyan-500 mx-auto mb-6" />
          <p className="text-gray-700 text-lg mb-6 max-w-md mx-auto">
            Le Centre Hospitalier Universitaire Hassan II de Fès mène une variété de travaux de recherche couvrant plusieurs disciplines médicales et scientifiques. Ces initiatives visent à faire progresser les connaissances, améliorer la qualité des soins et encourager l’innovation au service des patients, des professionnels de santé et de la société dans son ensemble.
          </p>
          <Link
            href="/recherche"
            className="inline-block px-6 py-2 bg-cyan-600 text-white rounded-lg hover:bg-cyan-700 transition"
          >
            Découvrir
          </Link>
        </div>

        {/* Formation */}
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Formations 
          </h2>
          <div className="w-20 h-1 bg-cyan-500 mx-auto mb-6" />
          <p className="text-gray-700 text-lg mb-6 max-w-md mx-auto">
            Le CHU Hassan II propose des sessions de formation continue pour renforcer les compétences du personnel médical et paramédical. Ces formations s’inscrivent dans une démarche d’actualisation des savoirs, favorisant l’adaptation aux évolutions technologiques et aux besoins croissants des structures hospitalières modernes.
          </p>
          <Link
            href="/formation"
            className="inline-block px-6 py-2 bg-cyan-600 text-white rounded-lg hover:bg-cyan-700 transition"
          >
            Voir les formations
          </Link>
        </div>
      </div>
    </section>
  );
}




