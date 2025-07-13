// components/ConsultationSection1.tsx
export default function ConsultationSection1() {
  return (
    <section className="bg-gray-50 py-16 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        {/* TEXT COLUMN */}
        <div>
          <h2 className="text-3xl font-bold text-blue-900 mb-6">VOTRE CONSULTATION</h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Pour la prise de rendez-vous de première consultation: vous êtes priés d'envoyer votre demande à l'e-mail suivant:&nbsp;
            <span className="text-blue-600 underline">consult@chu-fes.ma</span>
          </p>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Pour le changement de votre rendez-vous de consultation: vous êtes priés d'envoyer votre demande à l'e-mail suivant:&nbsp;
            <span className="text-blue-600 underline">rdv2@chu-fes.ma</span>
          </p>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Les demandes doivent être accompagnées des pièces jointes suivantes : la CNI, la carte RAMED et la fiche de référence indiquant la spécialité demandée.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Votre rendez-vous, déterminé de manière automatique, vous sera envoyé dans un délai ne dépassant pas deux jours ouvrables.
          </p>
        </div>

        {/* IMAGE COLUMN */}
        <div>
          <img
            src="/images/consultation/section1.jpg"
            alt="Consultation illustration"
            className="w-full h-full object-cover rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>
  );
}
