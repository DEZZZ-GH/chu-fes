'use client';
import Image from 'next/image';
import { useState, useEffect } from 'react';

const slides = [
  {
    title: 'CHU Hassan II – Fès',
    subtitle:
      'Un établissement public hospitalo-universitaire engagé dans les soins, la formation et la recherche.',
    image: '/images/accueil/accueil-s1-1.jpg',
  },
  {
    title: 'Urgences 24h/24',
    subtitle:
      'Un service réactif et disponible en continu pour répondre aux situations d\'urgence médicale à tout moment.',
    image: '/images/accueil/accueil-s1-2.jpg',
  },
  {
    title: 'Maison de l’Enfant',
    subtitle:
      'Un espace d’accueil et de soutien dédié aux enfants malades et à leurs familles pour traverser l’épreuve de la maladie avec dignité.',
    image: '/images/accueil/accueil-s1-3.jpg',
  },
  {
    title: 'Technologie Médicale Avancée',
    subtitle:
      'Des équipements de pointe pour un diagnostic précis et une prise en charge optimale des patients.',
    image: '/images/accueil/accueil-s1-4.jpg',
  },
  {
    title: 'Laboratoire de Diagnostic',
    subtitle:
      'Un centre d’analyses médicales rigoureux au service de la recherche et de la précision clinique.',
    image: '/images/accueil/accueil-s1-5.jpg',
  },
];

export default function CarouselHero() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 7000); // 7s per slide
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="w-full bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 items-center gap-10 animate-fade-in">
        <div className="space-y-6">
          <h1 className="text-4xl font-bold text-gray-900">{slides[current].title}</h1>
          <p className="text-lg text-gray-600">{slides[current].subtitle}</p>
        </div>
        <div className="w-full flex justify-center">
          <Image
            src={slides[current].image}
            alt={slides[current].title}
            width={500}
            height={350}
            className="rounded-xl shadow-lg object-cover max-h-[350px] w-full"
            priority
          />
        </div>
      </div>
    </section>
  );
} 
