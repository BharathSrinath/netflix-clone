import React, { useEffect, useRef } from "react";
import netflixLogo from "../assets/netflix-logo.png";
import { Link, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Dropdown from "./Dropdown";
import { openAccountSettings } from "../store/slices/accountSlice";
import SearchBar from "./SearchBar";
import { closeSearchView, openSearchView } from "../store/slices/searchSlice";

const Header = () => {
  
  const dispatch = useDispatch();
  const path = useLocation();
  const searchContainer = useRef();

  const showSearch = useSelector((store) => store.search.showSearch);

  const homePath = path.pathname === "/";
  const browsePath = path.pathname === "/browse";
  const resultsPath = path.pathname === "/results";
  const watchPath = path.pathname === "/watch";

  useEffect(() => {

    showSearch && window.addEventListener("click", handleClickOutside);

    return () => window.removeEventListener("click", handleClickOutside);
    // eslint-disable-next-line
  }, [showSearch]);

  const handleClickOutside = (e) => {
    searchContainer.current && !searchContainer.current.contains(e.target) && dispatch(closeSearchView());
  };

  const handleAccountClick = () => {
    dispatch(openAccountSettings());
  };

  const handleSearchClick = (e) => {
    e.stopPropagation();
    dispatch(openSearchView());
  };

  return (
    <>
      {showSearch ? (
        <div ref={searchContainer}
          id="searchBar"
          className="fixed top-0 bg-black w-screen h-[12vh] mx-auto md:px-8 z-30 py-2 flex items-center justify-center"
        >
          <SearchBar />
        </div>
      ) : (
        <div
          className={`${
            (browsePath || resultsPath || watchPath)
              ? "fixed top-0 bg-black w-screen h-[12vh]"
              : "absolute inset-0 sm:w-4/5 h-[15vh]"
          } mx-auto md:px-8 z-30 py-2 flex items-center justify-between`}
        >
          <Link to={"/browse"}>
            <img className="w-48" src={netflixLogo} alt="Netflix Logo" />
          </Link>
          {homePath && (
            <Link to={"/login"}>
              <button className="bg-red-700 text-white font-bold py-1 px-4 mx-4 rounded">
                Sign In
              </button>
            </Link>
          )}
          {(browsePath || resultsPath || watchPath) && (
            <Dropdown
              handleSearchClick={handleSearchClick}
              handleAccountClick={handleAccountClick}
            />
          )}
        </div>
      )}
    </>
  );
};

export default Header;
