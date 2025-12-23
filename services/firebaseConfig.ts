// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBkML-w-2_nLDK9LnOVw0QUPX6ZiuIN48s",
  authDomain: "my-latitude-project.firebaseapp.com",
  databaseURL: "https://my-latitude-project-default-rtdb.firebaseio.com",
  projectId: "my-latitude-project",
  storageBucket: "my-latitude-project.firebasestorage.app",
  messagingSenderId: "981704939988",
  appId: "1:981704939988:web:60283896fb6af04be0de41",
  measurementId: "G-B4VN2LW63W"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);