import React from 'react'
import GptSearchBar from './GptSearchBar'
import GptMoviesuggestion from './GptMoviesuggestion'
import { BG_LOGO } from '../utils/constants';


const GPTSearch = () => {
  return (
    <div>
        <div className="absolute -z-10">
              <img src={BG_LOGO}
              alt="BG_logo"/>
              </div>
      <GptSearchBar/>
      <GptMoviesuggestion/>
    </div>
  )
}

export default GPTSearch
