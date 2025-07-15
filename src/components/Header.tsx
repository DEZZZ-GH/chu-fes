// src/components/Header.tsx
import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-blue-900 text-white py-4 px-6 shadow-md">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <h1 className="text-xl font-semibold tracking-wide">CHU Fès</h1>
        <nav className="space-x-4 text-sm">
          <Link href="/" className="hover:underline">Accueil</Link>
          <Link href="/valeurs" className="hover:underline">Nos valeurs</Link>
          <Link href="/consultation" className="hover:underline">Consultation</Link>
          <Link href="/examen" className="hover:underline">Examen</Link>
          <Link href="/hospitalisation" className="hover:underline">Hospitalisation</Link>
          <Link href="/formation" className="hover:underline">Formation</Link>
          <Link href="/recherche" className="hover:underline">Recherche</Link>
          <Link href="/videos" className="hover:underline">Vidéos</Link>
          <Link href="/rapports" className="hover:underline">Rapports</Link>
          <Link href="/reglement" className="hover:underline">Règlement</Link>
        </nav>
      </div>
    </header>
  );
}
