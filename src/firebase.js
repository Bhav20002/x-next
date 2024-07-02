// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
    authDomain: "x-next-v2-38a8f.firebaseapp.com",
    projectId: "x-next-v2-38a8f",
    storageBucket: "x-next-v2-38a8f.appspot.com",
    messagingSenderId: "1039033210191",
    appId: "1:1039033210191:web:22f5aa643d7dc253f9a13a"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);