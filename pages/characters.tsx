import React, { useState, useEffect } from 'react';
import CharacterCard from '@/components/characterCard';
import Page from '@/components/page';
import * as API from '../src/api';

interface CharacterData {
  _id: string;
  birth?: string;
  death?: string;
  name: string;
  race: string;
  realm?: string;
  spouse?: string;
  wikiUrl: string;
}

export default function Characters() {
  const [characters, setCharacters] = useState<CharacterData[]>([]);
  const [error, setError] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchAllCharacters = async () => {
      try {
        const data = await API.fetchAllCharacters();
        setCharacters(data);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchAllCharacters();
  }, []);

  return (
    <Page className='characters-page' error={error} headTitle='LOTR Characters' loading={loading}>
      {characters.map((character) => (
        <CharacterCard key={character._id} {...character} />
      ))}
    </Page>
  );
}
