// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAFqX8J0kDwzCKiMI1BXkgH2PUiY0VYv5M",
  authDomain: "tech-education-school.firebaseapp.com",
  projectId: "tech-education-school",
  storageBucket: "tech-education-school.appspot.com",
  messagingSenderId: "1078672267468",
  appId: "1:1078672267468:web:2cd9395b28c77e88d08a69"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app