import React from 'react';
import Link from 'next/link';

interface CharacterCardProps {
  name: string;
  race?: string;
  birth?: string;
  death?: string;
  _id: string;
  spouse?: string;
  realm?: string;
  wikiUrl: string;
}

const CharacterCard: React.FC<CharacterCardProps> = ({
  name,
  race,
  birth,
  death,
  _id,
  spouse,
  realm,
  wikiUrl,
}) => {
  return (
    <div className='character-card'>
      <h3>{name}</h3>
      <div className='characteristics'>
        {race && <p>Race: {race}</p>}
        {birth && <p>Birth: {birth}</p>}
        {death && <p>Death: {death}</p>}
        {spouse && <p>Spouse: {spouse}</p>}
        {realm && <p>Realm: {realm}</p>}
      </div>
      <div className='character-links'>
        <Link href={`/characters/${name}`}>Quotes</Link>
        <a href={wikiUrl} target="_blank" rel="noopener noreferrer">
          Wiki Link
        </a>
      </div>
    </div>
  );
};

export default CharacterCard;
