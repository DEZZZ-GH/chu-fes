import Image from 'next/image';
import Link from 'next/link';

export default function Formation4Page() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6">
        Certification des causes de décès – Médecins de l’HME 31/12/2020
      </h1>

      <div className="border-b border-cyan-500 w-24 mx-auto mb-8"></div>

      <div className="w-full mb-8">
        <Image
          src="/images/formations/formex4.jpg"
          alt="Certification des causes de décès – Médecins de l’HME"
          width={1000}
          height={1400}
          className="w-full h-auto rounded-xl"
        />
      </div>

      <Link
        href="/formation"
        className="inline-block text-sm text-blue-700 font-medium border border-blue-700 hover:bg-blue-700 hover:text-white rounded px-4 py-2"
      >
        ← Retour
      </Link>
    </main>
  );
}
