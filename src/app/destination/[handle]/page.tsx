'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

interface Trip {
  'trip-name': string;
  price: number;
  duration: string;
  image?: string;
  amenities: string[];
}

interface ApiResponse {
  trips: Trip[];
}

const destinationData: Record<string, ApiResponse> = {
  egypt: {
    trips: [
      {
        "trip-name": "Pyramids & Nile Adventure",
        "price": 2499,
        "duration": "8 days",
        "amenities": [
          "5-star hotel accommodation",
          "Nile cruise",
          "Private guided tours",
          "Airport transfers",
          "Daily breakfast"
        ]
      },
      {
        "trip-name": "Ancient Egypt Explorer",
        "price": 3299,
        "duration": "12 days",
        "amenities": [
          "Luxury accommodation",
          "Desert safari",
          "All meals included",
          "Professional Egyptologist guide",
          "Internal flights"
        ]
      }
    ]
  },
  bhutan: {
    trips: [
      {
        "trip-name": "Himalayan Kingdom Explorer",
        "price": 3299,
        "duration": "7 days",
        "image": "https://res.cloudinary.com/dradkp5i6/image/upload/v1739005199/himalaya_kjt686.jpg",
        "amenities": [
          "Traditional hotel stays",
          "Tiger's Nest hike",
          "Cultural shows",
          "Visa arrangement",
          "All meals"
        ]
      },
      {
        "trip-name": "Bhutan Cultural Journey",
        "price": 4199,
        "duration": "11 days",
        "amenities": [
          "Luxury hotels",
          "Festival attendance",
          "Mountain hiking",
          "Private guide",
          "All inclusive"
        ]
      }
    ]
  },
  turkey: {
    trips: [
      {
        "trip-name": "Turkish Delight Tour",
        "price": 1899,
        "duration": "7 days",
        "amenities": [
          "4-star hotels",
          "Hot air balloon ride",
          "Traditional hammam experience",
          "Guided tours",
          "Daily breakfast"
        ]
      },
      {
        "trip-name": "Grand Turkey Adventure",
        "price": 2799,
        "duration": "10 days",
        "amenities": [
          "Luxury accommodation",
          "Bosphorus cruise",
          "Cooking class",
          "All transfers",
          "Most meals included"
        ]
      }
    ]
  },
  "south-africa": {
    trips: [
      {
        "trip-name": "Safari & Cape Experience",
        "price": 3499,
        "duration": "9 days",
        "amenities": [
          "Lodge accommodation",
          "Game drives",
          "Wine tasting",
          "Local guides",
          "All meals on safari"
        ]
      },
      {
        "trip-name": "Ultimate African Adventure",
        "price": 4599,
        "duration": "14 days",
        "amenities": [
          "Luxury lodges",
          "Private safari vehicle",
          "Helicopter tour",
          "Cultural experiences",
          "All inclusive"
        ]
      }
    ]
  },
  kenya: {
    trips: [
      {
        "trip-name": "Masai Mara Safari",
        "price": 2899,
        "duration": "6 days",
        "amenities": [
          "Tented camp accommodation",
          "Game drives",
          "Masai village visit",
          "All meals",
          "Park fees"
        ]
      },
      {
        "trip-name": "Kenya Wildlife & Beach",
        "price": 3799,
        "duration": "10 days",
        "amenities": [
          "Mixed accommodation",
          "Safari experience",
          "Beach resort stay",
          "Internal flights",
          "Full board during safari"
        ]
      }
    ]
  }
};

export default function DestinationPage({ params }: { params: { handle: string } }) {
  const [trips, setTrips] = useState<Trip[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();
  const destination = params.handle.toLowerCase();

  useEffect(() => {
    const fetchTrips = async () => {
      try {
        setIsLoading(true);
        setError(null);
        
        // Get data from our predefined destinations
        if (destination in destinationData) {
          setTrips(destinationData[destination].trips);
        } else {
          // Fallback to API call for other destinations
          const response = await fetch(`https://json-data-1wm2.onrender.com/${destination}-trips`);
          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
          }
          const data: ApiResponse = await response.json();
          setTrips(data.trips);
        }
      } catch (error) {
        console.error('Error fetching trips:', error);
        setError('Failed to load trips. Please try again later.');
      } finally {
        setIsLoading(false);
      }
    };

    fetchTrips();
  }, [destination]);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-xl text-gray-600">Loading trips...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-xl text-red-600">{error}</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <h1 className="text-3xl font-bold capitalize">
            {destination.split('-').join(' ')} Trips
          </h1>
          <p className="text-gray-600 mt-2">
            Discover our carefully curated trips for your next adventure
          </p>
        </div>
      </div>

      {/* Trip Cards */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {trips.map((trip, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              {trip.image && (
                <div className="relative h-48">
                  <Image
                    src={trip.image}
                    alt={trip['trip-name']}
                    fill
                    className="object-cover"
                  />
                </div>
              )}
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <h2 className="text-xl font-semibold flex-1 mr-4">{trip['trip-name']}</h2>
                  <div className="text-2xl font-bold text-emerald-600 whitespace-nowrap">
                    ${trip.price.toLocaleString()}
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
                  {trip.duration}
                </div>
                <div className="space-y-2">
                  <h3 className="font-semibold text-gray-900">Amenities:</h3>
                  <ul className="space-y-2">
                    {trip.amenities.map((amenity, index) => (
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
            </div>
          ))}
        </div>
      </div>

      {/* Fixed Talk to Expert Button */}
      <div className="fixed bottom-0 left-0 right-0 bg-white shadow-lg border-t">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <button
            onClick={() => router.push('/get-in-touch')}
            className="w-full bg-emerald-500 text-white py-4 px-6 rounded-lg font-semibold hover:bg-emerald-600 transition-colors duration-300 flex items-center justify-center"
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
    </div>
  );
} 