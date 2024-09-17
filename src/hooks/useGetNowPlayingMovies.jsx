import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addNowPlayingMovies } from "../store/slices/moviesSlice";
import { NOW_PLAYING_MOVIES_API } from "../utils/constants";

const useGetNowPlayingMovies = () => {
  const dispatch = useDispatch();

  const getNowPlayingMovies = async () => {
    const nowPlayingMoviesData = await fetch(
      NOW_PLAYING_MOVIES_API,
      API_OPTIONS
    );
    const jsonnowPlayingMoviesData = await nowPlayingMoviesData.json();
    dispatch(addNowPlayingMovies(jsonnowPlayingMoviesData.results));
  };

  useEffect(() => {
    getNowPlayingMovies();
  }, []);

};

export default useGetNowPlayingMovies;
