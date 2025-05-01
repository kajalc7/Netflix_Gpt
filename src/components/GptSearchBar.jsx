import React, { useRef } from 'react';
import { FaSearch } from 'react-icons/fa'; // using react-icons for search icon
import lang from '../utils/languageconstant';
import { useSelector } from 'react-redux';
import openai from '../utils/Openai';

const GptSearchBar = () => {
    const langKey = useSelector((store) => store.config.lang)
    const searchText= useRef(null);

    const handleGptSearchClick = async () => {
        console.log(searchText.current.value);

        //make an api call to gptapi and get movie result;

        const gptQuery ="Act as a Movie Recommendation System and suggest some movie for the query :" + searchText.current.value + ". Also give me 5 movies, comma seperated like the example result given ahead. Example result: Gadar,sholay,Mohabbatein,kuch kuch hota hai,Golamaal";

        const gptResults = await openai.chat.completions.create({
          model: 'gpt-4o',
          messages: [
            // {
            //   role: 'system',
            //   content: 'You are a coding assistant that talks like a pirate.',
            // },
            {
              role: 'user',
              content: gptQuery
            },
          ],
        });
        if (!gptResults.choices || gptResults.choices.length === 0) {
          console.error("No choices returned from GPT.");
          return;
      }
        
        console.log(gptResults.choices[0]?.message.content);
        //5 movies will be there
        const gptMovies = gptResults.choices[0]?.message.content.split(",");//it will give me array of movies

        //for earch i will serch tmdb Api

    };

  return (
    <div className="flex justify-center pt-24">
      <form className="bg-black bg-opacity-60 p-6 rounded-lg flex items-center space-x-4 w-[700px]"  onSubmit={(e)=>e.preventDefault()}>
        <div className="flex items-center bg-white rounded-lg px-4 py-2 flex-grow">
          <FaSearch className="text-gray-500 mr-2" />
          <input
            ref={searchText}
            type="text"
            className="flex-grow outline-none text-black"
            placeholder={lang[langKey].gptSearchPlaceholder}
          />
        </div>
        <button className="py-2 px-6 bg-red-600 text-white font-semibold rounded-lg" onClick= {handleGptSearchClick}>
          {lang[langKey].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
