// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore/lite'
import { getEnvironments } from "../helpers";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

const {
    VITE_APIKEY,
    VITE_AUTHDOMAIN,
    VITE_PROJECTID,
    VITE_STORAGEBUCKET,
    VITE_MESSAGINGSENDERID,
    VITE_APPID
} = getEnvironments();

// Your web app's Firebase configuration
// Dev / Prod
// const firebaseConfig = {
//     apiKey: "AIzaSyD-3M1wwgSFPG-w-jFNoaJzzaywSuW6QyA",
//     authDomain: "react-cursos-2023-c7dd7.firebaseapp.com",
//     projectId: "react-cursos-2023-c7dd7",
//     storageBucket: "react-cursos-2023-c7dd7.appspot.com",
//     messagingSenderId: "827151523272",
//     appId: "1:827151523272:web:a6aca74aee5978686774fd"
// };

// TESTING
// const firebaseConfig = {
//     apiKey: "AIzaSyCbvyuItuvaRvKoQAJ0TKh2fmk-yRb1t98",
//     authDomain: "react-test-9ebd4.firebaseapp.com",
//     projectId: "react-test-9ebd4",
//     storageBucket: "react-test-9ebd4.appspot.com",
//     messagingSenderId: "948834989289",
//     appId: "1:948834989289:web:3b8896547027f03fe52c78"
// };

const firebaseConfig = {
    apiKey: VITE_APIKEY,
    authDomain: VITE_AUTHDOMAIN,
    projectId: VITE_PROJECTID,
    storageBucket: VITE_STORAGEBUCKET,
    messagingSenderId: VITE_MESSAGINGSENDERID,
    appId: VITE_APPID
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);

export const FirebaseAuth = getAuth(FirebaseApp);

export const FirebaseDB = getFirestore(FirebaseApp);