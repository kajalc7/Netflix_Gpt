import React from 'react';
import { useSelector } from 'react-redux';
import VideoTitle from './VideoTitle';
import VideoBackground from './Videobackground';

const MainContainer = () => {
  const movies = useSelector((store) => store.movies?.nowPLayingMovies);
  if (!movies) return;

  const mainMovie = movies[0];
  //console.log(mainMovie);

  const { original_title, overview, id } = mainMovie;

  return (
    <div className="relative w-full aspect-video overflow-hidden">
      <VideoTitle title={original_title} overview={overview} />
      <VideoBackground movieId={id} />
    </div>
  );
};

export default MainContainer;
