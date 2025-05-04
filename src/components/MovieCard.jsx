import React from 'react';
import { Img_cdn_url } from '../utils/constants';

const MovieCard = ({ posterPath }) => {
  if (!posterPath) return null;

  return (
    <div className="w-32 sm:w-40 md:w-48 pr-2 sm:pr-4">
      <img
        alt="Movie card"
        src={Img_cdn_url + posterPath}
        className="rounded-lg w-full h-auto"
      />
    </div>
  );
};

export default MovieCard;
