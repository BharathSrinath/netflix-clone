import { useEffect } from "react";
import { MOVIE_VIDEOS_BY_ID, API_OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addMovieToWatch } from "../store/slices/moviesSlice";

const useGetMovieById = (movieId) => {
    const dispatch = useDispatch();

    const getMovieData = async () => {
      try{
        const videoData = await fetch(
          MOVIE_VIDEOS_BY_ID + movieId,
          API_OPTIONS
        );
        const jsonVideoData = await videoData.json(); 
        dispatch(addMovieToWatch(jsonVideoData));
      } catch {
        //
      }
    };
  
    useEffect(() => {
        getMovieData();
      // eslint-disable-next-line
    }, []);
}

export default useGetMovieById