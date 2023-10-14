// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAYYaSZcKyVzJFXQV9eTWNle6YlZDwVdpE",
  authDomain: "netflix-gpt-38953.firebaseapp.com",
  projectId: "netflix-gpt-38953",
  storageBucket: "netflix-gpt-38953.appspot.com",
  messagingSenderId: "271308897159",
  appId: "1:271308897159:web:2cd434b721c683b949b122",
  measurementId: "G-6YSXCG35XG",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
