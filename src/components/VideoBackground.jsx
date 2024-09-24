import React from "react";
import { useSelector } from "react-redux";
import useGetMovieTrailer from "../hooks/useGetMovieTrailer";
import { useLocation } from "react-router-dom";

const VideoBackground = ({movieId}) => {

  const trailerVideo = useSelector((store) => store.movies?.trailerVideo);
  const path = useLocation();

  const browsePath = path.pathname === "/browse";

  useGetMovieTrailer(movieId);

  return (
    <div className={`${browsePath ? "w-screen -mt-30 md:-mt-10" : "w-full h-64 rounded m-1"}`}>
      <iframe className={`${browsePath ? "w-screen aspect-video" : "w-full h-64 rounded"}`}
    // When the width is 100 view width, the height needs to be with respect to the width.
    // This is taken care by aspect-video which maintains 16:9 as the aspect ratio 
        // src={`https://www.youtube.com/embed/${trailerVideo?.key}?autoplay=1&mute=1&loop=1&playlist=${trailerVideo?.key}`}
        src={`https://www.youtube.com/embed/${trailerVideo?.key}?${browsePath && `autoplay=1&mute=1&loop=1&playlist=${trailerVideo?.key}`}`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
    </div>
  );
};

export default VideoBackground;
