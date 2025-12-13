import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

/**
 * Replace the values below with your actual Firebase project credentials
 * from the Firebase Console (Settings > Project Settings > General > Your Apps).
 */
const firebaseConfig = {
  apiKey: "AIzaSyBkML-w-2_nLDK9LnOVw0QUPX6ZiuIN48s",
  authDomain: "my-latitude-project.firebaseapp.com",
  projectId: "my-latitude-project",
  storageBucket: "my-latitude-project.firebasestorage.app",
  messagingSenderId: "981704939988",
  appId: "1:981704939988:web:60283896fb6af04be0de41",
  measurementId: "G-B4VN2LW63W"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export default app;
