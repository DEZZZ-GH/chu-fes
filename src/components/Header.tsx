'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link'; 
import { HiMenuAlt3 } from 'react-icons/hi';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);


  const toggleMenu = () => setIsMenuOpen(prev => !prev);

  useEffect(() => {
  setMounted(true); // ensure dynamic logic only runs after hydration

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
    { path: '/recherche', label: 'Recherches' },
    { path: '/videos', label: 'Vidéos' },
    { path: '/rapports', label: 'Rapports' },
    { path: '/reglement', label: 'Règlements' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 z-50 w-full ${
  mounted && isScrolled ? 'bg-[#D6F0FF]/80 backdrop-blur-md shadow h-25' : 'bg-[#f9fafb] h-24'
} text-[#1e3a8a] transition-colors duration-300 py-4 px-4`}

      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
  {/* Logo - always visible */}
  <Link href="/" className="flex items-center">
    <img src="/images/logo.png" alt="Logo CHU" className="h-18 sm:h-22" />
  </Link> 

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
    className="p-3 rounded-md text-[#1e3a8a] hover:bg-[#dbeafe] transition"
    onClick={toggleMenu}
    aria-label="Toggle navigation"
  >
    <HiMenuAlt3 className="w-8 h-8 text-[#1e3a8a]" />
  </button>
</div>
        </div>
      </header>

      {/* MOBILE ONLY SIDEBAR NAV */}
      {isMenuOpen && (
  <>
    {/* ✅ Updated backdrop — was black, now blur+transparent */}
    <div
      className="fixed inset-0 backdrop-blur-sm bg-white/30 z-40 sm:hidden"
      onClick={() => setIsMenuOpen(false)}
    />

    {/* Sidebar remains the same */}
    <div className="fixed top-0 right-0 w-64 h-full bg-white z-50 shadow-xl sm:hidden animate-slide-in flex flex-col">
      <div className="sm:hidden">
  <button
    onClick={toggleMenu}
    aria-label="Toggle navigation"
    className="relative w-10 h-10 flex flex-col justify-between items-center p-2 group"
  >
    <span
      className={`block w-8 h-1 bg-[#1e3a8a] rounded transition-transform duration-300 ease-in-out 
      ${isMenuOpen ? 'rotate-45 translate-y-3' : ''}`}
    />
    <span
      className={`block w-8 h-1 bg-[#1e3a8a] rounded transition-opacity duration-200 ease-in-out 
      ${isMenuOpen ? 'opacity-0' : ''}`}
    />
    <span
      className={`block w-8 h-1 bg-[#1e3a8a] rounded transition-transform duration-300 ease-in-out 
      ${isMenuOpen ? '-rotate-45 -translate-y-3' : ''}`}
    />
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



