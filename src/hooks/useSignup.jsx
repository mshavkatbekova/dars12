import { useState } from "react";
import { auth } from "../firebase/FirebaseConfig";
import { useGlobalContext } from "./useGlobalContext";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";

function useSignup() {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);
  const { dispatch } = useGlobalContext();

  const signup = (displayName, email, password) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then(async (user) => {
        await updateProfile(auth.currentUser, {
          displayName,
        });
        console.log(user);
        dispatch({ type: "LOGIN", payload: user });
        setUser(user);
      })
      .catch((error) => {
        setError(error);
      });
  };
  return { user, error, signup };
}

export default useSignup;
