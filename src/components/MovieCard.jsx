import React from 'react'
import { Img_cdn_url } from '../utils/constants'

const MovieCard = ({posterPath}) => {
  if(!posterPath) return null;
  return (
    <div className="w-48 pr-4">
      <img alt="Movie card"
      src={Img_cdn_url + posterPath}
      />
    </div>
  )
}

export default MovieCard;
