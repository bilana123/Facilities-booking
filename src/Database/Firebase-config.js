// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from 'firebase/storage'
import {
  onAuthStateChange,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  getAuth
} from "firebase/auth";

//import { getAuth } from "firebase/auth";
//import { getFirestore} from "firebase/firestore/lite";
//import { getStorage } from "firebase/storage";
 

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAkI3rlSd3XKW70cRiHdr7m1d_mMmtjCo4",
  authDomain: "jnec-booking.firebaseapp.com",
  projectId: "jnec-booking",
  storageBucket: "jnec-booking.appspot.com",
  messagingSenderId: "387091398288",
  appId: "1:387091398288:web:237b7c0886367849792215",
  measurementId: "G-56EPL5QT2E"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app)

export const db = getFirestore(firebaseApp);
export const auth = getAuth(firebaseApp);

export {
  auth,db,
  onAuthStateChange,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
};
