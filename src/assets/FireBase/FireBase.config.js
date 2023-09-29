// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAVFCuKpZ7pVJwIHRp_pbHRLFZ96_X1AUQ",
  authDomain: "user-email-password-auth5040.firebaseapp.com",
  projectId: "user-email-password-auth5040",
  storageBucket: "user-email-password-auth5040.appspot.com",
  messagingSenderId: "99505691224",
  appId: "1:99505691224:web:3ccb521aadb912873c482d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;