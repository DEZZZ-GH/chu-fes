'use client';
const reports = [
  { year: '2020', url: '/pdfs/R-Achev-2020.pdf' },
  { year: '2019', url: '/pdfs/R-Achev-2019.pdf' },
  { year: '2013', url: '/pdfs/R-Achev-2013.pdf' },
  { year: '2012', url: '/pdfs/R-Achev-2012.pdf' },
  { year: '2011', url: '/pdfs/R-Achev-2011.pdf' },
  { year: '2010', url: '/pdfs/R-Achev-2010.pdf' },
  { year: '2009', url: '/pdfs/R-Achev-2009.pdf' },
  { year: '2008', url: '/pdfs/R-Achev-2008.pdf' },
];

export default function RapportsPage() {
  return (
    <main className="max-w-5xl mx-auto px-4 py-12">
      <h1 className="text-3xl sm:text-4xl font-bold text-center mb-6 text-gray-900">
        Rapports d’achèvement
      </h1> 
     <div className="border-b border-cyan-500 w-24 mx-auto mb-8"></div>


      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {reports.map((report) => (
          <a
            key={report.year}
            href={report.url}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-2xl bg-white border border-gray-200 shadow-sm hover:shadow-md transition p-6 flex flex-col justify-between"
          >
            <div>
              <h2 className="text-xl font-semibold text-blue-800 mb-2">
                Rapport d’achèvement {report.year}
              </h2>
              <p className="text-sm text-gray-600 mb-4">
                Cliquez pour ouvrir le rapport PDF de l’année {report.year}.
              </p>
            </div>
            <span className="inline-block text-center bg-gradient-to-r from-blue-500 to-blue-600 text-white py-2 px-4 rounded-lg text-sm font-medium hover:from-blue-600 hover:to-blue-800 transition">
              Ouvrir fichier →
            </span>
          </a>
        ))}
      </div>
    </main>
  );
}

