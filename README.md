# Travel Destination Explorer

A modern web application built with Next.js for exploring travel destinations and trip packages. Users can browse through various destinations, view trip details, and get in touch with travel experts.

## Features

- Browse destinations including Egypt, Bhutan, Turkey, South Africa, and Kenya
- View detailed trip information including prices, duration, and amenities
- Responsive design that works on all devices
- Contact form for getting in touch with travel experts
- Modern UI with smooth transitions and animations

## Tech Stack

- Next.js 14
- TypeScript
- Tailwind CSS
- React

## Getting Started

First, clone the repository:

```bash
git clone https://github.com/yourusername/travel-destination-explorer.git
cd travel-destination-explorer
```

Install the dependencies:

```bash
npm install
# or
yarn install
```

Run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

```
src/
├── app/                    # Next.js app directory
│   ├── destination/       # Destination pages
│   └── get-in-touch/     # Contact form page
├── components/            # React components
└── data/                 # Data files
```

## Available Routes

- `/` - Home page
- `/destination/[handle]` - Individual destination pages
  - `/destination/egypt`
  - `/destination/bhutan`
  - `/destination/turkey`
  - `/destination/south-africa`
  - `/destination/kenya`
- `/get-in-touch` - Contact form

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.
