import { useState } from "react";
import { useGlobalContext } from "./useGlobalContext";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/FirebaseConfig";

function useLogin() {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);
  const { dispatch } = useGlobalContext();

  const login = (email, password) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        dispatch({ type: "LOGIN", payload: user });
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setError(errorMessage);
        console.log("errorCode: ", errorCode, "errorMessage: ", errorMessage);
      });
  };
  return { login, error, user };
}

export default useLogin;
