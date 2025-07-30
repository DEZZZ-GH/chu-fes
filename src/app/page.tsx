import CarouselHero from '@/components/CarouselHero';
import NewsSection from '@/components/NewsSection';
import RechercheSection from '@/components/RechercheSection';

export const metadata = {
  title: 'CHU Hassan II de Fès – Accueil',
  description: 'Bienvenue sur le site officiel du Centre Hospitalier Universitaire Hassan II de Fès. Découvrez nos services, valeurs et actualités.',
  robots: 'index, follow',
};

export default function HomePage() {
  return (
    <>
      <CarouselHero />
      <NewsSection />
      <RechercheSection />
    </>
  );
}

