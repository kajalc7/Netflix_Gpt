import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { addTrailerVideo } from '../utils/movieSlice';
import { API_Options } from '../utils/constants'


const useMovieTrailer  = () => {

    const dispatch= useDispatch();
    //fetch trailer video and updating store with trailer video data
    
    const getmovieVideos = async () =>{
       const data = await fetch('https://api.themoviedb.org/3/movie/1197306/videos?language=en-US', API_Options)
       const json = await data.json();
       console.log(json);
    
       const filterData = json.results.filter((video)=> video.type==="Trailer");
       const trailer = filterData.length ? filterData[0] :json.results[0];
       console.log(trailer);
       dispatch(addTrailerVideo(trailer));
    };
    
    useEffect(() => {
      getmovieVideos();
    },[])

}
export default useMovieTrailer;