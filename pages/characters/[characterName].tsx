import React, { useEffect, useState } from 'react';
import { NextPage, NextPageContext } from 'next';
import Page from '@/components/page';
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
  const [error, setError] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchCharacterQuotes = async () => {
      try {
        const data = await API.fetchQuotesByCharacter(characterName);
        setQuotes(data);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchCharacterQuotes();
  }, [characterName]);

  if (!error && !loading && quotes.length === 0) {
    return <p className='state--handling'>No quotes found for this character.</p>;
  }

  return (
    <Page className='quotes-page' error={error} headTitle='LOTR Character' loading={loading}>
      <h2>{characterName}</h2>
      <div className='quotes-list'>
        {quotes.map((quote) => (
          <blockquote key={quote._id} className='quote'>{quote.dialog}</blockquote>
        ))}
      </div>
    </Page>
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
