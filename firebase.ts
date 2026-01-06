
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDoIC3zpgHLx0AVl_PkkWWtv0ECF01KVKc",
  authDomain: "fleet-edition-3fd2a.firebaseapp.com",
  databaseURL: "https://fleet-edition-3fd2a-default-rtdb.firebaseio.com",
  projectId: "fleet-edition-3fd2a",
  storageBucket: "fleet-edition-3fd2a.firebasestorage.app",
  messagingSenderId: "1009606221480",
  appId: "1:1009606221480:web:d708ca852d2ce46bb4ec9d",
  measurementId: "G-BYJFWDGYNL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Export the necessary Firebase services
export const auth = getAuth(app);
export const db = getFirestore(app);
