import React from 'react';
import MovieLists from './MovieLists';
import { useSelector } from 'react-redux';

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);

  return (
    movies && (
      <div className="bg-black">
        <div className="relative z-20 px-4 md:px-12 -mt-32 md:-mt-48">
          <MovieLists title={"Now Playing"} movies={movies.nowPLayingMovies} />
          <MovieLists title={"Top Search"} movies={movies.nowPLayingMovies} />
          <MovieLists title={"Popular"} movies={movies.PopularMovies} />
          <MovieLists title={"Romance Hits"} movies={movies.nowPLayingMovies} />
          <MovieLists title={"Thriller"} movies={movies.nowPLayingMovies} />
        </div>
      </div>
    )
  );
};

export default SecondaryContainer;
