// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDkJAE9HrgLD_SWRyWdCVxrZB82tIwOV-8",
    authDomain: "ndecommercel.firebaseapp.com",
    projectId: "ndecommercel",
    storageBucket: "ndecommercel.appspot.com",
    messagingSenderId: "820101151592",
    appId: "1:820101151592:web:be0bbb87959853b3a334dd",
    measurementId: "G-1PMPXCYJC1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);