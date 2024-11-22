import FilterBar from '@/app/components/FilterBar';
import CharacterCard from '@/app/components/CharacterCard';
import { Character } from '@/app/types/character';

async function fetchCharacters(status?: string, gender?: string): Promise<Character[]> {
  const params = new URLSearchParams();
  if (status) params.append('status', status);
  if (gender) params.append('gender', gender);

  const res = await fetch(`https://rickandmortyapi.com/api/character?${params.toString()}`, {
    cache: 'no-store',
  });

  if (!res.ok) {
    throw new Error('Failed to fetch characters');
  }

  const data = await res.json();
  return data.results;
}

export default async function Page({
  searchParams,
}: {
  searchParams: { [key: string]: string | undefined };
}) {
  const status = searchParams?.status ?? '';
  const gender = searchParams?.gender ?? '';

  const characters = await fetchCharacters(status, gender);

  return (
    <div className="min-h-screen flex flex-col items-center bg-gradient-to-r from-gray-100 to-gray-200 overflow-hidden">
      <h1 className="text-5xl font-extrabold text-indigo-700 text-center my-10">
        Rick and Morty Characters
      </h1>
      <FilterBar status={status} gender={gender} />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mb-10 overflow-auto">
        {characters.map((char) => (
          <CharacterCard key={char.id} character={char} />
        ))}
      </div>
      <footer className="w-full bg-gray-800 text-white text-center py-4 mt-auto">
        Beyazıt Bestami Sarıkaya
      </footer>
    </div>
  );
}