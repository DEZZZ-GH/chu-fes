// src/components/Header.tsx
import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-blue-900 text-white py-4 px-6 shadow-md">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <h1 className="text-xl font-semibold tracking-wide">CHU Fès</h1>
        <nav className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-sm w-full max-w-full px-4 overflow-x-hidden">
  <Link href="/" className="hover:underline whitespace-nowrap">Accueil</Link>
  <Link href="/valeurs" className="hover:underline whitespace-nowrap">Nos valeurs</Link>
  <Link href="/consultation" className="hover:underline whitespace-nowrap">Consultation</Link>
  <Link href="/examen" className="hover:underline whitespace-nowrap">Examen</Link>
  <Link href="/hospitalisation" className="hover:underline whitespace-nowrap">Hospitalisation</Link>
  <Link href="/formation" className="hover:underline whitespace-nowrap">Formation</Link>
  <Link href="/recherche" className="hover:underline whitespace-nowrap">Recherche</Link>
  <Link href="/videos" className="hover:underline whitespace-nowrap">Vidéos</Link>
  <Link href="/rapports" className="hover:underline whitespace-nowrap">Rapports</Link>
  <Link href="/reglement" className="hover:underline whitespace-nowrap">Règlement</Link>
</nav>
      </div>
    </header>
  );
}
