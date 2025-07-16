"use client";

import React, { useState } from "react";

const rendezVousData = [
  {
    title: "Payant",
    content: [
      "Une pièce d’identité (CNI, Passeport)",
      "Le bon d’examen établi par votre médecin traitant cacheté et signé."
    ]
  },
  {
    title: "CNOPS",
    content: [
      "Une pièce d’identité (CNI, Passeport)",
      "La carte de mutuelle CNOPS",
      "Le bon d’examen établi par votre médecin traitant cacheté et signé."
    ]
  },
  {
    title: "Mutuelle des Forces Armées Royales",
    content: [
      "Une pièce d’identité (CNI, Passeport)",
      "La carte de mutuelle des FAR",
      "Le bon d’examen établi par votre médecin traitant cacheté et signé"
    ]
  },
  {
    title: "CNSS et Assurances",
    content: [
      "Une pièce d’identité (CNI, Passeport)",
      "La carte de mutuelle",
      "Le bon d’examen établi par votre médecin traitant cacheté et signé ou le cas échéant, la feuille de maladie sur laquelle la prescription est faite."
    ]
  },
  {
    title: "RAMED",
    content: [
      "Pour examen de radiologie ou d’exploration fonctionnelle:",
      "- Carte Nationale d’Identité",
      "- Carte RAMED valide",
      "- Fiche de référence signée et cachetée par le médecin référant",
      "- Bon d’examen établi par le médecin traitant cacheté et signé",
      "",
      "Pour examen de laboratoire:",
      "- Copie de la Carte Nationale d’Identité",
      "- Copie de la carte RAMED valide",
      "- Fiche de référence signée et cachetée par un médecin biologiste",
      "- Bon d’examen établi par le médecin traitant cacheté et signé."
    ]
  }
];

const AccordionItem = ({ title, content, isOpen, onClick }: any) => (
  <div className="border-l-4 border-blue-500 bg-white rounded-xl shadow-sm mb-4 overflow-hidden transition-all duration-300">
    <button
      className="w-full flex justify-between items-center px-4 py-3 font-semibold text-left text-blue-800 hover:bg-blue-50"
      onClick={onClick}
    >
      {title}
      <span className="text-xl">{isOpen ? "−" : "+"}</span>
    </button>
    {isOpen && (
      <div className="bg-blue-50 px-6 py-4 text-gray-800 text-sm leading-relaxed">
        <ul className="list-disc list-inside space-y-2">
          {content.map((line: string, i: number) => (
            <li key={i}>{line}</li>
          ))}
        </ul>
      </div>
    )}
  </div>
);

const RendezVousAccordion: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleIndex = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="py-16 px-4 bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-blue-900 mb-10 border-b border-blue-300 inline-block pb-2">
          RENDEZ-VOUS
        </h2>
        {rendezVousData.map((item, index) => (
          <AccordionItem
            key={index}
            title={item.title}
            content={item.content}
            isOpen={activeIndex === index}
            onClick={() => toggleIndex(index)}
          />
        ))}
      </div>
    </section>
  );
};

export default RendezVousAccordion;
