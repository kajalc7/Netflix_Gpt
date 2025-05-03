import React, { useRef } from 'react';
import { FaSearch } from 'react-icons/fa'; // using react-icons for search icon
import lang from '../utils/languageconstant';
import { useDispatch, useSelector } from 'react-redux';
// import openai from '../utils/Openai';
import { Openai_Key } from '../utils/constants';
import { API_Options } from '../utils/constants';
import { addGptMoviesResults } from '../utils/GptSlice';


const GptSearchBar = () => {

    const dispatch = useDispatch();
    const langKey = useSelector((store) => store.config.lang)
    const searchText= useRef(null);

    // const handleGptSearchClick = async () => {
    //     console.log(searchText.current.value);

    //     //make an api call to gptapi and get movie result;

    //     const gptQuery ="Act as a Movie Recommendation System and suggest some movie for the query :" + searchText.current.value + ". Also give me 5 movies, comma seperated like the example result given ahead. Example result: Gadar,sholay,Mohabbatein,kuch kuch hota hai,Golamaal";

    //     const gptResults = await openai.chat.completions.create({
    //       model: 'gpt-4o',
    //       messages: [
    //         // {
    //         //   role: 'system',
    //         //   content: 'You are a coding assistant that talks like a pirate.',
    //         // },
    //         {
    //           role: 'user',
    //           content: gptQuery
    //         },
    //       ],
    //     });
    //     if (!gptResults.choices || gptResults.choices.length === 0) {
    //       console.error("No choices returned from GPT.");
    //       return;
    //   }
        
    //     console.log(gptResults.choices[0]?.message.content);
    //     //5 movies will be there
    //     const gptMovies = gptResults.choices[0]?.message.content.split(",");//it will give me array of movies

    //     //for earch i will serch tmdb Api

    // };

//search movie in TMDB
    const searchmovieTMDB = async (movie) =>{
      const data = await fetch ("https://api.themoviedb.org/3/search/movie?query="+movie+"&include_adult=false&language=en-US&page=1", 
        API_Options);

        const json = await data.json();
        return json.results;
    }


    const handleGptSearchClick = async () => {
      const gptQuery = "Act as a movie recommendation system and suggest movies for the query: " +
        searchText.current.value +
        ". Only give me names of 5 movies, comma separated like the given result ahead. Example Result: Avatar, Sholay, Bahubali, Singham, Once upon a time in Mumbai";
    
      try {
        const response = await fetch(
          `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${Openai_Key}`,
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              contents: [{
                parts: [{ text: gptQuery }]
              }]
            })
          }
        );
    
        const data = await response.json();
        const gptMovies = data.candidates[0].content.parts[0].text.split(",").map(movie => movie.trim());
        console.log(gptMovies);
    
        // Search each movie on TMDB
        const promiseArray = gptMovies.map(movie => searchmovieTMDB(movie));//this will array of promises
        
        const tmdbResults = await Promise.all(promiseArray);
    
        console.log(tmdbResults); // Array of movie search results

        dispatch(addGptMoviesResults({movieNames:gptMovies, movieResults:tmdbResults}))
      } catch (error) {
        console.error("Error fetching or processing GPT results:", error);
      }
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
