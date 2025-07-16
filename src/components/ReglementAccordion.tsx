"use client";

import React, { useState } from "react";

const reglementData = [
  {
    title: "Payant",
    content: [
      "Si vous n'avez pas de couverture médicale, vous êtes \"Payant\". Pour régler les frais de l'examen, présentez-vous à la régie du service qui vous a délivré le RDV avec :",
      "- Une pièce d'identité (CNI, Passeport)",
      "- Le bon d'examen de votre médecin traitant (cacheté, signé et une copie)",
      "- L'imprimé du RDV (et une copie)"
    ]
  },
  {
    title: "CNOPS",
    content: [
      "Modalités de Paiement et Remboursement",
      "\nPour un paiement à 100% avec remboursement CNOPS :",
      "- Le bon d'examen de votre médecin traitant (cacheté, signé et une copie)",
      "- L'imprimé du RDV (et une copie)",
      "- Une feuille de soins (à remplir par le caissier à la régie)",
      "",
      "Pour un paiement à 20% avec prise en charge CNOPS (80%) :",
      "- Le bon d'examen de votre médecin traitant (cacheté, signé et une copie)",
      "- L'imprimé du RDV (et une copie)",
      "- Deux copies de votre carte de mutuelle",
      "- Deux copies de la pièce d'identité (CNI, Passeport) de l'adhérent",
      "- Deux copies de la pièce d'identité (CNI, Passeport) du bénéficiaire",
      "- La feuille de soins cachetée et signée par votre médecin traitant"
    ]
  },
  {
    title: "Mutuelle des Forces Armées Royales",
    content: [
      "Modalités de Paiement et Prise en Charge",
      "\nPaiement intégral et remboursement mutuelle :",
      "- Le bon d'examen de votre médecin (cacheté, signé et sa copie)",
      "- L'imprimé de RDV (et sa copie)",
      "- Une feuille de soins (à remplir par le caissier)",
      "",
      "Prise en charge par la Mutuelle des FAR :",
      "- Obtenez le bon de demande d'examen (cacheté et signé par votre médecin)",
      "- Faites remplir la feuille de soins médicaux et le formulaire de Prise En Charge (PEC) par votre médecin",
      "- Soumettez le formulaire PEC + sa copie au responsable du BAF pour cachet",
      "- Allez au service des accords de prise en charge pour déterminer le pourcentage à votre charge",
      "",
      "Le jour de l'examen, présentez à la régie :",
      "- L'imprimé du RDV (et sa copie)",
      "- Deux copies de la carte de mutuelle",
      "- Deux copies de la pièce d'identité (CNI, Passeport) de l'adhérent",
      "- Deux copies de la pièce d'identité (CNI, Passeport) du bénéficiaire",
      "- La feuille de soins remplie, cachetée et signée par le médecin (et sa copie)",
      "- Le formulaire de PEC signé, cacheté, indiquant le pourcentage de prise en charge (original + copie)"
    ]
  },
  {
    title: "CNSS et Assurances",
    content: [
      "Vous avez seulement la possibilité de payer les frais de votre examen à 100% et vous faire rembourser auprès de votre mutuelle. Pièces à fournir :",
      "- Le bon d’examen établi par votre médecin traitant cacheté et signé, ou la prescription de l’examen sur la feuille de soin",
      "- Une copie dudit bon ou de la feuille portant la prescription",
      "- L’imprimé du RDV + une copie"
    ]
  },
  {
    title: "RAMED",
    content: [
      "Pour bénéficier d’une prise en charge de 100% des frais de votre examen vous devez fournir les pièces suivantes :",
      "- Copie de la Carte Nationale d’Identité",
      "- Copie de la carte RAMED valide",
      "- Copie de la fiche de référence signée et cachetée par le médecin référant",
      "- Bon d’examen établi par le médecin traitant cacheté et signé"
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
        <ul className="list-none list-inside space-y-1">
          {content
  .filter((line: string) => line.trim() !== "") // 🧹 skip empty lines
  .map((line: string, i: number) => (
    <li key={i}>{line}</li>
))}

        </ul>
      </div>
    )}
  </div>
);

const ReglementAccordion: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleIndex = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="py-16 px-4 bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-blue-900 mb-10 border-b border-blue-300 inline-block pb-2">
          RÈGLEMENT
        </h2>
        {reglementData.map((item, index) => (
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

export default ReglementAccordion;
