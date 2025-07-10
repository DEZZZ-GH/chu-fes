// src/components/Footer.tsx
export default function Footer() {
  return (
    <footer className="bg-gray-100 text-center text-xs text-gray-600 py-4 mt-8">
      © {new Date().getFullYear()} CHU Fès. Tous droits réservés.
    </footer>
  );
}
