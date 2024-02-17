// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDuy5fkGxquX52X4_Gwm0SFrSoCSIi0kE4",
    authDomain: "netflixgpt-39f51.firebaseapp.com",
    projectId: "netflixgpt-39f51",
    storageBucket: "netflixgpt-39f51.appspot.com",
    messagingSenderId: "1026477987538",
    appId: "1:1026477987538:web:58d20bc6835964d099bf0b",
    measurementId: "G-G0Q8XE3Q8C"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();