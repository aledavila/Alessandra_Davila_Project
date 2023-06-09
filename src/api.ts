const API_KEY = process.env.NEXT_PUBLIC_API_KEY;
const URL = 'https://the-one-api.dev/v2';

const headers = {
  Authorization: `Bearer ${API_KEY}`
};

export const fetchAllCharacters = async (): Promise<any> => {
  const response = await fetch(`${URL}/character`, { headers });
  const data = await response.json();

  return data.docs;
};

export const fetchQuotesByCharacter = async (characterName: string): Promise<any> => {
  const character = await fetch(`${URL}/character?name=${characterName}`, { headers });
  const characterData = await character.json();
  const characterId = characterData.docs[0]._id;

  const response = await fetch(`${URL}/character/${characterId}/quote`, { headers });
  const data = await response.json();

  return data.docs;
};

export const fetchAllMovies = async (): Promise<any> => {
  const response = await fetch(`${URL}/movie`, { headers });
  const data = await response.json();

  return data.docs;
};
