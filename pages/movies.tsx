import React, { useState, useEffect } from 'react';
import MovieCard from '@/components/movieCard';
import Page from '@/components/page';
import * as API from '../src/api';

interface MovieData {
  _id: string;
  academyAwardNominations?: number;
  academyAwardWins?: number;
  boxOfficeRevenueInMillions?: number;
  budgetInMillions?: number;
  name: string;
  rottenTomatoesScore?: number;
  runtimeInMinutes?: number;
}

export default function Movies() {
  const [movies, setMovies] = useState<MovieData[]>([]);
  const [error, setError] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(true);


  useEffect(() => {
    const fetchAllMovies = async () => {
      try {
        const data = await API.fetchAllMovies();
        setMovies(data);
      } catch {
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchAllMovies();
  }, []);

  return (
    <Page className='movie-page' error={error} headTitle='LOTR Movies' loading={loading}>
      {movies.map((movie) => (
        <MovieCard key={movie._id} {...movie} />
      ))}
    </Page>
  );
}
