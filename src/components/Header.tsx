// src/components/Header.tsx
export default function Header() {
  return (
    <header className="bg-blue-900 text-white py-4 px-6 shadow-md">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <h1 className="text-xl font-semibold tracking-wide">CHU Fès</h1>
        <nav className="space-x-4 text-sm">
  <a href="/" className="hover:underline">Accueil</a>
  <a href="/valeurs" className="hover:underline">Nos valeurs</a>
  <a href="/consultation" className="hover:underline">Consultation</a>
  <a href="/examen" className="hover:underline">Examen</a>
  <a href="/hospitalisation" className="hover:underline">Hospitalisation</a>
  <a href="/formation" className="hover:underline">Formation</a>
  <a href="/recherche" className="hover:underline">Recherche</a>
  <a href="/videos" className="hover:underline">Vidéos</a>
  <a href="/rapports" className="hover:underline">Rapports</a>
  <a href="/reglement" className="hover:underline">Règlement</a>
</nav>
      </div>
    </header>
  );
}
