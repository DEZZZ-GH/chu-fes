import React from 'react';

const ConsultationSection4: React.FC = () => {
  return (
    <section className="bg-gradient-to-r from-blue-50 to-blue-100 py-16 px-6 animate-fade-in">
      <div className="max-w-7xl mx-auto">

        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-blue-800 mb-8 text-center whitespace-nowrap">
          TARIFICATION
        </h2>

        {/* Intro */}
        <p className="text-center text-gray-700 text-base leading-relaxed mb-10 max-w-3xl mx-auto">
          Les consultations au niveau du CCE se font soit par un médecin résident ou un professeur.
        </p>

        {/* Table */}
        <div className="overflow-x-auto rounded-lg shadow-md">
          <table className="min-w-full text-sm text-gray-800 border border-gray-300 bg-white">
            <thead className="bg-blue-200 text-blue-900 text-left">
              <tr>
                <th className="px-6 py-4 font-semibold border border-gray-300">Opérateur</th>
                <th className="px-6 py-4 font-semibold border border-gray-300">Tarif mutualiste (en dirhams)</th>
                <th className="px-6 py-4 font-semibold border border-gray-300">Tarif payant (en dirhams)</th>
              </tr>
            </thead>
            <tbody>
              <tr className="hover:bg-blue-50 transition">
                <td className="px-6 py-4 border border-gray-300 font-medium">Médecin résident</td>
                <td className="px-6 py-4 border border-gray-300">75</td>
                <td className="px-6 py-4 border border-gray-300">60</td>
              </tr>
              <tr className="hover:bg-blue-50 transition">
                <td className="px-6 py-4 border border-gray-300 font-medium">Médecin professeur</td>
                <td className="px-6 py-4 border border-gray-300">120</td>
                <td className="px-6 py-4 border border-gray-300">100</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default ConsultationSection4;
