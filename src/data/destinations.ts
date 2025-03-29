export interface Trip {
  'trip-name': string;
  price: number;
  duration: string;
  image?: string;
  amenities: string[];
}

export interface Destination {
  title: string;
  trips: Trip[];
}

export const destinationData: Record<string, Destination> = {
  egypt: {
    title: 'Egypt Trips',
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
    title: 'Bhutan Trips',
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
    title: 'Turkey Trips',
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
    title: 'South Africa Trips',
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
    title: 'Kenya Trips',
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