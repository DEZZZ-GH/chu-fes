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
    <main className="min-h-screen px-4 py-8 bg-white text-gray-800">
      <h1 className="text-3xl font-bold mb-8 text-center">Nos Valeurs</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {valeurs.map((valeur, index) => (
          <div
            key={index}
            className="p-6 bg-gray-50 rounded-xl shadow hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300"
          >
            <h2 className="text-xl font-semibold text-blue-700 mb-2">{valeur.title}</h2>
            <p>{valeur.description}</p>
          </div>
        ))}
      </div>
    </main>
  );
}
