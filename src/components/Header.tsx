// // src/components/Header.tsx
import Link from 'next/link';

export default function Header() {
  return (
<header className="bg-blue-900 text-white py-4 px-4 shadow-md w-full overflow-x-hidden">
  <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-y-2">
    <div className="text-xl font-bold leading-tight whitespace-nowrap">
      CHU <span className="block sm:inline">Fès</span>
    </div>

    <nav className="flex flex-wrap justify-center items-center gap-x-4 gap-y-2 text-sm px-2 w-full sm:w-auto">
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

