// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

import { getAuth } from "firebase/auth";
import {GoogleAuthProvider} from "firebase/auth";

const firebaseConfig = {
  apiKey: " AIzaSyB1dsXckD18v2c78msxxXSgpBi4yNRycUw",
  authDomain: "apple-clone-bd169.firebaseapp.com",
  projectId: "apple-clone-bd169",
  storageBucket: "apple-clone-bd169.firebaseapp.com",
  messagingSenderId: "927988920962",
  appId: "1:927988920962:web:2602ed955ba516ec747a9b",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const googleAuthProvider = new GoogleAuthProvider();
