'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

interface Destination {
  name: string;
  tag: 'HONEYMOON' | 'TRENDING' | 'POPULAR' | 'IN SEASON' | 'BUDGET';
}

const destinations: Destination[] = [
  { name: 'Maldives', tag: 'HONEYMOON' },
  { name: 'Europe', tag: 'TRENDING' },
  { name: 'Singapore', tag: 'POPULAR' },
  { name: 'Bali', tag: 'IN SEASON' },
  { name: 'Thailand', tag: 'BUDGET' },
  { name: 'Abu Dhabi', tag: 'POPULAR' },
  { name: 'Dubai', tag: 'TRENDING' },
  { name: 'Japan', tag: 'IN SEASON' },
  { name: 'Australia', tag: 'POPULAR' }
];

const tagColors = {
  'HONEYMOON': 'bg-pink-100 text-pink-800',
  'TRENDING': 'bg-green-100 text-green-800',
  'POPULAR': 'bg-purple-100 text-purple-800',
  'IN SEASON': 'bg-emerald-100 text-emerald-800',
  'BUDGET': 'bg-amber-100 text-amber-800'
};

export default function CustomizePage() {
  const [search, setSearch] = useState('');
  const [selectedDestination, setSelectedDestination] = useState<string | null>(null);
  const router = useRouter();

  const filteredDestinations = destinations.filter(dest =>
    dest.name.toLowerCase().includes(search.toLowerCase())
  );

  const handleDestinationSelect = (destination: string) => {
    setSelectedDestination(destination);
    router.push(`/customize/${destination.toLowerCase()}/steps`);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto py-12 px-4">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold mb-2">
            What's <span className="text-emerald-500">your pick</span> for your next vacation?
          </h1>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-6">
          <div className="relative">
            <input
              type="text"
              placeholder="Pick your destination"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full p-4 pl-12 text-lg border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />
            <svg
              className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>

          <div className="mt-6 space-y-2">
            {filteredDestinations.map((dest) => (
              <button
                key={dest.name}
                onClick={() => handleDestinationSelect(dest.name)}
                className="w-full text-left p-4 rounded-lg hover:bg-gray-50 transition-colors duration-150 flex items-center justify-between group"
              >
                <span className="text-lg text-gray-700 group-hover:text-gray-900">
                  {dest.name}
                </span>
                <span className={`text-xs px-2 py-1 rounded-full ${tagColors[dest.tag]}`}>
                  {dest.tag}
                </span>
              </button>
            ))}
            {filteredDestinations.length === 0 && (
              <div className="text-center py-8 text-gray-500">
                No destinations found matching your search
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
} 