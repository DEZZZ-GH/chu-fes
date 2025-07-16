"use client"
import { useState } from 'react';
import Link from 'next/link';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-blue-900 text-white py-4 px-4 shadow-md w-full overflow-x-hidden">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-y-2">
        <div className="flex items-center">
          <img src="/images/logo.png" alt="Logo" className="h-10 mr-4" />
        </div>

        <button 
          className="sm:hidden flex items-center justify-center p-2 rounded-md text-white"
          onClick={toggleMenu}
          aria-label="Toggle navigation"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>

        <nav className={`flex-col sm:flex-row ${isMenuOpen ? 'flex' : 'hidden'} sm:flex justify-center items-center gap-x-4 gap-y-2 text-sm px-2 w-full sm:w-auto`}>
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


