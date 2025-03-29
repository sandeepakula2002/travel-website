'use client';

import { useRouter } from 'next/navigation';

export default function SearchBar() {
  const router = useRouter();

  return (
    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full max-w-2xl px-4">
      <div
        onClick={() => router.push('/customize')}
        className="bg-white rounded-full shadow-lg p-4 cursor-pointer hover:shadow-xl transition-shadow duration-300"
      >
        <div className="flex items-center space-x-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-gray-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
          <span className="text-gray-500 text-lg">Where would you like to go?</span>
        </div>
      </div>
    </div>
  );
} 