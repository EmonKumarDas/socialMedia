// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDSbNWZOrp-haFDIQS-L7iGCYh04Lb4Zq0",
  authDomain: "goldenglimmers.firebaseapp.com",
  projectId: "goldenglimmers",
  storageBucket: "goldenglimmers.appspot.com",
  messagingSenderId: "342326240653",
  appId: "1:342326240653:web:ba369d91b8fbdb205f89c4",
  measurementId: "G-ND6C5653KB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;