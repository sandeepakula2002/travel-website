'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

interface TravelGroup {
  id: string;
  name: string;
  description: string;
}

const travelGroups: TravelGroup[] = [
  { id: 'solo', name: 'Solo', description: 'Traveling alone' },
  { id: 'couple', name: 'Couple', description: 'Romantic getaway' },
  { id: 'family', name: 'Family', description: 'Family vacation' },
  { id: 'friends', name: 'Friends', description: 'Trip with friends' }
];

export default function StepsPage({ params }: { params: { destination: string } }) {
  const router = useRouter();
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    days: '',
    travelGroup: '',
    rooms: '1',
    adults: '2',
    children: '0'
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleNext = () => {
    if (step < 4) {
      setStep(step + 1);
    }
  };

  const handleBack = () => {
    if (step > 1) {
      setStep(step - 1);
    } else {
      router.back();
    }
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold mb-6">How many days would you like to travel?</h2>
            <div className="flex gap-4">
              {[3, 5, 7, 10, 14].map((days) => (
                <button
                  key={days}
                  onClick={() => {
                    setFormData(prev => ({ ...prev, days: days.toString() }));
                    handleNext();
                  }}
                  className={`flex-1 p-4 rounded-lg border-2 ${
                    formData.days === days.toString()
                      ? 'border-emerald-500 bg-emerald-50'
                      : 'border-gray-200 hover:border-emerald-500'
                  }`}
                >
                  {days} Days
                </button>
              ))}
            </div>
          </div>
        );

      case 2:
        return (
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold mb-6">Who is traveling with you?</h2>
            <div className="grid grid-cols-2 gap-4">
              {travelGroups.map((group) => (
                <button
                  key={group.id}
                  onClick={() => {
                    setFormData(prev => ({ ...prev, travelGroup: group.id }));
                    handleNext();
                  }}
                  className={`p-6 rounded-lg border-2 text-left ${
                    formData.travelGroup === group.id
                      ? 'border-emerald-500 bg-emerald-50'
                      : 'border-gray-200 hover:border-emerald-500'
                  }`}
                >
                  <div className="font-semibold">{group.name}</div>
                  <div className="text-sm text-gray-500">{group.description}</div>
                </button>
              ))}
            </div>
          </div>
        );

      case 3:
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold mb-6">Configure your room options</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Number of Rooms
                </label>
                <select
                  name="rooms"
                  value={formData.rooms}
                  onChange={handleInputChange}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
                >
                  {[1, 2, 3, 4, 5].map((num) => (
                    <option key={num} value={num}>
                      {num} Room{num > 1 ? 's' : ''}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Number of Adults
                </label>
                <select
                  name="adults"
                  value={formData.adults}
                  onChange={handleInputChange}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
                >
                  {[1, 2, 3, 4, 5, 6].map((num) => (
                    <option key={num} value={num}>
                      {num} Adult{num > 1 ? 's' : ''}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Number of Children
                </label>
                <select
                  name="children"
                  value={formData.children}
                  onChange={handleInputChange}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
                >
                  {[0, 1, 2, 3, 4].map((num) => (
                    <option key={num} value={num}>
                      {num} {num === 1 ? 'Child' : 'Children'}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        );

      case 4:
        return (
          <div className="text-center space-y-4">
            <div className="text-5xl mb-4">🎉</div>
            <h2 className="text-2xl font-semibold">Congratulations!</h2>
            <p className="text-gray-600">
              Your {formData.days}-day trip to {params.destination} has been configured.
              We'll be in touch with your personalized itinerary soon!
            </p>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-3xl mx-auto py-12 px-4">
        <div className="bg-white rounded-lg shadow-lg p-8">
          {/* Progress bar */}
          <div className="mb-8">
            <div className="flex justify-between mb-2">
              {['Duration', 'Travelers', 'Rooms', 'Confirmation'].map((label, index) => (
                <div
                  key={label}
                  className={`text-sm ${
                    step > index + 1 ? 'text-emerald-500' : 'text-gray-500'
                  }`}
                >
                  {label}
                </div>
              ))}
            </div>
            <div className="h-2 bg-gray-200 rounded-full">
              <div
                className="h-full bg-emerald-500 rounded-full transition-all duration-300"
                style={{ width: `${((step - 1) / 3) * 100}%` }}
              />
            </div>
          </div>

          {/* Step content */}
          {renderStep()}

          {/* Navigation buttons */}
          <div className="mt-8 flex justify-between">
            <button
              onClick={handleBack}
              className="px-6 py-2 text-gray-600 hover:text-gray-900"
            >
              Back
            </button>
            {step < 4 && (
              <button
                onClick={handleNext}
                className="px-6 py-2 bg-emerald-500 text-white rounded-lg hover:bg-emerald-600"
              >
                Next
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
} 