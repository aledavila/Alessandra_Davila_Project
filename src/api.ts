const API_KEY = process.env.NEXT_PUBLIC_API_KEY;
const API_URL = process.env.NEXT_PUBLIC_API_URL;

const headers = {
  Authorization: `Bearer ${API_KEY}`
};

export const fetchAllCharacters = async (): Promise<any> => {
  const response = await fetch(`${API_URL}/character`, { headers });
  const data = await response.json();
  return data.docs;
};

export const fetchQuotesByCharacter = async (characterName: string): Promise<any> => {
  const character = await fetch(`${API_URL}/character?name=${characterName}`, { headers });
  const characterData = await character.json();
  const characterId = characterData.docs[0]._id;

  const url = `https://the-one-api.dev/v2/character/${characterId}/quote`;
  const response = await fetch(url, { headers });
  const data = await response.json();

  return data.docs;
};

export const fetchAllMovies = async (): Promise<any> => {
  const response = await fetch(`${API_URL}/movie`, { headers });
  const data = await response.json();
  return data.docs;
};

// export const fetchMovieDetails = async (id: string): Promise<any> => {
//   const url = `https://the-one-api.dev/v2/movie/${id}`;
//   const response = await fetch(url, { headers });
//   const data = await response.json();

//   return data.docs;
// };

