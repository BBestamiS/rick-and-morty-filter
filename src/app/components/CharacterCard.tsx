'use client';

import { Character } from '@/app/types/character';

type CharacterCardProps = {
  character: Character;
};

const CharacterCard: React.FC<CharacterCardProps> = ({ character }) => {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg hover:scale-105 transition-transform duration-300">
      <img
        src={character.image}
        alt={character.name}
        className="w-full h-56 object-cover"
      />
      <div className="p-4">
        <h2 className="text-lg font-bold text-gray-800">{character.name}</h2>
        <p className="text-sm text-gray-500">{character.status} - {character.gender}</p>
      </div>
    </div>
  );
};

export default CharacterCard;