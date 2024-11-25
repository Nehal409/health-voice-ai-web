// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDKOdE9BuMomBMVufB95ZxfQKQA2amCt9Y",
  authDomain: "ehsaan-healthai.firebaseapp.com",
  projectId: "ehsaan-healthai",
  storageBucket: "ehsaan-healthai.firebasestorage.app",
  messagingSenderId: "629773091315",
  appId: "1:629773091315:web:3f017a44ac33a50e535286",
  measurementId: "G-WCB82TT7EP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);