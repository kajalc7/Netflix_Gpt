import React, { useEffect, useState } from 'react'
import { API_Options } from '../utils/constants'

const VideoBackground = ({movieId}) => {

  const[trailerId, setTrailerId] = useState(null);
//fetch trailer video

const getmovieVideos = async () =>{
   const data = await fetch('https://api.themoviedb.org/3/movie/1197306/videos?language=en-US', API_Options)
   const json = await data.json();
   console.log(json);

   const filterData = json.results.filter((video)=> video.type==="Trailer");
   const trailer = filterData.length ? filterData[0] :json.results[0];
   console.log(trailer);
   setTrailerId(trailer.key)
}

useEffect(() =>{
  getmovieVideos();
},[])

  return (
    <div>
      <iframe width="560" height="315" 
      src={"https://www.youtube.com/embed/"+trailerId} 
      title="YouTube video player" 
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
      referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
    </div>
  )
}

export default VideoBackground
