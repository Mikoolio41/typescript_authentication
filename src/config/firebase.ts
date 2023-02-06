// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBg_-i1XI8NZvGjVAxq4OYKyjbnDeKDGqw",
  authDomain: "tsauthentication.firebaseapp.com",
  projectId: "tsauthentication",
  storageBucket: "tsauthentication.appspot.com",
  messagingSenderId: "284122780066",
  appId: "1:284122780066:web:c20fbe0b1f76d475de62fb",
  measurementId: "G-37196KT9PC",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
