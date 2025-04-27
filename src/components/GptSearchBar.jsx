import React from 'react';
import { FaSearch } from 'react-icons/fa'; // using react-icons for search icon

const GptSearchBar = () => {
  return (
    <div className="flex justify-center pt-24">
      <form className="bg-black bg-opacity-60 p-6 rounded-lg flex items-center space-x-4 w-[700px]">
        <div className="flex items-center bg-white rounded-lg px-4 py-2 flex-grow">
          <FaSearch className="text-gray-500 mr-2" />
          <input
            type="text"
            className="flex-grow outline-none text-black"
            placeholder="What would you like to watch today?"
          />
        </div>
        <button className="py-2 px-6 bg-red-600 text-white font-semibold rounded-lg">
          Search
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
