import React from "react";
import { useSelector } from "react-redux";
import useGetMovieTrailer from "../hooks/useGetMovieTrailer";

const VideoBackground = ({movieId}) => {

  const trailerVideo = useSelector((store) => store.movies?.trailerVideo);

  useGetMovieTrailer(movieId);

  return (
    <div className=" w-screen ">
      <iframe className="w-screen aspect-video"
    // When the width is 100 view width, the height needs to be with respect to the width.
    // This is taken care by aspect-video which maintains 16:9 as the aspect ratio 
        src={`https://www.youtube.com/embed/${trailerVideo?.key}?autoplay=1&mute=1&loop=1`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
    </div>
  );
};

export default VideoBackground;
