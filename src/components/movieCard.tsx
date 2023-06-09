import React from 'react';
import Image from 'next/image';

interface MovieCardProps {
  academyAwardNominations?: number;
  academyAwardWins?: number;
  boxOfficeRevenueInMillions?: number;
  budgetInMillions?: number;
  name: string;
  rottenTomatoesScore?: number;
  runtimeInMinutes?: number;
}

const MovieCard: React.FC<MovieCardProps> = ({
  academyAwardNominations,
  academyAwardWins,
  boxOfficeRevenueInMillions,
  budgetInMillions,
  name,
  rottenTomatoesScore,
  runtimeInMinutes,
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
