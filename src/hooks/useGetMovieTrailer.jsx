import { useEffect } from "react";
import { MOVIE_VIDEOS_BY_ID, API_OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addTrailerVideo } from "../store/slices/moviesSlice";

const useGetMovieTrailer = (movieId) => {

  const dispatch = useDispatch();

  const getMovieVideos = async () => {
    const videoData = await fetch(
      MOVIE_VIDEOS_BY_ID + movieId + "/videos",
      API_OPTIONS
    );
    const jsonVideoData = await videoData.json();
    // jsonVideoData has keys (youtube video Id's) for videos related to the movie
    // We are filtering out only trailers. But some movies may have more than one trailer or no trailer at all.
    // If they had more than one trailer, we will go with first one - filteredData[0]
    // If they had no trailers, we will go with first available video clip - jsonVideoData.results[0]
    const filteredData = jsonVideoData.results.filter(
      (video) => video.type === "Trailer"
    );
    const trailer = filteredData.length
      ? filteredData[0]
      : jsonVideoData.results[0];
    dispatch(addTrailerVideo(trailer));
  };

  useEffect(() => {
    getMovieVideos();
  }, []);

};

export default useGetMovieTrailer;
