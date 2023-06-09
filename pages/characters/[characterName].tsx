import React, { useEffect, useState } from 'react';
import { NextPage, NextPageContext } from 'next';
import * as API from '../../src/api';

interface Quote {
  _id: string;
  dialog: string;
  movie: string;
}

interface CharacterProps {
  characterName: string;
}

const Character: NextPage<CharacterProps> = ({ characterName }) => {
  const [quotes, setQuotes] = useState<Quote[]>([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCharacterQuotes = async () => {
      try {
        const quotes = await API.fetchQuotesByCharacter(characterName);
        setQuotes(quotes);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchCharacterQuotes();
  }, [characterName]);

  if (loading) {
    return <p className='state--handling'>Loading...</p>;
  }

  if (error) {
    return <p className='state--handling'>Error</p>;
  }

  if (quotes.length === 0) {
    return <p className='state--handling'>No quotes found for this character.</p>;
  }

  return (
    <div className='quotes-page'>
      <h2>{characterName}</h2>
      <div className='quotes-list'>
        {quotes.map((quote) => (
          <blockquote key={quote._id} className='quote'>{quote.dialog}</blockquote>
        ))}
      </div>
    </div>
  );
};

export async function getServerSideProps({ query }: NextPageContext) {
  const { characterName } = query;
  return {
    props: {
      characterName: characterName as string,
    },
  };
}

export default Character;
