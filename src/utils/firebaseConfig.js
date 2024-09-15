// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
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

// Exporting the initialized app and authentication
const auth = getAuth(app);
export { app, analytics, auth };
