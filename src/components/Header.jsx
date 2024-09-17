import React, { useEffect } from "react";
import netflixLogo from "../assets/netflix-logo.png";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { auth } from "../utils/firebaseConfig";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../store/slices/userSlice";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const path = useLocation();

  const homePath = path.pathname === "/";
  const browsePath = path.pathname === "/browse";

  const user = useSelector((store) => store.user);

  // copied from firebase
  const handleLogout = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        navigate("/error");
      });
  };

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

  return (
    // <div className="absolute inset-0 mx-auto z-30 sm:w-4/5 md:px-8 py-2 h-[15vh] flex items-center justify-between">
    <div
      className={`${
        browsePath
          ? "fixed top-0 bg-black w-screen"
          : "absolute inset-0 sm:w-4/5 "
      } mx-auto md:px-8 py-2 z-30 h-[15vh] flex items-center justify-between`}
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
        <div className="flex">
          <img className="w-8 h-8" src={user?.photoURL} alt="user icon" />
          <button
            onClick={() => handleLogout()}
            className="bg-red-700 text-white font-bold py-1 px-4 mx-4 rounded"
          >
            Logout
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
