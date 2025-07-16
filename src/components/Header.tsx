'use client';
import Link from 'next/link';
import { useState } from 'react';
import Image from 'next/image';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-blue-900 text-white px-4 py-3 shadow-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* LOGO */}
        <div className="flex items-center space-x-2">
          <Image src="/images/logo.png" alt="CHU Logo" width={40} height={40} />
          <div className="text-xl font-bold leading-tight">
            CHU <span className="block sm:inline">Fès</span>
          </div>
        </div>

        {/* Hamburger for mobile */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="sm:hidden focus:outline-none"
        >
          <svg
            className="w-6 h-6 fill-white"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            {menuOpen ? (
              <path d="M18 6L6 18M6 6l12 12" />
            ) : (
              <path d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>

        {/* NAV LINKS */}
        <nav
          className={`${
            menuOpen ? 'block' : 'hidden'
          } absolute top-full left-0 w-full bg-blue-900 sm:bg-transparent sm:static sm:flex sm:items-center sm:space-x-6 text-center sm:text-left transition-all`}
        >
          <div className="flex flex-col sm:flex-row sm:space-x-6 py-4 sm:py-0">
            {[
              ['/', 'Accueil'],
              ['/valeurs', 'Nos valeurs'],
              ['/consultation', 'Consultation'],
              ['/examen', 'Examen'],
              ['/hospitalisation', 'Hospitalisation'],
              ['/formation', 'Formation'],
              ['/recherche', 'Recherche'],
              ['/videos', 'Vidéos'],
              ['/rapports', 'Rapports'],
              ['/reglement', 'Règlement']
            ].map(([href, label]) => (
              <Link
                key={href}
                href={href}
                className="py-2 sm:py-0 hover:underline transition duration-150"
              >
                {label}
              </Link>
            ))}
          </div>
        </nav>
      </div>
    </header>
  );
}


