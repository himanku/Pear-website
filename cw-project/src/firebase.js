// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

import {getAuth} from 'firebase'

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: "apple-clone-bd169",
  storageBucket: process.env.REACT_APP_STORAGE,
  messagingSenderId: "927988920962",
  appId: "1:927988920962:web:2602ed955ba516ec747a9b"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const auth = getAuth();