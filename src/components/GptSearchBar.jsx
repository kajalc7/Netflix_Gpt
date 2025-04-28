import React from 'react';
import { FaSearch } from 'react-icons/fa'; // using react-icons for search icon
import lang from '../utils/languageconstant';
import { useSelector } from 'react-redux';

const GptSearchBar = () => {
    const langKey = useSelector((store) => store.config.lang)
  return (
    <div className="flex justify-center pt-24">
      <form className="bg-black bg-opacity-60 p-6 rounded-lg flex items-center space-x-4 w-[700px]">
        <div className="flex items-center bg-white rounded-lg px-4 py-2 flex-grow">
          <FaSearch className="text-gray-500 mr-2" />
          <input
            type="text"
            className="flex-grow outline-none text-black"
            placeholder={lang[langKey].gptSearchPlaceholder}
          />
        </div>
        <button className="py-2 px-6 bg-red-600 text-white font-semibold rounded-lg">
          {lang[langKey].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
