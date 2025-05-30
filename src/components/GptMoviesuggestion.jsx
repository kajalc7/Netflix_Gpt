import React from 'react';
import { useSelector } from 'react-redux';
import MovieLists from './MovieLists';

const GptMoviesuggestion = () => {
  const { movieResults, movieNames } = useSelector((store) => store.gpt);

  // if movieNames is undefined or null, don't render the section
  if (!movieNames) return null;

  return (
    <div className="px-4 py-6 mx-auto my-6 max-w-6xl bg-black/60 text-white rounded-xl backdrop-blur-md">
      <h2 className="text-2xl md:text-3xl font-bold mb-6 border-b border-gray-600 pb-2 text-center">
        Recommended Movies 🎬
      </h2>
      
      {/* Movie lists for each GPT-recommended title */}
      <div className="space-y-10">
        {movieNames.map((movieName, index) => (
          <MovieLists
            key={movieName}
            title={movieName}
            movies={movieResults[index]}
          />
        ))}
      </div>
    </div>
  );
};

export default GptMoviesuggestion;
