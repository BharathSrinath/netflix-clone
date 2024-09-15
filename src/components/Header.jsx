import React from "react";
import netflixLogo from "../assets/netflix-logo.png";
import { Link, useLocation } from "react-router-dom";
import { auth } from "../utils/firebaseConfig";
import { signOut } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import { removeUser } from "../store/slices/usersSlice";

const Header = () => {
  
  const path = useLocation();
  
  const dispatch = useDispatch();
  
  const homePath = path.pathname === "/";
  const browsePath = path.pathname === "/browse";

  const user = useSelector((store) => store.user);

  // copied from firebase
  const handleLogout = () => {
    signOut(auth).then(() => {
      dispatch(removeUser());
    }).catch((error) => {
      
    });
  }

  return (
    <div className="absolute inset-0 mx-auto z-30 sm:w-4/5 md:px-8 py-2 h-[15vh] flex items-center justify-between">
      <img className="w-48" src={netflixLogo} alt="Netflix Logo" />
      {homePath && (
        <Link to={"/login"}>
          <button className="bg-red-700 text-white font-bold py-1 px-4 mx-4 rounded">
            Sign In
          </button>
        </Link>
      )}
      {browsePath && (
        <div className="flex">
          <img className="w-8 h-8" src={user?.photoURL} alt="user icon" />
          <Link to={"/"}>
          <button onClick={() => handleLogout()} className="bg-red-700 text-white font-bold py-1 px-4 mx-4 rounded">
            Logout
          </button>
        </Link>
        </div>
        
      )}
    </div>
  );
};

export default Header;
