// src/app/valeurs/page.tsx

import React from 'react';

const valeurs = [
  {
    title: 'TRANSPARENCE',
    description:
      'est l’une des valeurs à laquelle nous nous attachons. Elle permet de renforcer la confiance des usagers à l’égard de notre établissement.',
  },
  {
    title: 'DISPONIBILITE',
    description:
      'Nous sommes à l’écoute de nos patients et nos usagers 7j/7, 24h/24. La disponibilité est la mesure de notre performance.',
  },
  {
    title: 'INTEGRITE',
    description:
      'est la référence et le guide de nos choix et nos actions.',
  },
  {
    title: 'PERFORMANCE',
    description:
      'est la valeur qui incarne le plus notre raison d’être, avec ses deux composantes l’efficacité et l’efficience constituent le souci majeur dans nos différentes actions.',
  },
];


export default function ValeursPage() {
  return (
    <main className="min-h-screen px-4 py-12 bg-white text-gray-800">
      <section className="text-center max-w-2xl mx-auto mb-12">
        <h2 className="text-4xl font-bold text-gray-800 mb-2">
          Nos Valeurs et Nos Engagements
        </h2>
        <p className="text-gray-600 text-lg">
          Les fondations de notre mission envers chaque patient.
        </p>
      </section>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
        {valeurs.map((valeur, index) => (
          <div
            key={index}
            className="flex items-start gap-6 p-6 bg-gray-50 rounded-xl shadow hover:shadow-md transition-all"
          >
            <div className="text-4xl">🔷</div>
            <div>
              <h3 className="text-xl font-bold text-blue-700 mb-1">
                {valeur.title}
              </h3>
              <p className="text-gray-700">{valeur.description}</p>
            </div>
          </div>
        ))}
      </div>
      <hr className="my-12" />

      <section>
        <h3 className="text-2xl font-bold mb-4">Nos Engagements en Action</h3>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li>Des consultations ouvertes 24h/24</li>
          <li>Une accessibilité renforcée pour tous les patients</li>
          <li>Une gestion transparente des documents médicaux</li>
        </ul>
      </section>
    </main>
  );
}
