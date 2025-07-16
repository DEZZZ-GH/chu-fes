'use client';
import { useState } from 'react';

export default function Hospitalisation() {
  const [activeTab, setActiveTab] = useState('admission');

  const tabClasses = (tab: string) =>
    `text-sm sm:text-base font-semibold px-4 py-3 transition duration-200 ${
      activeTab === tab ? 'bg-white text-gray-900' : 'text-white hover:bg-cyan-600'
    }`;

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <h1 className="text-3xl sm:text-4xl font-bold text-center text-gray-800 mb-6">VOTRE HOSPITALISATION</h1>
      <div className="border-b border-cyan-500 w-24 mx-auto mb-8"></div>

      {/* Tabs */}
      <div className="flex flex-wrap justify-center bg-cyan-500 rounded-t-md">
        <button className={tabClasses('admission')} onClick={() => setActiveTab('admission')}>ADMISSION</button>
        <button className={tabClasses('sejour')} onClick={() => setActiveTab('sejour')}>SEJOUR</button>
        <button className={tabClasses('sortie')} onClick={() => setActiveTab('sortie')}>SORTIE</button>
        <button className={tabClasses('deces')} onClick={() => setActiveTab('deces')}>DECES D&apos;UN MALADE HOSPITALISE</button>
      </div>

      {/* Content */}
      <div className="bg-gray-50 p-6 rounded-b-md shadow-inner text-justify">
        {activeTab === 'admission' && (
          <div>
            <p>Le jour de votre hospitalisation, munissez-vous du bon de RDV qui vous a été remis à la suite de la consultation. Après, vous devez vous présenter au service prévu d’hospitalisation pour la récupération de la décision médicale d’hospitalisation.</p>
            <p className="mt-2">Enfin, vous acheminez au BAF muni des documents ci-après pour accomplir les formalités administratives nécessaires et ce, selon votre catégorie :</p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li><strong>Payant</strong>: Une avance des frais de séjour, Copie de la CNI</li>
              <li><strong>CNOPS</strong>: 2 copies de la carte mutuelle, 2 copies de la CNI</li>
              <li><strong>CNSS et assurances privées</strong>: 2 copies de la carte mutuelle, 2 copies de la CNI, La PEC se fait avant l’hospitalisation :</li>
              <ul className="list-disc pl-10">
                <li>2 copies de la carte mutuelle</li>
                <li>2 copies de la CNI</li>
                <li>Note confidentielle établit par le médecin traitant</li>
                <li>Demande de PEC</li>
                <li>Ordonnance détaillée établit par le médecin traitant</li>
              </ul>
              <li><strong>FAR</strong>: 2 copies de la carte mutuelle, 2 copies de la CNI. La PEC se fait à la sortie :</li>
              <ul className="list-disc pl-10">
                <li>2 copies de la carte mutuelle</li>
                <li>2 copies de la CNI</li>
                <li>Note confidentielle établit par le médecin traitant</li>
                <li>Demande de PEC</li>
              </ul>
            </ul>
          </div>
        )}

        {activeTab === 'sejour' && (
          <div className="space-y-4">
            <p>Le malade hospitalisé doit s’abstenir de troubler le repos des autres malades ou de gêner le fonctionnement du service. Il lui est conseillé de :</p>
            <ul className="list-disc pl-5">
              <li>Éviter les propos désobligeants ou tenus à haute voix</li>
              <li>Limiter le son des appareils électroniques</li>
              <li>Ne pas utiliser de réchauds à gaz ou électriques</li>
              <li>Ne pas fumer dans l’enceinte de l’hôpital</li>
              <li>Ne pas mendier ou conserver d’objets de valeur non confiés à l’hôpital</li>
              <li>Maintenir l’hygiène corporelle et celle de ses effets</li>
            </ul>
            <p><strong>Horaire quotidien :</strong></p>
            <ul className="list-disc pl-5">
              <li>08h00 : Petit déjeuner</li>
              <li>08h30–12h30 : Examens et soins</li>
              <li>12h30 : Déjeuner</li>
              <li>14h30–15h30 : Visite</li>
              <li>14h30–18h : Soins</li>
              <li>18h00–18h30 : Dîner</li>
              <li>21h00 : Coucher (émissions autorisées jusqu’à 22h si respect des autres malades)</li>
            </ul>
            <p>Les hospitalisés doivent porter une tenue décente. Les repas sont adaptés aux prescriptions médicales.</p>
            <p><strong>Accompagnants :</strong> Un membre de la famille peut rester jour et nuit selon les capacités du service. Les tarifs varient :</p>
            <ul className="list-disc pl-5">
              <li>150 DHS/jour (demande du patient ou famille)</li>
              <li>100 DHS/jour (demande du service)</li>
            </ul>
            <p><strong>Formalités :</strong> Copie CNI de l’accompagnant, décision médicale manuscrite.</p>
            <p><strong>Cas particulier :</strong> Un parent peut rester gratuitement auprès d’un enfant &lt; 16 ans (hors réanimation).</p>
          </div>
        )}

        {activeTab === 'sortie' && (
          <div className="space-y-4">
            <p>La sortie est une décision médicale. En cas de départ contre avis médical, une décharge sera demandée.</p>
            <p><strong>Formalités :</strong></p>
            <ul className="list-disc pl-5">
              <li>Décision médicale de sortie</li>
              <li>Fiche de prestations de l’infirmier chef</li>
              <li>Feuille de maladie signée (mutualistes)</li>
              <li>Comptes rendus (CRO, CRH, examens complémentaires)</li>
            </ul>
            <p>Après régularisation au BAF, récupérer votre billet de sortie et RDV ou traitement si applicable.</p>
            <p><strong>Frais :</strong> Les frais couvrent hébergement, soins, examens, chirurgie, etc. Tarif national :</p>
            <ul className="list-disc pl-5">
              <li>Assurés : pris en charge par l’assurance maladie</li>
              <li>Non couverts : à votre charge</li>
              <li>RAMED : pris en charge selon le panier de soins</li>
            </ul>
          </div>
        )}

        {activeTab === 'deces' && (
          <div>
            <p>Le constat de décès d’un malade hospitalisé est établi par le médecin de garde au service d’hospitalisation ou à défaut par le médecin de garde des urgences.</p>
          </div>
        )}
      </div>
    </div>
  );
}
