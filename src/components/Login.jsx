import React, { useRef, useState } from "react";
import Header from "./Header";
import netflixBackground from "../assets/netflix-bg.jpg";
import validateCredentials from "../utils/SignUpValidation";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebaseConfig";
import { useDispatch } from "react-redux";
import { addUser } from "../store/slices/userSlice";
import userIcon from "../assets/user-icon.jpg";

const Login = () => {
  const [isSignIn, setIsSignIn] = useState(false);
  const [clientSideError, setClientSideError] = useState({});
  const [serverSideError, setServerSideError] = useState("");
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);

  const dispatch = useDispatch();

  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const handleClick = () => {
    if (isSignIn) {
      const credentails = validateCredentials(
        name.current?.value,
        email.current?.value,
        password.current?.value
      );
      setClientSideError(credentails);
      setIsFormSubmitted(true);

      const isValidCredentials = Object.values(clientSideError).every(
        (val) => val === true
      );
      if (isValidCredentials) {
        // SignUp logic
        createUser();
      }
      // For invalid credentials, we are handling it with a customised error messages
    } else {
      // SignIn logic
      loginUser();
    }
  };

  // copied from firebase
  const createUser = () =>
    createUserWithEmailAndPassword(
      auth,
      email.current.value,
      password.current.value
    )
      .then((userCredential) => {
        const user = userCredential.user;
        updateProfile(user, {
          displayName: name.current.value,
          photoURL: userIcon,
        })
          .then(() => {
            const { uid, email, displayName, photoURL } = auth.currentUser;
            dispatch(
              addUser({
                uid: uid,
                email: email,
                displayName: displayName,
                photoURL: photoURL,
              })
            );
          })
          .catch((error) => {});
      })
      .catch((error) => {
        // const errorCode = error.code;
        // const errorMessage = error.message;
      });

  const loginUser = () =>
    signInWithEmailAndPassword(
      auth,
      email.current.value,
      password.current.value
    )
      .then((userCredential) => {
        // Signed in
        // const user = userCredential.user;
      })
      .catch((error) => {
        const errorCode = error.code;
        // const errorMessage = error.message;
        if (errorCode === "auth/invalid-email") {
          setServerSideError("User not found");
        } else if (errorCode === "auth/invalid-credential") {
          setServerSideError("Invalid Credentials");
        }
      });

  const toggleSignInForm = () => {
    setIsSignIn(!isSignIn);
  };

  return (
    <div>
      <div className="relative h-[125vh]">
        <Header />
        <div className="absolute inset-0 w-full h-full bg-black opacity-30 z-10"></div>
        <img
          className="absolute inset-0 w-full h-full object-cover z-0"
          src={netflixBackground}
          alt="Netflix Background"
        />
        <div className="absolute inset-0 flex justify-center items-center">
          <div className="z-20 w-3/4 sm:w-2/3 md:w-1/2 lg:w-1/3 bg-black bg-opacity-75 rounded">
            <div className="py-2 my-4 md:my-2 lg:py-5 w-full flex flex-col items-center">
              <p className="text-white text-3xl self-center mx-4 w-2/3 font-bold">
                {!isSignIn ? "Sign In" : "Sign Up"}
              </p>
              <form
                onSubmit={(e) => e.preventDefault()}
                className="w-2/3 flex flex-col items-center"
              >
                {isSignIn && (
                  <>
                    <input
                      ref={name}
                      className="p-2 md:p-4 mx-2 my-4 w-full bg-black bg-opacity-20 border border-gray-600 rounded text-white"
                      type="text"
                      placeholder="Full Name"
                    />
                    <span className="text-red text-red-600">
                      {isFormSubmitted &&
                        (!clientSideError.nameNotEmpty
                          ? "Name cannot be empty"
                          : !clientSideError.isNameRightLength
                          ? "Name length should be between 2 and 20"
                          : "")}
                    </span>
                  </>
                )}
                <>
                  <input
                    ref={email}
                    className="p-2 md:p-4 mx-2 my-4 w-full bg-black bg-opacity-20 border border-gray-600 rounded text-white"
                    type="email"
                    placeholder="Email or mobile number"
                  />
                  <span className="text-red text-red-600">
                    {isFormSubmitted &&
                      (!clientSideError.emailNotEmpty
                        ? "Email cannot be empty"
                        : !clientSideError.notStartWithNumber ||
                          !clientSideError.notEndWithNumber ||
                          !clientSideError.includesAtSymbol ||
                          !clientSideError.includesDot ||
                          !clientSideError.dotAfterAt ||
                          !clientSideError.atNotFirstOrLast ||
                          !clientSideError.dotNotLast
                        ? "Not a valid email format"
                        : "")}
                  </span>
                </>
                <>
                  <input
                    ref={password}
                    className="p-2 md:p-4 mx-2 my-4 w-full bg-black bg-opacity-20  border border-gray-600 rounded text-white"
                    type="password"
                    placeholder="Password"
                  />
                  <span className="text-red text-red-600">
                    {isFormSubmitted &&
                      (!clientSideError.passwordNotEmpty
                        ? "Password cannot be empty"
                        : !clientSideError.isPasswordLongEnough
                        ? "Password length should be between 8 & 20"
                        : !clientSideError.containsLetter
                        ? "Password should contain alphabets"
                        : !clientSideError.containsNumber
                        ? "Password should contain numbers"
                        : !clientSideError.containsSpecialChar
                        ? "Password should contain special chars"
                        : "")}
                  </span>
                  <span className="text-red text-red-600 text-center">
                    {serverSideError ? serverSideError : ""}
                  </span>
                </>
                <button
                  onClick={() => handleClick()}
                  className="px-2 py-2 md:px-4 mx-2 my-4 w-full text-white font-bold bg-red-700 rounded"
                >
                  {isSignIn ? "Sign Up" : "Sign In"}
                </button>
              </form>
              {isSignIn ? (
                <p className="w-2/3 text-center text-white">
                  Already an user?{" "}
                  <button
                    onClick={() => toggleSignInForm()}
                    className="font-bold"
                  >
                    Sign In now.
                  </button>
                </p>
              ) : (
                <p className="w-2/3 text-center text-white">
                  New to Netflix?{" "}
                  <button
                    onClick={() => toggleSignInForm()}
                    className="font-bold"
                  >
                    Sign Up now.
                  </button>
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
