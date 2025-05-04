import React from 'react';
import { MoreInfoButton, PlayButton } from '../utils/constants';

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-screen aspect-video pt-[10%] px-24 absolute text-white bg-gradient-to-r from-black">
      <h1 className="text-6xl font-bold drop-shadow-lg">{title}</h1>
      <p className="py-6 text-lg w-1/4 leading-relaxed">{overview}</p>
      
      <div className="flex gap-4 mt-4">
        {/* Play Button */}
        <button className="bg-white text-black p-3 px-6 text-lg font-semibold rounded-md flex items-center hover:bg-gray-200 transition-opacity hover:opacity-80">
          <img src={PlayButton} alt="Play Icon" className="w-6 h-6 mr-2" />
          Play
        </button>

        {/* More Info Button */}
        <button className="bg-gray-500 text-white p-3 px-6 text-lg font-semibold rounded-md flex items-center hover:bg-gray-600 transition-opacity hover:opacity-80">
          <img src={MoreInfoButton} alt="More Info Icon" className="w-6 h-6 mr-2" />
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
