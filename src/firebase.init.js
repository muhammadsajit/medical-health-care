// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDN_xsgDm8YJK93tjwfJIYs-UtSJex3Gys",
  authDomain: "medical-health-care-385a2.firebaseapp.com",
  projectId: "medical-health-care-385a2",
  storageBucket: "medical-health-care-385a2.appspot.com",
  messagingSenderId: "913211185513",
  appId: "1:913211185513:web:8fd82700beb8d823a9c5f8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth =getAuth (app);
export default auth;