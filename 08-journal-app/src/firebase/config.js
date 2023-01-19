// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore/lite'


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyD-3M1wwgSFPG-w-jFNoaJzzaywSuW6QyA",
    authDomain: "react-cursos-2023-c7dd7.firebaseapp.com",
    projectId: "react-cursos-2023-c7dd7",
    storageBucket: "react-cursos-2023-c7dd7.appspot.com",
    messagingSenderId: "827151523272",
    appId: "1:827151523272:web:a6aca74aee5978686774fd"
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);

export const FirebaseAuth = getAuth(FirebaseApp);

export const FirebaseDB = getFirestore(FirebaseApp);