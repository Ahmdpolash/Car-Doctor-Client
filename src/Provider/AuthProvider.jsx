import React, { createContext, useEffect, useState } from "react";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import auth from "../firebase/Firebase_config";
import axios from "axios";

export const authContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const provider = new GoogleAuthProvider();

  //!create account
  const handleSignUp = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  //!signIn
  const handleSignIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };

  const handleUpdate = (name, photo) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photo,
    });
  };

  //!google

  const googleLogin = () => {
    setLoading(true);
    return signInWithPopup(auth, provider);
  };

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      const userEmail = currentUser?.email || user?.email;

      const loggedUser = { email: userEmail };

      setUser(currentUser);
      console.log("user", currentUser);
      setLoading(false);

       if (currentUser) {
        axios
          .post(
            "https://car-doctor-server-khaki-nu.vercel.app/jwt",
            loggedUser,
            { withCredentials: true }
          )

          .then((res) => {
            console.log(res.data);
          });
      } else {
        axios
          .post(
            "https://car-doctor-server-khaki-nu.vercel.app/logout",
            loggedUser,
            { withCredentials: true }
          )
          .then((res) => {
            console.log(res.data); 
          });
      }
    });
    return () => {
      unSubscribe();
    };
  }, []);

  const authInfo = {
    user,
    loading,
    handleSignUp,
    handleSignIn,
    googleLogin,
    logOut,
    handleUpdate,
  };

  return (
    <authContext.Provider value={authInfo}>{children}</authContext.Provider>
  );
};

export default AuthProvider;
