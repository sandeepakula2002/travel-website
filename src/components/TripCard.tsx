'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { Trip } from '@/data/destinations';

export default function TripCard(props: Trip) {
  const router = useRouter();

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
      {props.image && (
        <div className="relative h-48">
          <Image
            src={props.image}
            alt={props['trip-name']}
            fill
            className="object-cover"
          />
        </div>
      )}
      <div className="p-6">
        <div className="flex justify-between items-start mb-4">
          <h2 className="text-xl font-semibold flex-1 mr-4">{props['trip-name']}</h2>
          <div className="text-2xl font-bold text-emerald-600 whitespace-nowrap">
            ${props.price.toLocaleString()}
          </div>
        </div>
        <div className="flex items-center text-gray-600 mb-4">
          <svg
            className="w-5 h-5 mr-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          {props.duration}
        </div>
        <div className="space-y-2">
          <h3 className="font-semibold text-gray-900">Amenities:</h3>
          <ul className="space-y-2">
            {props.amenities.map((amenity, index) => (
              <li key={index} className="flex items-center text-gray-600">
                <svg
                  className="w-4 h-4 mr-2 text-emerald-500 flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span className="flex-1">{amenity}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="p-6 border-t">
        <button
          onClick={() => router.push('/get-in-touch')}
          className="w-full bg-emerald-500 text-white py-3 px-4 rounded-lg font-semibold hover:bg-emerald-600 transition-colors duration-300 flex items-center justify-center"
        >
          <svg
            className="w-5 h-5 mr-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
            />
          </svg>
          Talk to an Expert
        </button>
      </div>
    </div>
  );
} 