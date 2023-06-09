import React, { useState, useEffect } from 'react';
import * as API from '../src/api';
import MovieCard from '@/components/movieCard';

interface MovieData {
  name: string;
  academyAwardNominations?: number;
  academyAwardWins?: number;
  boxOfficeRevenueInMillions?: number;
  budgetInMillions?: number;
  rottenTomatoesScore?: number;
  runtimeInMinutes?: number;
  _id: string;
}

export default function Movies() {
  const [data, setData] = useState<MovieData[]>([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    const fetchAllMovies = async () => {
      try {
        const data = await API.fetchAllMovies();
        setData(data);
      } catch {
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchAllMovies();
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
    <>
      <div className="movie-page">
        {data.map((movie) => (
          <MovieCard key={movie._id} {...movie} />
        ))}
      </div>
    </>
  )
}
