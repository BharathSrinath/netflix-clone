import React, { useEffect, useRef } from "react";
import netflixLogo from "../assets/netflix-logo.png";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { auth } from "../utils/firebaseConfig";
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../store/slices/userSlice";
import Dropdown from "./Dropdown";
import { openAccountSettings } from "../store/slices/accountSlice";
import SearchBar from "./SearchBar";
import { closeSearchView, openSearchView } from "../store/slices/searchSlice";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const path = useLocation();
  const searchContainer = useRef();

  const showSearch = useSelector((store) => store.search.showSearch);

  const homePath = path.pathname === "/";
  const browsePath = path.pathname === "/browse";

  // The onAuthStateChanged method helps track the user's authentication status. If (user) is true, it means the user is signed in.
  // From the user object, we destructure uid, email, displayName, and photoURL, and dispatch an action. If the user doesn't exist (i.e., when logged out), we dispatch another action to remove the user.
  // This function behaves like an event listener, so once it's no longer needed, we perform cleanup.
  // It returns a function called unsubscribe, which is used to clean up the listener.
  // We place this function in the header because 'navigate' can only be used within components that are wrapped by 'appRouter'. Additionally, the auth state can change from any component, and since the header is common to all components, it's a suitable location.

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
      } else if (!user && homePath) {
        dispatch(removeUser());
        navigate("/");
      } else {
        dispatch(removeUser());
        navigate("/login");
      }
    });

    // Unsubscribe when component unmounts
    return () => unsubscribe();
    // eslint-disable-next-line
  }, []);

  useEffect(() => {

    if (showSearch) window.addEventListener("click", handleClickOutside);

    return () => window.removeEventListener("click", handleClickOutside);
    // eslint-disable-next-line
  }, [showSearch]);

  const handleClickOutside = (e) => {
    if (searchContainer.current && !searchContainer.current.contains(e.target)) {
      dispatch(closeSearchView()); 
    }
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
            browsePath
              ? "fixed top-0 bg-black w-screen h-[12vh]"
              : "absolute inset-0 sm:w-4/5 h-[15vh]"
          } mx-auto md:px-8 z-30 py-2 flex items-center justify-between`}
        >
          <img className="w-48" src={netflixLogo} alt="Netflix Logo" />
          {homePath && (
            <Link to={"/login"}>
              <button className="bg-red-700 text-white font-bold py-1 px-4 mx-4 rounded">
                Sign In
              </button>
            </Link>
          )}
          {browsePath && (
            <Dropdown
              handleSearchClick={(e) => handleSearchClick(e)}
              handleAccountClick={() => handleAccountClick()}
            />
          )}
        </div>
      )}
    </>
  );
};

export default Header;
