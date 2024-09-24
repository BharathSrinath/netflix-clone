import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate, useSearchParams } from "react-router-dom";
import Header from "./Header";
import UserAccount from "./UserAccount";
import useGetMovieById from "../hooks/useGetMovieById";
import { IMAGE_CDN_URL } from "../utils/constants";
import useGetMovieTrailer from "../hooks/useGetMovieTrailer";
import VideoBackground from "./VideoBackground";

const WatchMoviePage = () => {
  const [searchParams] = useSearchParams();
  const movieId = searchParams.get("id");

  const navigate = useNavigate();

  const userIsLoggedIn = useSelector((store) => store.user.isLoggedIn);
  const isAccountSettingsOpen = useSelector(
    (store) => store.account.isAccountSelected
  );

  useGetMovieById(movieId);
  const watchMovie = useSelector((store) => store.movies.movieToWatch);

  let genres = null;
  if (watchMovie) {
    genres = watchMovie.genres.map((genre) => genre.name);
  }

  const movieTrailer = useSelector((store) => store.movies?.trailerVideo);
  useGetMovieTrailer(movieId);

  console.log(watchMovie);
  console.log(movieTrailer);

  useEffect(() => {
    !userIsLoggedIn && navigate("/login");
    // eslint-disable-next-line
  }, []);

  return (
    <div className="bg-black min-h-screen bg-opacity-90 bg-gradient-to-b from-black text-white">
      <Header />
      {watchMovie ? (
        <div className="flex h-[100vh] min-w-full justify-center items-center">
          <div className="grid grid-cols-12 w-3/5">
            <div className="col-span-4">
              <div>
                <img
                  className="h-64 w-56 rounded-xl m-1"
                  src={IMAGE_CDN_URL + watchMovie.poster_path}
                  alt="movie poster"
                />
              </div>
              <div className="w-56 m-1">
                {genres && (
                  <p>
                    <span className="font-bold">Genre: </span>
                    {genres.map((genre, index) =>
                      index === genres.length - 1 ? genre : genre + ", "
                    )}
                  </p>
                )}
                <p>
                  <span className="font-bold">Produced by: </span>
                  {watchMovie.production_companies[0].name}
                </p>
                <p>
                  <span className="font-bold">Runtime: </span>
                  {watchMovie.runtime}
                  {" minutes"}
                </p>
                <p>
                  <span className="font-bold">Rating: </span>
                  {watchMovie.vote_average.toFixed(2)}
                </p>
              </div>
            </div>
            <div className="col-span-8">
              <div>
                {movieTrailer ? (
                  <VideoBackground movieId={movieId} />
                ) : (
                  <div className="w-full border border-white h-64 flex justify-center items-center rounded-xl">
                    <p>Trailer not availble</p>
                  </div>
                )}
              </div>
              <div className="m-1">
                <p>
                  <span className="font-bold">Storyline: </span>
                  {watchMovie.overview}
                </p>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <p className="text-3xl text-white">Sorry movie not available!</p>
      )}
      {isAccountSettingsOpen && <UserAccount />}
    </div>
  );
};

export default WatchMoviePage;
