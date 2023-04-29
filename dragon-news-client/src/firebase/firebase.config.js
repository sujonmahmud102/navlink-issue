// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCTkyWZR812J27pYpqlGgh82ThA5d-ctIE",
  authDomain: "dragon-news-8bd66.firebaseapp.com",
  projectId: "dragon-news-8bd66",
  storageBucket: "dragon-news-8bd66.appspot.com",
  messagingSenderId: "987996306238",
  appId: "1:987996306238:web:84a26c0c8f511704200a6f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app