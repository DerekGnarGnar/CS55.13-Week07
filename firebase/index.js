// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAkX0WFh6scovfzgicSdLCaEaRVI-m0W5w",
  authDomain: "cs5513-midterm.firebaseapp.com",
  projectId: "cs5513-midterm",
  storageBucket: "cs5513-midterm.appspot.com",
  messagingSenderId: "341856076702",
  appId: "1:341856076702:web:22c2e16961963886b30c8f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
export {auth, db};
