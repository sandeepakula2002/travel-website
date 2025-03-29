'use client';

import { destinationData } from '@/data/destinations';
import { notFound } from 'next/navigation';
import TripCard from '@/components/TripCard';

interface PageProps {
  params: { handle: string };
}

export default function DestinationPage({ params }: PageProps) {
  const { handle } = params;
  const destination = destinationData[handle];

  if (!destination) {
    notFound();
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 text-center">{destination.title}</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {destination.trips.map((trip, index) => (
          <TripCard key={index} {...trip} />
        ))}
      </div>
    </div>
  );
} 