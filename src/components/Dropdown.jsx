import { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import searchIcon from "../assets/search-svgrepo-com.svg";
import { removeUser } from "../store/slices/userSlice";
import { persistor } from "../store/store";

function Dropdown({ handleSearchClick, handleAccountClick }) {
  const [isOpen, setIsOpen] = useState(false);

  const divEl = useRef();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const user = useSelector((store) => store.user);

  useEffect(() => {
    const handler = (event) => {
      
      if (!divEl.current) return;

      !divEl.current.contains(event.target) && setIsOpen(false);
    };

    document.addEventListener("click", handler, true);

    return () => document.removeEventListener("click", handler);
  }, []);

  const options = [
    { label: "My Account", value: "myAccount" },
    { label: "Logout", value: "logout" },
  ];

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = async (option) => {
    setIsOpen(false);
    if (option === "logout") {
      await persistor.purge();
      dispatch(removeUser());
      navigate("/login");
    } else if (option === "myAccount") {
      handleAccountClick();
    }
  };

  const renderedOptions = options.map((option) => (
    <button
      className="hover:bg-neutral-700 rounded cursor-pointer text-left p-1"
      onClick={() => handleOptionClick(option.value)}
      key={option.value}
    >
      {option.label}
    </button>
  ));

  return (
    <div ref={divEl} className="flex w-1/5 justify-center items-center">
      <img
        onClick={handleSearchClick}
        className="w-6 h-6 m-2 cursor-pointer font-bold"
        src={searchIcon}
        alt="search icon"
      />
      <img
        src={user?.user?.photoURL}
        alt="user icon"
        className="w-8 h-8 mx-2 cursor-pointer"
        onClick={handleClick}
      />
      {isOpen && (
        <div className="absolute top-full bg-neutral-800 text-white p-2 shadow-lg rounded flex flex-col">
          {renderedOptions}
        </div>
      )}
    </div>
  );
}

export default Dropdown;
