// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "chillmoons-hub.firebaseapp.com",
  projectId: "chillmoons-hub",
  storageBucket: "chillmoons-hub.firebasestorage.app",
  messagingSenderId: "449051039458",
  appId: "1:449051039458:web:41296ecb1088e59d8830bb",
  measurementId: "G-179Z36RVEM",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
