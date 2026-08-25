import { getAuth } from "firebase/auth";
// Import the functions you need from the SDKs you need
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDr3yvzZcIBQCyR9xtCWtcxOviPNBC8Lcc",
  authDomain: "netflixgpt-55246.firebaseapp.com",
  projectId: "netflixgpt-55246",
  storageBucket: "netflixgpt-55246.firebasestorage.app",
  messagingSenderId: "680520050003",
  appId: "1:680520050003:web:cee84f01fd2fc6f345ada6",
  measurementId: "G-824LMT63MY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();