// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics  } from "firebase/analytics";
import { getAuth,GoogleAuthProvider, GithubAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB-pUnuYJXj1r_RN3sXLRe8vGdi6RP8zGE",
  authDomain: "personal-portfolio-685ff.firebaseapp.com",
  projectId: "personal-portfolio-685ff",
  storageBucket: "personal-portfolio-685ff.firebasestorage.app",
  messagingSenderId: "924782221502",
  appId: "1:924782221502:web:b92ea2ca2fe3facad626ef",
  measurementId: "G-HSCZZBBVBM"
};

let firebaseApp;
let auth;
let googleProvider;
let githubProvider;

if (typeof window !== "undefined") {
  firebaseApp = initializeApp(firebaseConfig);
  auth = getAuth(firebaseApp);
  googleProvider = new GoogleAuthProvider();
  githubProvider = new GithubAuthProvider();
}

export { auth, googleProvider, githubProvider };