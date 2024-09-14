// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBGbVJgewI9M7mPnD-PV8ZkxAvD5ZrZoyg",
  authDomain: "netflix-clone-55659.firebaseapp.com",
  projectId: "netflix-clone-55659",
  storageBucket: "netflix-clone-55659.appspot.com",
  messagingSenderId: "896573550685",
  appId: "1:896573550685:web:cc50e0431c627d0c349db4",
  measurementId: "G-FS0PPZYQEV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);