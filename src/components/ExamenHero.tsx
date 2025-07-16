import React from 'react';

const ExamenHero: React.FC = () => {
  return (
    <section className="bg-gradient-to-r from-blue-50 to-white py-12 px-4">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 items-center">

        {/* TEXT COLUMN */}
        <div className="animate-fade-in">
          <h1 className="text-2xl md:text-3xl font-extrabold text-blue-900 mb-4">
            Examen Ambulatoire
          </h1>
          <p className="text-gray-800 text-sm md:text-base leading-relaxed">
            Pour réserver un examen ambulatoire (radiologie, laboratoire ou explorations fonctionnelles),<br />
            présentez-vous au service concerné avec les pièces demandées.
          </p>
        </div>

        {/* IMAGE COLUMN */}
        <div className="w-full max-w-sm h-56 md:h-64 rounded-2xl shadow-lg overflow-hidden transition-transform duration-300 hover:scale-[1.02] mx-auto md:mx-0">
          <img
            src="/images/examen/clock.jpg"
            alt="Illustration Examen"
            className="w-full h-full object-cover object-center"
          />
        </div>
      </div>
    </section>
  );
};

export default ExamenHero;

