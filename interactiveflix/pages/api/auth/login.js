// components/Login.js
"use client";
import React, { useEffect } from "react";
import {
  auth,
  GoogleAuthProvider,
  signInWithPopup,
  onAuthStateChanged,
} from "../../../utils/firebase";

function Login() {
  const handleLogin = async () => {
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider); // Use signInWithPopup directly with auth
      const token = await result.user.getIdToken(); // Retrieve the ID token
      console.log("Firebase ID Token:", token);
    } catch (error) {
      console.error("Authentication error:", error);
    }
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log("Logged in user:", user);
        user.getIdToken().then((token) => {
          console.log("Firebase ID Token on auth state changed:", token);
        });
      } else {
        console.log("No user is logged in");
      }
    });

    return () => unsubscribe(); // Cleanup subscription on unmount
  }, []);

  return (
    <div>
      <button onClick={handleLogin}>Login with Google</button>
    </div>
  );
}

export default Login;
