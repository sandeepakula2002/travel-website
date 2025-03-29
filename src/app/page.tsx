import Banner from '@/components/Banner';
import SearchBar from '@/components/SearchBar';
import DestinationCards from '@/components/DestinationCards';

export default function Home() {
  return (
    <main className="min-h-screen">
      <div className="relative">
        <Banner />
        <SearchBar />
      </div>
      <DestinationCards />
    </main>
  );
}
