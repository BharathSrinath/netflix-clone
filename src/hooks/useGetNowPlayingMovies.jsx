import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addNowPlayingMovies } from "../store/slices/moviesSlice";
import { NOW_PLAYING_MOVIES_API } from "../utils/constants";

const useGetNowPlayingMovies = () => {

  const nowPlayingMovies = useSelector((store) => store.movies.nowPlayingMovies)

  const dispatch = useDispatch();

  const getNowPlayingMovies = async () => {
    const nowPlayingMoviesData = await fetch(
      NOW_PLAYING_MOVIES_API,
      API_OPTIONS
    );
    const jsonNowPlayingMoviesData = await nowPlayingMoviesData.json();
    dispatch(addNowPlayingMovies(jsonNowPlayingMoviesData.results));
  };

  useEffect(() => {
    !nowPlayingMovies && getNowPlayingMovies();
    // eslint-disable-next-line
  }, []);
};

export default useGetNowPlayingMovies;
