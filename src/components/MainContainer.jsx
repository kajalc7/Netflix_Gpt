import React from 'react'
import { useSelector } from 'react-redux'
import VideoTitle from './VideoTitle'
import VideoBackground from './Videobackground'

const MainContainer = () => {
    const movies = useSelector((store) => store.movies?.nowPlayingMovies);
    if (!movies) return null;
    const mainMovie = movies[0];
    console.log(mainMovie);

  return (
    <div>
      <VideoTitle/>
      <VideoBackground />
    </div>
  );
}

export default MainContainer;
