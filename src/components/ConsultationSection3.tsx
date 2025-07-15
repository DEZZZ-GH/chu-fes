import React from 'react';

const ConsultationSection3: React.FC = () => {
  return (
    <section className="bg-gradient-to-r from-blue-50 to-blue-100 py-20 px-4 animate-fade-in overflow-hidden">
      <div className="max-w-7xl mx-auto">

        {/* Title & Intro */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-blue-800 mb-4 break-words text-center">
            FORMALITÉS DE RÈGLEMENT LE JOUR DU RENDEZ-VOUS
          </h2>
          <p className="text-gray-700 text-base leading-relaxed">
            NB : Pour régler les frais de la consultation externe il faut se présenter à la régie du centre de consultation externe (CCE)
            après avoir reçu confirmation du RDV par le cachet du CCE sur l’imprimé du RDV.
            Les pièces à fournir varient selon votre type de couverture de santé.
          </p>
        </div>

        {/* 3 Blocks */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

          {/* PAYANT */}
          <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-all duration-300">
            <h3 className="text-lg font-semibold text-blue-900 mb-4">Payant</h3>
            <p className="text-gray-700 text-sm mb-2">
              Si vous ne disposez d’aucune couverture médicale :
            </p>
            <ul className="list-disc list-inside text-gray-700 text-sm space-y-1">
              <li>Pièce d’identité (CNI, Passeport)</li>
              <li>Le RDV de consultation + copie du RDV</li>
            </ul>
          </div>

          {/* MUTUELLE */}
          <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-all duration-300">
            <h3 className="text-lg font-semibold text-blue-900 mb-4">Mutuelle</h3>
            <p className="text-gray-700 text-sm mb-2">
              Si vous disposez d’une mutuelle :
            </p>
            <ul className="list-disc list-inside text-gray-700 text-sm space-y-1">
              <li>Une pièce d’identité (CNI, Passeport)</li>
              <li>Le RDV de consultation + copie du RDV</li>
              <li>Une feuille de soin remplie par le caissier à la régie</li>
            </ul>
          </div>

          {/* RAMED */}
          <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-all duration-300">
            <h3 className="text-lg font-semibold text-blue-900 mb-4">RAMED</h3>
            <p className="text-gray-700 text-sm mb-2">
              Si vous êtes affilié au RAMED :
            </p>
            <ul className="list-disc list-inside text-gray-700 text-sm space-y-1">
              <li>Copie de la Carte Nationale d’Identité</li>
              <li>Copie de carte RAMED valide</li>
              <li>Le RDV de consultation + copie du RDV</li>
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ConsultationSection3;
