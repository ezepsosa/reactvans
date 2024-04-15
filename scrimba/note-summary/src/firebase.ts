// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { collection, getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAhwrqAfL9DP4EDCFZK_ZwWuGLSK8biBZ4",
  authDomain: "react-notes-54c8e.firebaseapp.com",
  projectId: "react-notes-54c8e",
  storageBucket: "react-notes-54c8e.appspot.com",
  messagingSenderId: "320727456656",
  appId: "1:320727456656:web:18fdb9300b10bb6e36b115",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const notesCollection = collection(db, "notes");
