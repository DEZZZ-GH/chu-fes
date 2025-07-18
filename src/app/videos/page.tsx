// src/app/videos/page.tsx
'use client';
import React from 'react';

const videoLinks = [
  'https://www.youtube.com/embed/dMyAoz98lAg',
  'https://www.youtube.com/embed/6jP6zvbRx1s',
  'https://www.youtube.com/embed/Z5n-RX4oax4',
  'https://www.youtube.com/embed/guuh5MecCaE',
  'https://www.youtube.com/embed/Zr4v_azQrz0',
  'https://www.youtube.com/embed/MMLl76dusMs'
];

export default function VideothequePage() {
  return (
    <div className="px-6 py-12 max-w-7xl mx-auto">
      <h1 className="text-4xl font-bold text-center mb-6">Vidéothèque</h1>
      <div className="border-b border-cyan-500 w-24 mx-auto mb-8"></div>

      <p className="text-center text-xl text-gray-700 mb-4">
        Vidéothèque du centre hospitalier universitaire Hassan II
      </p>
      <p className="text-center text-gray-500 mb-12">
        Double cliquez sur la vidéo pour la visualiser en plein écran
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {videoLinks.map((link, index) => (
          <div key={index} className="aspect-video">
            <iframe
              src={link}
              title={`video-${index}`}
              className="w-full h-full rounded-lg shadow-lg"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        ))}
      </div>
    </div>
  );
}

