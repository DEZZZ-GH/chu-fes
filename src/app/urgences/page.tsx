'use client';
import { FaHospitalSymbol, FaUserClock, FaNotesMedical, FaClipboardList } from 'react-icons/fa';
import React from 'react';

const sections = [
  {
    icon: <FaHospitalSymbol size={28} className="text-cyan-600" />,
    title: 'Présentation',
    content: `Les urgences sont le service hospitalier chargé d'accueillir et de prendre en charge les malades et blessés, qu’ils soient venus d’eux-mêmes ou amenés par les secours (pompiers, etc.). Le CHU Hassan II dispose d’urgences spécialisées (maternité, psychiatrie, pédiatrie...) selon les cas.`
  },
  {
    icon: <FaUserClock size={28} className="text-cyan-600" />,
    title: "L'attente aux urgences",
    content: `Malgré les efforts fournis, le temps d’attente peut être long selon l’affluence et la gravité des cas. Les urgences du CHU reçoivent directement des patients sans rendez-vous, ce qui implique un tri basé sur la gravité et un possible délai si votre cas n’est pas critique.`
  },
  {
    icon: <FaClipboardList size={28} className="text-cyan-600" />,
    title: 'La situation administrative',
    content: `Avant toute prise en charge, un passage par le guichet est requis pour régulariser la situation administrative. Certains cas jugés urgents sont pris en charge immédiatement.`
  },
  {
    icon: <FaNotesMedical size={28} className="text-cyan-600" />,
    title: 'La près-urgence',
    content: `Un espace dédié à l’évaluation rapide permet de rediriger les cas non urgents vers des services adaptés. Cela désengorge les urgences classiques et garantit une meilleure prise en charge pour les cas critiques.`
  }
];

export default function UrgencesPage() {
  return (
    <div className="px-6 py-16 max-w-7xl mx-auto">
      <h1 className="text-4xl font-bold text-center text-blue-900 mb-6">Service des Urgences</h1>
      <div className="border-b-2 border-cyan-500 w-24 mx-auto mb-10"></div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {sections.map((section, index) => (
          <div key={index} className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition-all">
            <div className="flex items-center gap-4 mb-3">
              <div className="p-3 bg-cyan-100 rounded-full">{section.icon}</div>
              <h2 className="text-xl font-semibold text-cyan-800">{section.title}</h2>
            </div>
            <p className="text-gray-700 leading-relaxed">{section.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
