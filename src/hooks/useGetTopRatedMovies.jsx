import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addTopRatedMovies } from "../store/slices/moviesSlice";
import { TOP_RATED_MOVIES_API } from "../utils/constants";

const useGetTopRatedMovies = () => {
    const dispatch = useDispatch();

    const getPTopRatedMovies = async () => {
      const topRatedMoviesData = await fetch(TOP_RATED_MOVIES_API, API_OPTIONS);
      const jsonTopRatedMoviesData = await topRatedMoviesData.json();
      dispatch(addTopRatedMovies(jsonTopRatedMoviesData.results));
    };
  
    useEffect(() => {
        getPTopRatedMovies();
    }, []);
}

export default useGetTopRatedMovies;