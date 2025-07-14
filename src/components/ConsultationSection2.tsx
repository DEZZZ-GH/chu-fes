export default function ConsultationSection2() {
  return (
    <section className="bg-white py-16 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        {/* IMAGE LEFT */}
        <div>
          <img
            src="/images/consultation/section2.jpg"
            alt="Prise de rendez-vous"
            className="w-full h-full object-cover rounded-lg shadow-lg"
          />
        </div>

        {/* TEXT RIGHT */}
        <div>
          <h2 className="text-3xl font-bold text-blue-900 mb-6">
            FORMALITÉS DE PRISE DE RENDEZ-VOUS
          </h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Pour prendre votre rendez-vous de consultation, vous devez vous présenter au centre de consultation externe (CCE) situé au bâtiment I, munis des documents suivants :
          </p>
          <ul className="list-disc list-inside text-gray-700 mb-4 space-y-1">
            <li>Pièce d’identité (CNI, Passeport) ;</li>
            <li>Carte mutuelle ou carte RAMED ;</li>
            <li>Fiche de liaison ou de référence établit par votre médecin de référence si vous disposez du RAMED;</li>
          </ul>
          <p className="text-gray-700 leading-relaxed">
            Les horaires de consultations sont indiqués sur les bons de RDV avec la mention de se présenter au Bureau des Admissions et de Facturation (BAF) une heure avant le RDV afin d’accomplir les démarches administratives.
          </p>
        </div>
      </div>
    </section>
  );
}
