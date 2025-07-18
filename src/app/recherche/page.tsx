'use client';
import { useState } from 'react';
import { ChevronRight } from 'lucide-react';

const sections = [
  {
    title: 'Commission de recherche',
    content: (
      <>
        <p>
          Conjointement avec son partenaire la Faculté de Médecine et de Pharmacie de Fès, le Centre Hospitalier Hassan II a procédé à la création d’un Comité de Recherche Scientifique dont les compétences sont notamment:
        </p>
        <ol className="list-decimal list-inside space-y-2">
          <li>Coordination des activités de recherche au niveau du CHH II et la FMPF, en matière de recherche scientifique, en tant que deux structures complémentaires.</li>
          <li>Appui à la mise en œuvre des orientations stratégiques du CHH II et de la FMPF, en matière de recherche scientifique.</li>
          <li>Lancement de l’appel à projets conjoint des deux institutions.</li>
          <li>Évaluation et sélection des projets de recherche à financer par le CHH II et/ou la FMPF, au regard des priorités de santé publique et aux orientations des deux institutions.</li>
          <li>Suivi des projets de recherche financés par les deux établissements.</li>
        </ol>
      </>
    )
  },
  {
    title: 'Laboratoires et Equipes de recherche',
    content: (
      <>
        <p>
          Pour la réalisation de sa mission « Recherche » le Centre Hospitalier Hassan II travaille en étroite collaboration avec son partenaire principal la Faculté de Médecine et de Pharmacie de Fès en s’appuyant notamment sur les enseignants chercheurs exerçant au dit Centre.
        </p>
        <p>
          Les enseignants chercheurs sont regroupés en équipes de recherche d’un même champ disciplinaire, travaillant au sein de différents laboratoires. Chaque laboratoire est formé au minimum de 3 équipes de recherche et chaque équipe de recherche est formée au minimum par 3 enseignants. Ces laboratoires sont :
        </p>
        <ul className="list-disc list-inside space-y-2">
          <li>Recherche Biomédicale et translationelle</li>
          <li>Laboratoire de Neuroscience clinique 1/07L</li>
          <li>Laboratoire de la biologie des cancers 3/07 L</li>
          <li>Laboratoire d’épidémiologie, recherche clinique et santé communautaire 4/07 L</li>
          <li>Laboratoire de bases moléculaires en pathologie humaine et outils thérapeutiques 5/07 L</li>
        </ul>
      </>
    )
  },
  {
    title: 'Recherche et Ethique',
    content: (
      <p>
        Le comité d’éthique est chargé d’étudier les problèmes d'éthique et de valider les projets de recherche émanant des différentes équipes de recherche. Le comité veille à ce que le libre choix des volontaires soit respecté et que les risques encourus soient réduits au minimum.
      </p>
    )
  },
  {
    title: 'Actualités',
    content: (
      <p>
        Au Maroc, une nouvelle loi 28-13 fixant de nouvelles conditions légales de nature à garantir la réalisation des recherches biomédicales dans un contexte de sécurité maximale pour la santé et la vie des personnes qui s'y prêtent.
      </p>
    )
  },
  {
    title: 'Base de données bibliographique',
    content: (
      <p>
        Nous disposons d'une base de données bibliographique recueillant la production scientifique du CHU Hassan II.
      </p>
    )
  },
  {
  title: 'Structure de recherche',
  content: (
    <>
      <p>
        Pour la promotion de la recherche scientifique, le CHH II de Fès travaille en étroite collaboration avec son partenaire principal la Faculté de Médecine et de Pharmacie de Fès. De ce fait, les orientations stratégiques et les axes de recherche prioritaires sont définis conjointement entre les deux institutions.
        En parallèle, le CHH II ne cesse de consolider ses partenariats, national et international, dans ce domaine.
      </p>
      <ol className="list-decimal list-inside mt-4">
        <li>Service Recherche et développement</li>
        <li>Commission de Recherche</li>
        <li>Laboratoire et équipe de Recherche</li>
      </ol>
    </>
  )
},
  {
    title: 'Service Recherche et Développement',
    content: (
      <p>
        Au Centre Hospitalier Hassan II de Fès, la recherche est spécifiquement animée par le Service Recherche et Développement qui a pour mission de développer une dynamique de la recherche, des services et des personnels du dit établissement. Le service Recherche et Développement est chargé d’initier et coordonner l’ensemble des recherches menées par ses différents personnels.
      </p>
    )
  },
  {
    title: 'Contact',
    content: (
      <p>
        <strong>Email :</strong> recherchechu@gmail.com
      </p>
    )
  },
];


export default function RechercheModern() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="max-w-4xl mx-auto px-4 py-16 space-y-4">
      <h1 className="text-3xl sm:text-4xl font-bold text-center text-gray-800 mb-6">
  RECHERCHE ET INNOVATION
</h1>
      <div className="border-b border-cyan-500 w-24 mx-auto mb-8"></div>

      {sections.map((section, index) => {
        const isOpen = openIndex === index;
        return (
          <div
            key={index}
            className={`transition-all duration-300 border rounded-2xl shadow-sm ${
              isOpen ? 'bg-white' : 'bg-gradient-to-r from-sky-500 to-blue-600 text-white'
            }`}
          >
            <button
              onClick={() => setOpenIndex(isOpen ? null : index)}
              className="w-full px-6 py-5 flex items-center justify-between group"
            >
              <span className={`text-lg font-medium transition-all ${isOpen ? 'text-sky-700' : 'text-white'}`}>
                {section.title}
              </span>
              <ChevronRight
                className={`h-6 w-6 transition-transform ${
                  isOpen ? 'rotate-90 text-sky-700' : 'text-white group-hover:translate-x-1'
                }`}
              />
            </button>

            <div
  className={`overflow-hidden transition-all duration-500 px-6 ${
    isOpen ? 'max-h-[1000px] pt-0 pb-6' : 'max-h-0 pt-0 pb-0'
  }`}
>

              <p className="text-gray-700 leading-relaxed">{section.content}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

