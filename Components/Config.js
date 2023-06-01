// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAaFJRtikJ_rOtn3Q0jWECeWkkVNYWGQgQ",
  authDomain: "catering-37f09.firebaseapp.com",
  projectId: "catering-37f09",
  storageBucket: "catering-37f09.appspot.com",
  messagingSenderId: "583278121680",
  appId: "1:583278121680:web:fd06b8717b4e9cc43644d5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
export const auth = getAuth(app)