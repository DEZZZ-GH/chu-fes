import Link from 'next/link';

export default function Formation2Page() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6">
        Inscription aux sessions de formation: Réservé aux professionnels du CHU Hassan II
      </h1>

      <div className="border-b border-cyan-500 w-24 mx-auto mb-8"></div>

      <p className="text-gray-700 leading-relaxed mb-10 whitespace-pre-line">
        Il n'est plus possible de répondre au formulaire Formations pour le personnel du CHU Hassan II Fes.
        Si vous pensez qu'il s'agit d'une erreur, contactez le propriétaire du formulaire.
      </p>

      <Link
        href="/formation"
        className="inline-block text-sm text-blue-700 font-medium border border-blue-700 hover:bg-blue-700 hover:text-white rounded px-4 py-2"
      >
        ← Retour
      </Link>
    </main>
  );
}
