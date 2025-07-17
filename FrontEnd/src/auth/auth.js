import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    sendPasswordResetEmail,
    GoogleAuthProvider,
    signInWithPopup,
  } from "firebase/auth";
  
  import { auth } from "./firebase";
  
  // Sign up user with email and password
  export const doCreateUserWithEmailAndPass = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  
  // Log in user with email and password
  export const doSignInWithEmailAndPass = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };
  
  // Sign out current user
  export const doSignOut = () => {
    return signOut(auth);
  };
  
  // Send password reset email
  export const doPasswordReset = (email) => {
    return sendPasswordResetEmail(auth, email);
  };
  
  // Google Sign-In
  const googleProvider = new GoogleAuthProvider();
  export const doSignInWithGoogle = () => {
    return signInWithPopup(auth, googleProvider);
  };
  