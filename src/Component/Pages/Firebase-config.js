// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
//import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore/lite";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAkI3rlSd3XKW70cRiHdr7m1d_mMmtjCo4",
  authDomain: "jnec-booking.firebaseapp.com",
  projectId: "jnec-booking",
  storageBucket: "jnec-booking.appspot.com",
  messagingSenderId: "387091398288",
  appId: "1:387091398288:web:237b7c0886367849792215",
  measurementId: "G-56EPL5QT2E",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const Auth = getAuth(app);
const analytics = getAnalytics(app);
export const db = getFirestore(app);
export const firebase = firebase.firestore();

export { Auth };
