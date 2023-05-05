// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
//import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAkI3rlSd3XKW70cRiHdr7m1d_mMmtjCo4",
  authDomain: "jnec-booking.firebaseapp.com",
  projectId: "jnec-booking",
  storageBucket: "jnec-booking.appspot.com",
  messagingSenderId: "387091398288",
  appId: "1:387091398288:web:237b7c0886367849792215",
  measurementId: "G-56EPL5QT2E",
};

const app = initializeApp(firebaseConfig);
const Auth = getAuth(app);
const analytics = getAnalytics(app);
const db = getFirestore(app);
const storage = getStorage(app);

export { Auth, db, storage };