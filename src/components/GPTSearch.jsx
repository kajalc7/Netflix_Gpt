import React from 'react';
import GptSearchBar from './GptSearchBar';
import GptMoviesuggestion from './GptMoviesuggestion';
import { BG_LOGO } from '../utils/constants';

const GPTSearch = () => {
  return (
    <div >
      {/* Background image, positioned behind all content */}
      <div className="fixed inset-0 -z-10">
        <img
          src={BG_LOGO}
          alt="BG_logo"
          className="w-full h-full object-cover"
        />
      </div>

      {/* GPT search bar */}
      <GptSearchBar />

      {/* GPT movie suggestions */}
      <GptMoviesuggestion />
    </div>
  );
};

export default GPTSearch;
