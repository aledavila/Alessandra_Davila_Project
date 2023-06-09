import React from 'react';
import Link from 'next/link';

interface CharacterCardProps {
  birth?: string;
  death?: string;
  name: string;
  race?: string;
  realm?: string;
  spouse?: string;
  wikiUrl: string;
}

const CharacterCard: React.FC<CharacterCardProps> = ({
  birth,
  death,
  name,
  race,
  realm,
  spouse,
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
