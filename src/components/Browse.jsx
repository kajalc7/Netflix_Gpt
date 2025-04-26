import React, { useEffect } from 'react'
import Header from './Header'
import { API_Options } from '../utils/constants'
import { useDispatch } from 'react-redux'
import { addNowPlayingMovies } from '../utils/movieSlice'

const Browse = () => {
//fetch data from tmdb api and update store
  const dispatch = useDispatch();

  const getNowPlayingMovies = async () =>{
    const data = await fetch(
      'https://api.themoviedb.org/3/movie/now_playing?page=1', 
      API_Options
    );
    const json = await data.json();
    console.log(json.results);
    dispatch(addNowPlayingMovies(json.results))
  }

   useEffect(()=>{
     getNowPlayingMovies();
   },[]);

  return (
    <div>
      <Header/>
    </div>
  )
}

export default Browse
