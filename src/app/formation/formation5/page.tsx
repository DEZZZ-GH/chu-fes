import Image from 'next/image';
import Link from 'next/link';

export default function Formation5Page() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6">
        Formation Médicale continue: La COVID au CHU
      </h1>

      <div className="border-b border-cyan-500 w-24 mx-auto mb-8"></div>

      <div className="w-full mb-8">
        <Image
          src="/images/formations/formex5.png"
          alt="Formation Médicale continue: La COVID au CHU"
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
