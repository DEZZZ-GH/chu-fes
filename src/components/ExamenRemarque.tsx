import React from 'react';

const ExamenRemarque: React.FC = () => {
  return (
    <section className="py-16 px-6 bg-white">
      <div className="max-w-4xl mx-auto animate-fade-in">

        {/* Title */}
        <h2 className="text-2xl md:text-3xl font-bold text-center text-blue-900 mb-8 border-b border-blue-300 pb-2 inline-block">
          REMARQUE
        </h2>

        {/* Blue Info Box */}
        <div className="bg-blue-50 border border-blue-200 rounded-xl shadow-sm p-6">
          <ul className="list-disc list-inside text-gray-800 text-sm md:text-base space-y-4">
            <li>
              Avant de se rendre à la régie pour le règlement des frais de votre examen,
              vous devez passer au service qui vous a délivré le RDV pour vous confirmer la
              disponibilité dudit examen ce jour, avec un cachet du service sur l’imprimé du RDV.
            </li>
            <li>
              Le règlement des frais de votre examen se fait au niveau d’une des régies relevant du BAF selon le type de l’examen.
            </li>
            <li>
              N’hésitez pas à vous faire renseigner par nos hôtesses d’accueil et nos agents de sécurité.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default ExamenRemarque;
