'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => setIsMenuOpen(prev => !prev);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { path: '/', label: 'Accueil' },
    { path: '/valeurs', label: 'Valeurs' },
    { path: '/consultation', label: 'Consultation' },
    { path: '/examen', label: 'Examen' },
    { path: '/hospitalisation', label: 'Hospitalisation' },
    { path: '/formation', label: 'Formation' },
    { path: '/recherche', label: 'Recherche' },
    { path: '/videos', label: 'Vidéos' },
    { path: '/rapports', label: 'Rapports' },
    { path: '/reglement', label: 'Règlement' },
  ];

  return (
    <header
      className={`fixed top-0 z-50 w-full h-20 transition-colors duration-300 ${
        isScrolled ? 'bg-[#D6F0FF]/80 backdrop-blur-md shadow' : 'bg-[#f9fafb]'
      } text-[#1e3a8a] px-4`}
    >
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-y-4 h-full">
        {/* Top Row: Mobile layout flips icon to left, logo to right */}
        <div className="flex justify-between items-center w-full sm:w-auto sm:justify-start">
          {/* Burger icon */}
          <button
            className="sm:hidden flex items-center justify-center p-2 rounded-md text-[#1e3a8a] hover:bg-[#dbeafe] transition duration-200"
            onClick={toggleMenu}
            aria-label="Toggle navigation"
          >
            <svg
              className="w-8 h-8" // bigger for mobile
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>

          {/* Logo aligned right in mobile */}
          <div className="sm:ml-0 ml-auto">
            <img src="/images/logo.png" alt="Logo CHU" className="h-16 sm:h-20" />
          </div>
        </div>

        {/* Nav links */}
        <nav
          className={`transition-all duration-300 ease-in-out transform origin-top text-[1.05rem] sm:text-[1.05rem] ${
            isMenuOpen ? 'scale-y-100 opacity-100 max-h-96 overflow-y-auto' : 'scale-y-0 opacity-0 max-h-0'
          } sm:scale-y-100 sm:opacity-100 sm:flex flex-col sm:flex-row justify-center items-center gap-x-4 gap-y-4 px-2 w-full sm:w-auto`}
        >
          {navLinks.map(({ path, label }, index) => (
            <Link
              key={index}
              href={path}
              onClick={() => setIsMenuOpen(false)}
              className="whitespace-nowrap px-3 py-2 rounded-md hover:bg-[#dbeafe] transition duration-200"
            >
              {label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}

