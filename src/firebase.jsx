// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";



// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDtrIgPDZteo3NwQHK1gXStMegTSkb8eVo",
  authDomain: "instantchat-d3424.firebaseapp.com",
  projectId: "instantchat-d3424",
  storageBucket: "instantchat-d3424.appspot.com",
  messagingSenderId: "451085663048",
  appId: "1:451085663048:web:f120722a08296f9d8dd17d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
