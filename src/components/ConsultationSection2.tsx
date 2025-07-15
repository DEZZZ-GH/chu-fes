import React from 'react';

export default function ConsultationSection2() {
  const documents = [
    "ID (CNI, Passport)",
    "Carte mutuelle ou carte RAMED",
    "Bon d'orientation du médecin référent (si RAMED)"
  ];

  return (
    <section className="bg-gradient-to-r from-blue-50 to-blue-100 py-10 px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        {/* IMAGE COLUMN */}
        <div className="w-full overflow-hidden rounded-lg shadow-lg transition-transform duration-300 hover:scale-105">
          <img
            src="/images/consultation/section2.jpg"
            alt="Appointment booking"
            className="w-full h-auto max-h-64 object-cover"
          />
        </div>

        {/* TEXT COLUMN */}
        <div className="w-full sticky top-0">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-800 mb-8 text-center">
            MODALITÉS DE RENDEZ-VOUS
          </h2>

          <p className="text-gray-800 text-base mb-4 leading-relaxed">
            Pour prendre votre rendez-vous de consultation, vous devez vous présenter au Centre de Consultations Externes (CCE) situé au bâtiment I, muni des documents suivants :
          </p>

          <ul className="list-disc list-inside text-gray-800 text-sm mb-4 space-y-1">
            {documents.map((doc, index) => (
              <li key={index}>{doc}</li>
            ))}
          </ul>

          <p className="text-gray-800 text-base leading-relaxed">
            Les horaires de consultation sont indiqués sur les fiches de rendez-vous avec une note invitant à se présenter au Bureau des Admissions et de la Facturation (BAF) une heure avant le rendez-vous pour effectuer les formalités administratives.
          </p>
        </div>
      </div>
    </section>
  );
}
