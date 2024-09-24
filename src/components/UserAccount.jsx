import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { useDispatch, useSelector } from "react-redux";
import { auth } from "../utils/firebaseConfig";
import {
  closeAccountSettings,
  saveAccountDetails,
  openUpdateAccountDetails,
  closeUpdateAccountDetails,
} from "../store/slices/accountSlice";
import { updateUser } from "../store/slices/userSlice";
import { updateProfile } from "firebase/auth";
import closeIcon from "../assets/close-svgrepo-com.svg";
import editIcon from "../assets/edit-2-svgrepo-com.svg";

const UserAccount = () => {
  const userDetails = useSelector((store) => store.user);
  const updateAccountSelected = useSelector(
    (store) => store.account.isUpdateAccountSelected
  );

  const [name, setName] = useState(userDetails.user.displayName);
  const [photoURL, setPhotoURL] = useState(userDetails.user.photoURL);
  const [editPhotoInput, setEditPhotoInput] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    document.body.classList.add("overflow-hidden");
    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, []);

  const handleClose = () => {
    dispatch(closeAccountSettings());
    dispatch(closeUpdateAccountDetails());
  };

  const handleUpdateDetails = () => {
    dispatch(openUpdateAccountDetails());
  };

  const handleSaveDetails = () => {
    updateProfile(auth.currentUser, {
      email: auth.currentUser.email,
      displayName: name,
      photoURL: photoURL,
    })
      .then(() => {
        const { displayName, photoURL } = auth.currentUser;
        dispatch(
          updateUser({
            displayName: displayName,
            photoURL: photoURL,
          })
        );
      })
      .catch((error) => {
        console.log(error);
      });
    dispatch(saveAccountDetails());
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handlePhotoURLChange = (e) => {
    setPhotoURL(e.target.value);
  };

  const handleEditInputElement = () => {
    setEditPhotoInput(true);
  };

  const handleSavePhotoURL = () => {
    setEditPhotoInput(false);
  };

  return ReactDOM.createPortal(
    <div>
      <div
        onClick={handleClose}
        className="fixed inset-0 bg-gray-300 opacity-80"
      ></div>
      <div className="w-1/2 h-[50vh] mx-auto text-white fixed inset-40 p-10 bg-neutral-800">
        <div className="flex flex-col justify-between h-full">
          <img
            onClick={handleClose}
            className="w-4 h-4 absolute top-0 right-0 m-4 cursor-pointer"
            src={closeIcon}
            alt="close icon"
          />
          <div className="flex flex-col items-center justify-center">
            {/* Display Photo */}
            {!editPhotoInput ? (
              <div className="relative w-14 h-14">
                <img
                  className="absolute w-14 h-14"
                  src={userDetails.user.photoURL || photoURL}
                  alt="user icon"
                />
                {updateAccountSelected && (
                  <div
                    onClick={handleEditInputElement}
                    className="absolute w-14 h-14 bg-white opacity-50 flex justify-center items-center cursor-pointer"
                  >
                    <img
                      className="absolute w-8 h-8"
                      src={editIcon}
                      alt="edit icon"
                    />
                  </div>
                )}
              </div>
            ) : (
              ""
            )}
            {/* Editable Fields */}
            <div className="m-2 p-2">
              {/* Photo URL Input */}
              {editPhotoInput && (
                <div className="flex p-2">
                  <span className="font-bold p-2 mr-2">Image:</span>
                  <input
                    className="border bg-transparent border-white p-2 rounded"
                    type="text"
                    value={photoURL}
                    onChange={handlePhotoURLChange}
                  />
                  <button
                    onClick={handleSavePhotoURL}
                    className="bg-blue-700 p-2 ml-2"
                  >
                    Update
                  </button>
                </div>
              )}

              {/* Name Input */}
              <div className="flex p-2">
                <span className="font-bold p-2 mr-2">Name:</span>
                {updateAccountSelected ? (
                  <input
                    className="border bg-transparent border-white p-2 rounded"
                    type="text"
                    value={name}
                    onChange={handleNameChange}
                  />
                ) : (
                  <p className="border border-white p-2 rounded">
                    {userDetails.user.displayName}
                  </p>
                )}
              </div>

              {/* Email Input */}
              <div className="flex p-2">
                <span className="font-bold p-2  mr-2">Email:</span>
                {updateAccountSelected ? (
                  <input disabled
                    className="border bg-neutral-700 border-white p-2 rounded"
                    type="email"
                    value={auth.currentUser.email}
                  />
                ) : (
                  <p className="border border-white p-2 rounded">
                    {auth.currentUser.email}
                  </p>
                )}
              </div>
            </div>
          </div>
          <div className="flex justify-end">
            {updateAccountSelected ? (
              <button onClick={handleSaveDetails} className="bg-blue-700 p-2">
                Save
              </button>
            ) : (
              <button onClick={handleUpdateDetails} className="bg-blue-700 p-2">
                Update Account Details
              </button>
            )}
          </div>
        </div>
      </div>
    </div>,
    document.querySelector(".user-account-modal")
  );
};

export default UserAccount;
