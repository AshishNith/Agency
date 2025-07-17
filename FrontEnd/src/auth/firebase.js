// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCSAZqBhcMeUkI_VkLGnwEzlwfk2_8Ap5Y",
  authDomain: "goran-aa8e0.firebaseapp.com",
  projectId: "goran-aa8e0",
  storageBucket: "goran-aa8e0.firebasestorage.app",
  messagingSenderId: "238783184397",
  appId: "1:238783184397:web:9ecbc06497b44f4a225f44",
  measurementId: "G-05X9WHK2VS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);