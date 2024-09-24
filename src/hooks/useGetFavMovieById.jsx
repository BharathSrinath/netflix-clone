import { useEffect, useState } from "react";
import { MOVIE_VIDEOS_BY_ID, API_OPTIONS } from "../utils/constants";

const useGetFavMovieById = (movieId) => {

    const [movieData, setMovieData] = useState(null);

    const getMovieData = async () => {
      try{
        const videoData = await fetch(
          MOVIE_VIDEOS_BY_ID + movieId,
          API_OPTIONS
        );
        const jsonVideoData = await videoData.json(); 
        setMovieData(jsonVideoData);
      } catch {
        //
      }
    };
  
    useEffect(() => {
        getMovieData();
      // eslint-disable-next-line
    }, []);

    return movieData;
}

export default useGetFavMovieById