// src/app/valeurs/page.tsx

import React from 'react';

const valeurs = [
  {
    title: 'Engagement',
    description: 'Nous plaçons le patient au cœur de nos priorités, avec un engagement total.',
  },
  {
    title: 'Excellence',
    description: 'Nous visons l’excellence médicale, académique et humaine.',
  },
  {
    title: 'Éthique',
    description: 'Nous agissons dans le respect des valeurs déontologiques et humaines.',
  },
  {
    title: 'Innovation',
    description: 'Nous encourageons la recherche et l’évolution des pratiques.',
  },
];

export default function ValeursPage() {
  return (
    <main className="min-h-screen px-4 py-8 bg-white text-gray-800">
      <h1 className="text-3xl font-bold mb-8 text-center">Nos Valeurs</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
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
