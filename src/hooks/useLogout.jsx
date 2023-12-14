import { useState } from "react";
import { signOut } from "firebase/auth";
import { auth } from "../firebase/FirebaseConfig";
import { useGlobalContext } from "./useGlobalContext";

function useLogout() {
  const [error, setError] = useState();
  const { dispatch } = useGlobalContext();
  const logout = () => {
    signOut(auth)
      .then(() => {
        dispatch({ type: "LOGOUT" });
      })
      .catch(() => {
        setError("Something went wrong :(");
      });
  };
  return { logout, error };
}

export default useLogout;
