import React, { useState, useEffect } from 'react';
import * as API from '../src/api';
import Head from 'next/head';
import CharacterCard from '@/components/characterCard';

interface CharacterData {
  name: string;
  race: string;
  birth?: string;
  death?: string;
  _id: string;
  spouse?: string;
  realm?: string;
  wikiUrl: string;
}

export default function Characters() {
  const [data, setData] = useState<CharacterData[]>([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAllCharacters = async () => {
      try {
        const data = await API.fetchAllCharacters();
        setData(data);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchAllCharacters();
  }, []);

  if (loading) {
    return (
      <p className='state--handling'>Loading...</p>
    )
  }

  if (error) {
    return (
      <p className='state--handling'>Error</p>
    )
  }

  console.log({ data, error, loading });

  return (
    <div className='characters-page'>
      <Head>
        <title>LOTR Characters</title>
      </Head>
      
       {data.map((character) => (
        <CharacterCard key={character._id} {...character} />
      ))}
    </div>
  )
}
