import React from 'react';

const ConsultationSection1: React.FC = () => {
  const consultationDetails = [
    {
      text: "Pour planifier votre première consultation, veuillez adresser votre demande à l'adresse e-mail suivante:",
      email: "consult@chu-fes.ma"
    },
    {
      text: "Pour modifier votre rendez-vous de consultation, veuillez adresser votre demande à:",
      email: "rdv2@chu-fes.ma"
    },
    {
      text: "Les demandes doivent inclure les pièces jointes suivantes : une pièce d'identité, la carte RAMED et le formulaire d'orientation indiquant la spécialité demandée."
    },
    {
      text: "Votre rendez-vous, déterminé automatiquement, vous sera envoyé dans un délai de deux jours ouvrables."
    }
  ];

  return (
    <section className="bg-gradient-to-r from-blue-50 to-blue-100 py-10 px-8">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        
        {/* TEXT COLUMN */}
        <div className="sticky top-0">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-800 mb-8 text-center">
            Votre Consultation
          </h2>
          {consultationDetails.map((item, index) => (
            <p
              key={index}
              className="text-gray-800 text-base leading-relaxed mb-4 transition duration-300 transform hover:scale-105"
            >
              {item.text}
              {item.email && (
                <span className="text-blue-600 underline hover:text-blue-800">
                  {" "}
                  {item.email}
                </span>
              )}
            </p>
          ))}
        </div>

        {/* IMAGE COLUMN */}
        <div className="overflow-hidden rounded-lg shadow-lg transition-transform duration-300 hover:scale-105">
          <img
            src="/images/consultation/section1.jpg"
            alt="Consultation illustration"
            className="w-full h-auto max-h-64 object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default ConsultationSection1;
