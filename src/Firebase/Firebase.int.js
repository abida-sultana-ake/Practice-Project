// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC_ruqBftYnmWSn83dhGa8Vfgpd7gT2xKY",
  authDomain: "my-another-project-2e5ff.firebaseapp.com",
  projectId: "my-another-project-2e5ff",
  storageBucket: "my-another-project-2e5ff.appspot.com",
  messagingSenderId: "1060219539476",
  appId: "1:1060219539476:web:b66f9cba125ba5b34ed701"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);