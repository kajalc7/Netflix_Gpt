import React from 'react';
import MovieCard from './MovieCard';

const MovieLists = ({ title, movies }) => {
  if (!movies || movies.length === 0) return null;
  //console.log(movies)
  return (
    <div className="px-4 sm:px-6">
      <h1 className="text-xl sm:text-2xl md:text-3xl py-3 text-white font-semibold">
        {title}
      </h1>
      <div
        className="flex overflow-x-auto no-scrollbar space-x-3 sm:space-x-4"
        style={{ scrollbarWidth: 'none' }}
      >
        <div className="flex">
          {movies?.map((movie) => (
            <MovieCard key={movie.id} posterPath={movie.poster_path} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieLists;
