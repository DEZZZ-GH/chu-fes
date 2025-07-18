'use client';

import Link from 'next/link';

export default function ReglementPage() {
  const pdfs = [
    {
      title: 'Règlement Intérieur du Centre Hospitalier Universitaire Hassan II',
      description: "Ce document décrit les règles internes qui régissent le fonctionnement du CHU Hassan II, assurant un cadre disciplinaire et organisationnel clair pour l'ensemble du personnel et des usagers.",
      href: '/pdfs/reglement.pdf'
    },
    {
      title:'Charte d’utilisation des ressources informatiques',
      description: "Cette charte précise les règles d'utilisation des outils informatiques au sein du CHU Hassan II, garantissant la sécurité, la confidentialité et une utilisation responsable des ressources numériques.",
      href: '/pdfs/infocharte.pdf'
    }
  ];

  return (
    <div className="max-w-5xl mx-auto px-6 py-16">
            <h1 className="text-3xl sm:text-4xl font-bold text-center text-gray-800 mb-6">
Règlement Intérieur</h1> 
    <div className="border-b border-cyan-500 w-24 mx-auto mb-8"></div>
      <div className="grid gap-8">
        {pdfs.map((doc, index) => (
          <div
            key={index}
            className="rounded-2xl border border-blue-200 p-6 shadow-md bg-gradient-to-r from-blue-50 to-blue-100"
          >
            <h2 className="text-xl font-semibold text-blue-900 mb-2">{doc.title}</h2>
            <p className="text-blue-800 mb-4">{doc.description}</p>
            <Link
              href={doc.href}
              target="_blank"
              className="inline-block px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
            >
              Consulter le document
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
