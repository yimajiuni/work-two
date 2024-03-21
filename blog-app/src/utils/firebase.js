// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.FIREBASE,
  authDomain: "blog-app-a346f.firebaseapp.com",
  projectId: "blog-app-a346f",
  storageBucket: "blog-app-a346f.appspot.com",
  messagingSenderId: "132711942535",
  appId: "1:132711942535:web:d1cb385b1424573c91eb22"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);