import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface MovieCardProps {
  name: string;
  academyAwardNominations?: number;
  academyAwardWins?: number;
  boxOfficeRevenueInMillions?: number;
  budgetInMillions?: number;
  rottenTomatoesScore?: number;
  runtimeInMinutes?: number;
  _id: string;
}


const MovieCard: React.FC<MovieCardProps> = ({
  name,
  academyAwardNominations,
  academyAwardWins,
  boxOfficeRevenueInMillions,
  budgetInMillions,
  rottenTomatoesScore,
  runtimeInMinutes,
  _id,
}) => {
  const roundedRottenTomatoesScore = rottenTomatoesScore ? Math.round(rottenTomatoesScore) : null;

  return (
    <div className='movie-card'>
      <div className='movie-card--header'>
        <h3>{name}</h3>
        {rottenTomatoesScore && <div className='rt-score'><p>{roundedRottenTomatoesScore}</p><Image src='/images/rotten-tomatoes.png' alt='Rotten Tomatoes' width={12} height={12} /></div>}
      </div>
      {runtimeInMinutes && (
        <p className='runtime'>
          {runtimeInMinutes}m
        </p>
      )}
      <div className='academy-awards'>
        <h4>Academy Awards</h4>
        <div>
          {academyAwardNominations && <p>Nominations: {academyAwardNominations}</p>}
          {academyAwardWins !== 0 && <p>Wins: {academyAwardWins}</p>}
        </div>
      </div>
      <div>
        {boxOfficeRevenueInMillions && <p>Revenue: ${boxOfficeRevenueInMillions} mil</p>}
        {budgetInMillions && <p>Budget: ${budgetInMillions} mil</p>}
      </div>
    </div>
  );
};

export default MovieCard;
