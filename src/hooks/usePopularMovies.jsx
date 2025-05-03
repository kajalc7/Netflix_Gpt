import { API_Options } from '../utils/constants'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addPopularMovies } from '../utils/movieSlice'

const usePopularMovies = () =>{
    //fetch data from tmdb api and update store
    const dispatch = useDispatch();
    const popularmovies = useSelector(store=> store.movies.popularmovies)

    const getPopularMovies = async () =>{
      const data = await fetch(
        'https://api.themoviedb.org/3/movie/popular?&page=1', 
        API_Options
      );
      const json = await data.json();
      //console.log(json.results);
      dispatch(addPopularMovies(json.results))
    }
  
     useEffect(()=>{
      if(!popularmovies) getPopularMovies();
     },[]);
}

export default usePopularMovies;