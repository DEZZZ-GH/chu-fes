import React from 'react';

const ConsultationSection1: React.FC = () => {
  return (
    <section className="bg-gradient-to-r from-blue-50 to-blue-100 px-4 py-12 overflow-x-hidden">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8 items-start">
        
        {/* TEXT COLUMN */}
        <div className="md:sticky md:top-16">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-800 mb-6 text-center">
            Votre Consultation
          </h2>
          <div className="max-w-prose mx-auto text-gray-800 text-base leading-relaxed text-justify">
            Pour planifier votre première consultation, veuillez adresser votre demande à l'adresse e-mail suivante :
            <a href="mailto:consult@chu-fes.ma" className="text-blue-600 underline hover:text-blue-800">
              {" "}consult@chu-fes.ma
            </a>.<br /><br />
            Pour modifier votre rendez-vous de consultation, veuillez adresser votre demande à :
            <a href="mailto:rdv2@chu-fes.ma" className="text-blue-600 underline hover:text-blue-800">
              {" "}rdv2@chu-fes.ma
            </a>.<br /><br />
            Les demandes doivent inclure les pièces jointes suivantes : une pièce d'identité, la carte RAMED et le formulaire d'orientation indiquant la spécialité demandée.<br /><br />
            Votre rendez-vous, déterminé automatiquement, vous sera envoyé dans un délai de deux jours ouvrables.
          </div>
        </div>

        {/* IMAGE COLUMN */}
        <div className="mt-6 md:mt-12 overflow-hidden rounded-lg shadow-lg transition-transform duration-300 hover:scale-105">
          <img
            src="/images/consultation/section1.jpg"
            alt="Consultation illustration"
            className="w-full h-auto max-h-64 object-cover rounded-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default ConsultationSection1;

