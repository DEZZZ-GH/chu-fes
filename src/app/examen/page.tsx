import ExamenHero from '@/components/ExamenHero';
import ExamenRemarque from '@/components/ExamenRemarque'; 
import RendezVousAccordion from '@/components/RendezVousAccordion'; 
import ReglementAccordion from '@/components/ReglementAccordion'; 

export const metadata = {
  title: "Examens Médicaux | CHU Hassan II",
  description: "Consignes, documents requis et étapes à suivre pour passer un examen médical au CHU Hassan II.",
};



export default function ExamenPage() {
  return (
    <>
      <ExamenHero />
      <ExamenRemarque />
      <RendezVousAccordion />
      <ReglementAccordion />
    </>
  );
}
