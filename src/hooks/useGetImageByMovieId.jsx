import { useState, useEffect } from "react";
import { IMAGE_CDN_URL, IMAGE_BY_MOVIE_ID, API_OPTIONS } from "../utils/constants";

const useGetImageByMovieId = (movieId) => {
  const [moviePoster, setMoviePoster] = useState(null);

  const fetchImageByMovieId = async () => {
    try{
      const imageArray = await fetch(`${IMAGE_BY_MOVIE_ID + movieId}/images`, API_OPTIONS);
      const jsonImageArray = await imageArray.json();
      const moviePosterPath = await jsonImageArray?.backdrops[0]?.file_path;
      const moviePosterUrl = IMAGE_CDN_URL + moviePosterPath;
      setMoviePoster(moviePosterUrl);
    } catch {
      //
    }
    
  };

  useEffect(() => {
    fetchImageByMovieId();
    // eslint-disable-next-line
  }, []);

  return moviePoster;
};

export default useGetImageByMovieId;
