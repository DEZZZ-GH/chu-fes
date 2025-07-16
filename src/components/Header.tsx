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
    <>
      <header
        className={`fixed top-0 z-50 w-full h-25 transition-colors duration-300 ${
          isScrolled ? 'bg-[#D6F0FF]/80 backdrop-blur-md shadow' : 'bg-[#f9fafb]'
        } text-[#1e3a8a] py-4 px-4`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo - always visible */}
          <div className="flex items-center">
            <img src="/images/logo.png" alt="Logo CHU" className="h-18  sm:h-22" />
          </div>

          {/* Desktop Nav - only on sm+ */}
          <nav className="hidden sm:flex gap-x-1 items-center text-[1.0rem] font-medium font-inter">
            {navLinks.map(({ path, label }, index) => (
              <Link
                key={index}
                href={path}
                className="px-3 py-2 rounded-md hover:bg-[#dbeafe] transition duration-200"
              >
                {label}
              </Link>
            ))}
          </nav>

          {/* Mobile Burger - only visible on mobile */}
          <div className="sm:hidden">
            <button
              className="p-2 rounded-md text-[#1e3a8a] hover:bg-[#dbeafe] transition"
              onClick={toggleMenu}
              aria-label="Toggle navigation"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* MOBILE ONLY SIDEBAR NAV */}
      {isMenuOpen && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black bg-opacity-40 z-40 sm:hidden"
            onClick={() => setIsMenuOpen(false)}
          />

          {/* Sidebar */}
          <div className="fixed top-0 right-0 w-64 h-full bg-white z-50 shadow-xl sm:hidden animate-slide-in flex flex-col">
            <div className="flex justify-end p-4">
              <button
                onClick={() => setIsMenuOpen(false)}
                className="text-[#1e3a8a] hover:text-blue-500 text-xl"
              >
                ✕
              </button>
            </div>
            <nav className="flex flex-col divide-y divide-blue-100">
              {navLinks.map(({ path, label }, index) => (
                <Link
                  key={index}
                  href={path}
                  onClick={() => setIsMenuOpen(false)}
                  className="px-6 py-4 text-[#1e3a8a] hover:bg-[#dbeafe] hover:text-blue-900 transition font-medium"
                >
                  {label}
                </Link>
              ))}
            </nav>
          </div>
        </>
      )}
    </>
  );
}



