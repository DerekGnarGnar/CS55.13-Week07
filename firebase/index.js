// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDabnX9_Xt_4dTk8qVV0L0AbmqW0FEb4B8",
  authDomain: "tony-hawk-character-app.firebaseapp.com",
  projectId: "tony-hawk-character-app",
  storageBucket: "tony-hawk-character-app.appspot.com",
  messagingSenderId: "992523240068",
  appId: "1:992523240068:web:a2235efc92cd221755f8d1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//Connect for Authentification
const db = getFirestore(app);
const auth = getAuth(app);
export {auth, db};

