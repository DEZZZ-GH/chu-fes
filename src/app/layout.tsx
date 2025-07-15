



// import { Geist, Geist_Mono } from "next/font/google";
// import "./globals.css";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

import './globals.css';


import Header from '@/components/Header';
import Footer from '@/components/Footer';




export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body className="font-sans antialiased">
        <Header />
        <main className="min-h-screen px-4 py-8 max-w-6xl mx-auto">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
