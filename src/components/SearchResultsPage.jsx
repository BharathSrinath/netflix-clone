import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import Header from "./Header";
import UserAccount from "./UserAccount";
import { IMAGE_CDN_URL } from "../utils/constants";
import { nanoid } from "@reduxjs/toolkit";

const SearchResultsPage = () => {
  const navigate = useNavigate();

  const userIsLoggedIn = useSelector((store) => store.user.isLoggedIn);
  const isAccountSettingsOpen = useSelector(
    (store) => store.account.isAccountSelected
  );

  const userQueriedMovies = useSelector(
    (store) => store.movies.userQueriedMovies
  );

  useEffect(() => {
    !userIsLoggedIn && navigate("/login");
    // eslint-disable-next-line
  }, []);

  return (
    <div className="bg-black min-h-screen">
      <Header />
      {userQueriedMovies && (
        <div className="px-4 pt-20">
          <div className="flex flex-wrap justify-center" key={nanoid()}>
            {userQueriedMovies.map((moviesArrayDetails) =>
              moviesArrayDetails.map((movieArray) => (
                <Link to={`/watch?id=${movieArray.id}`}>
                  {movieArray.poster_path && (
                  <div className="p-2 rounded-xl">
                    <img
                      className="h-64 w-48 rounded-xl"
                      src={IMAGE_CDN_URL + movieArray.poster_path}
                      alt="movie poster"
                    />
                  </div>
                  )}
                </Link>
              ))
            )}
          </div>
        </div>
      )}
      {isAccountSettingsOpen && <UserAccount />}
    </div>
  );
};

export default SearchResultsPage;
