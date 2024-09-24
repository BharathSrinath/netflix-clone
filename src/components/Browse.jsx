import React, { useEffect } from "react";
import Header from "./Header";
import useGetNowPlayingMovies from "../hooks/useGetNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import useGetPopularMovies from "../hooks/useGetPopularMovies";
import useGetTopRatedMovies from "../hooks/useGetTopRatedMovies";
import useGetUpcomingMovies from "../hooks/useGetUpcomingMovies";
import { useSelector } from "react-redux";
import UserAccount from "./UserAccount";
import { useNavigate } from "react-router-dom";

const Browse = () => {

  const navigate = useNavigate();

  const isAccountSettingsOpen = useSelector(
    (store) => store.account.isAccountSelected
  );
  
  const userIsLoggedIn = useSelector((store) => store.user.isLoggedIn);

  useEffect(() => {
    !userIsLoggedIn && navigate("/login");
    // eslint-disable-next-line
  }, []);

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
