// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth} from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAxa3YUC0cGeIUvgIGrv8lwlPxqYq5A3mU",
  authDomain: "netflixgpt-b7117.firebaseapp.com",
  projectId: "netflixgpt-b7117",
  storageBucket: "netflixgpt-b7117.firebasestorage.app",
  messagingSenderId: "974309449249",
  appId: "1:974309449249:web:f623baf50d04db6adacd60",
  measurementId: "G-S6N7MY0PS8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
