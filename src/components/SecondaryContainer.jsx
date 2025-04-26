import React from 'react'
import MovieLists from './MovieLists'
import { useSelector } from 'react-redux'

const SecondaryContainer = () => {
  const movies = useSelector((store)=>store.movies)
  return (
    movies &&(
    <div className=" bg-black">
       <div className="-mt-50 pl-12 relative z-20">
      <MovieLists title={"Now Playing"} movies={movies.nowPLayingMovies}/>
      <MovieLists title={"Top Search"} movies={movies.nowPLayingMovies}/>
      <MovieLists title={"Popular"} movies={movies.PopularMovies}/>
      <MovieLists title={"Romance Hits"} movies={movies.nowPLayingMovies}/>
      <MovieLists title={"Thriller"} movies={movies.nowPLayingMovies}/>
      </div>
    </div>
  )
);
}

export default SecondaryContainer
