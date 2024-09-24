import React, { useEffect } from "react";
import netflixBackground from "../assets/netflix-bg.jpg";
import telivisionIcon from "../assets/telivision-core-small.svg";
import downloadIcon from "../assets/download-core-small.svg";
import telescopeIcon from "../assets/telescope-core-small.svg";
import profilesIcon from "../assets/profiles-core-small.svg";
import Header from "./Header";
import Footer from "./Footer";
import { Link, useNavigate } from "react-router-dom";
import FAQ from "./FAQ";
import { useSelector } from "react-redux";

const Home = () => {
  
  const userIsLoggedIn = useSelector((store) => store.user.isLoggedIn);
  const navigate = useNavigate();

  useEffect(() => {
    userIsLoggedIn && navigate("/browse");
    // eslint-disable-next-line
  }, [])
  
  return (
    <div>
      <div className="relative h-[100vh] xl">
        <Header />
        <div className="absolute inset-0 bg-black opacity-75 z-10"></div>
        <img
          className="absolute inset-0 w-full h-full object-fill z-0"
          src={netflixBackground}
          alt="Netflix Background"
        />
        <div className="absolute inset-0 z-20 text-white px-4 flex flex-col justify-center items-center">
          <div className="w-full sm:w-4/5 lg:w-2/3 xl:w-1/2 text-center">
            <p className="leading-snug text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4">
              Unlimited movies, TV shows, and more
            </p>
            <p className=" leading-snug text-xl font-bold mb-4">
              Starts at ₹149. Cancel anytime.
            </p>
            <p className=" leading-loose mb-4">
              Ready to watch? Enter your email to create or restart your
              membership.
            </p>
          </div>
          <div>
            <Link to={"/login"}>
              <button className="bg-red-700 text-white text-xl font-bold p-4 rounded">
                Get Started
              </button>
            </Link>
          </div>
        </div>
      </div>
      <div className="bg-black text-white">
        <div className="mx-auto py-10 w-11/12 ">
          <p className="font-bold text-2xl mx-[4%] md:mx-[8%] lg:mx-[6%]">
            More reasons to join
          </p>
          <div className="flex flex-wrap justify-center items-center">
            <div className="relative w-full h-[40vh] m-4 px-4 bg-gradient-to-br from-mirage to-wineBerry rounded-lg sm:h-[30vh] md:w-2/5 md:h-[50vh] xl:w-1/5 xl:h-[50vh]">
              <p className="font-bold text-2xl lg py-4">Enjoy on your TV</p>
              <p>
                Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV,
                Blu-ray players and more.
              </p>
              <img
                className="w-16 h-16 absolute bottom-1 right-1"
                src={telivisionIcon}
                alt="telivision icon"
              />
            </div>
            <div className="relative w-full h-[40vh] m-4 px-4 bg-gradient-to-br from-mirage to-wineBerry rounded-lg sm:h-[30vh] md:w-2/5 md:h-[50vh] xl:w-1/5 xl:h-[50vh]">
              <p className="font-bold text-2xl py-4">
                Download your shows to watch offline
              </p>
              <p>
                Save your favourites easily and always have something to watch.
              </p>
              <img
                className="absolute bottom-1 right-1"
                src={downloadIcon}
                alt="download icon"
              />
            </div>
            <div className="relative w-full h-[40vh] m-4 px-4 bg-gradient-to-br from-mirage to-wineBerry rounded-lg sm:h-[30vh] md:w-2/5 md:h-[50vh] xl:w-1/5 xl:h-[50vh]">
              <p className="font-bold text-2xl py-4">Watch everywhere</p>
              <p>
                Stream unlimited movies and TV shows on your phone, tablet,
                laptop and TV.
              </p>
              <img
                className="absolute bottom-1 right-1"
                src={telescopeIcon}
                alt="telescope icon"
              />
            </div>
            <div className="relative w-full h-[40vh] m-4 px-4 bg-gradient-to-br from-mirage to-wineBerry rounded-lg sm:h-[30vh] md:w-2/5 md:h-[50vh] xl:w-1/5 xl:h-[50vh]">
              <p className="font-bold text-2xl py-4">
                Create profiles for kids
              </p>
              <p>
                Send kids on adventures with their favourite characters in a
                space made just for them — free with your membership.
              </p>
              <img
                className="absolute bottom-1 right-1"
                src={profilesIcon}
                alt="profiles icon"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="bg-black text-white">
        <div className="mx-auto py-10 w-4/5 ">
          <p className="font-bold text-2xl my-4">
            Frequently Asked Questions
          </p>
          <FAQ />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
