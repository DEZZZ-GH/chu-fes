// src/app/layout.tsx
import './globals.css';
import { Inter } from 'next/font/google';

import Header from '@/components/Header';
import Footer from '@/components/Footer';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className={inter.className}>
      <head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no"
        />
      </head>
      <body className="antialiased overflow-x-hidden">
        <Header />
        <main className="min-h-screen px-4 py-8 max-w-6xl mx-auto mt-24 sm:mt-20">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}


