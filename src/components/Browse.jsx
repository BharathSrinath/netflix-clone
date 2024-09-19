import React from "react";
import Header from "./Header";
import useGetNowPlayingMovies from "../hooks/useGetNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import useGetPopularMovies from "../hooks/useGetPopularMovies";
import useGetTopRatedMovies from "../hooks/useGetTopRatedMovies";
import useGetUpcomingMovies from "../hooks/useGetUpcomingMovies";
import { useSelector } from "react-redux";
import UserAccount from "./UserAccount";

const Browse = () => {

  const isAccountSettingsOpen = useSelector(
    (store) => store.account.isAccountSelected
  );
  
  useGetNowPlayingMovies();
  useGetPopularMovies();
  useGetTopRatedMovies();
  useGetUpcomingMovies();

  return (
    <div>
      <Header />
      <MainContainer />
      <SecondaryContainer />
      {isAccountSettingsOpen && <UserAccount />}
    </div>
  );
};

export default Browse;
