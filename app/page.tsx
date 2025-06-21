'use client';

import { useState } from 'react';

const skiResorts = [
  {
    name: 'Aspen Snowmass',
    location: 'Colorado',
    bestFor: 'Variety of terrain and lively town.',
    image: 'https://images.unsplash.com/photo-158713863098 обратиться-to-the-mountains-and-enjoy-the-silence?q=80&w=1740&auto=format&fit=crop',
  },
  {
    name: 'Jackson Hole',
    location: 'Wyoming',
    bestFor: 'Challenging terrain and stunning views.',
    image: 'https://images.unsplash.com/photo-1551698314-7229f2f84639?q=80&w=1740&auto=format&fit=crop',
  },
  {
    name: 'Park City',
    location: 'Utah',
    bestFor: 'Largest ski area in the U.S. and great accessibility.',
    image: 'https://images.unsplash.com/photo-1549472558-5244e8a5b323?q=80&w=1740&auto=format&fit=crop',
  },
  {
    name: 'Vail',
    location: 'Colorado',
    bestFor: 'Iconic back bowls and a vast ski area.',
    image: 'https://images.unsplash.com/photo-1517456886984-f05a1e4b85c2?q=80&w=1740&auto=format&fit=crop',
  },
  {
    name: 'Telluride',
    location: 'Colorado',
    bestFor: 'Historic town charm and breathtaking scenery.',
    image: 'https://images.unsplash.com/photo-158713863098-to-the-mountains-and-enjoy-the-silence?q=80&w=1740&auto=format&fit=crop',
  },
];

export default function Home() {
  const [openResort, setOpenResort] = useState<string | null>(null);

  const toggleResort = (name: string) => {
    setOpenResort(openResort === name ? null : name);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900">
            Top Ski Resorts in the US
          </h1>
        </div>
      </header>
      <main>
        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          <div className="px-4 py-6 sm:px-0">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {skiResorts.map((resort) => (
                <div key={resort.name} className="bg-white shadow-lg rounded-lg overflow-hidden">
                  <img src={resort.image} alt={resort.name} className="w-full h-48 object-cover"/>
                  <div className="p-6">
                    <h2 className="text-2xl font-bold text-gray-900">{resort.name}</h2>
                    <p className="text-md text-gray-600">{resort.location}</p>
                    <button
                      onClick={() => toggleResort(resort.name)}
                      className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
                    >
                      {openResort === resort.name ? 'Hide Info' : 'Show Info'}
                    </button>
                    {openResort === resort.name && (
                      <div className="mt-4 p-4 bg-gray-100 rounded-md">
                        <p className="text-gray-800">{resort.bestFor}</p>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
