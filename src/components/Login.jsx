import React, { useRef, useState } from "react";
import Header from "./Header";
import netflixBackground from "../assets/netflix-bg.jpg";
import validateCredentials from "../utils/SignUpValidation";

const Login = () => {
  const [isSignIn, setIsSignIn] = useState(false);
  const [error, setError] = useState({});
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);

  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const handleClick = () => {
    const credentails = validateCredentials(
      name.current?.value,
      email.current?.value,
      password.current?.value
    );
    setError(credentails);
    setIsFormSubmitted(true);
  };

  const toggleSignInForm = () => {
    setIsSignIn(!isSignIn);
  };

  return (
    <div>
      <div className="relative h-[100vh] xl">
        <Header />
        <div className="absolute inset-0 bg-black opacity-30 z-10"></div>
        <img
          className="absolute inset-0 w-full h-full object-fill z-0"
          src={netflixBackground}
          alt="Netflix Background"
        />
        <div className="absolute inset-0 z-20 flex justify-center items-center">
          <div className="w-3/4 sm:w-2/3 md:w-1/2 md:h-[70vh] lg:w-1/3 lg:h-[80vh] bg-black bg-opacity-75">
            <div className="py-5 md:my-5 lg:my-0 lg:py-10 w-full flex flex-col items-center">
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
                      className="p-4 m-2 md:m-[3] lg:m-4 w-full bg-black bg-opacity-20 border border-gray-600 rounded text-white"
                      type="text"
                      placeholder="Full Name"
                    />
                    <span className="text-red text-red-600">
                      {isFormSubmitted &&
                        (error.isNameEmpty
                          ? "Name cannot be empty"
                          : !error.isNameRightLength
                          ? "Name length should be between 2 and 20"
                          : "")}
                    </span>
                  </>
                )}
                <>
                  <input
                    ref={email}
                    className="p-4 m-2 md:m-[3] lg:m-4 w-full bg-black bg-opacity-20 border border-gray-600 rounded text-white"
                    type="email"
                    placeholder="Email or mobile number"
                  />
                  <span className="text-red text-red-600">
                    {isFormSubmitted &&
                      (error.isEmailEmpty
                        ? "Email cannot be empty"
                        : !error.notStartWithNumber ||
                          !error.notEndWithNumber ||
                          !error.includesAtSymbol ||
                          !error.includesDot ||
                          !error.dotAfterAt ||
                          !error.atNotFirstOrLast ||
                          !error.dotNotLast
                        ? "Not a valid email format"
                        : "")}
                  </span>
                </>
                <>
                  <input
                    ref={password}
                    className="p-4 m-2 md:m-[3] lg:m-4 w-full bg-black bg-opacity-20  border border-gray-600 rounded text-white"
                    type="password"
                    placeholder="Password"
                  />
                  <span className="text-red text-red-600">
                    {isFormSubmitted &&
                      (error.isPasswordEmpty
                        ? "Password cannot be empty"
                        : !error.isPasswordLongEnough
                        ? "Password length should be between 8 & 20"
                        : !error.containsLetter
                        ? "Password should contain alphabets"
                        : !error.containsNumber
                        ? "Password should contain numbers"
                        : !error.containsSpecialChar
                        ? "Password should contain special chars"
                        : "")}
                  </span>
                </>
                {isSignIn ? (
                  <button
                    onClick={() => handleClick()}
                    className="px-4 py-2 m-2 md:m-[3] lg:m-4 w-full text-white font-bold bg-red-700 rounded"
                  >
                    Sign Up
                  </button>
                ) : (
                  <button className="px-4 py-2 m-2 md:m-[3] lg:m-4 w-full text-white font-bold bg-red-700 rounded">
                    Sign In
                  </button>
                )}
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
