import { useState, useEffect } from "react";
import { useAuthContext } from "./useAuthContex";
import { Auth } from "../Database/Firebase-config";
import { signInWithEmailAndPassword } from "firebase/auth";

export const useLogin = () => {
  const [error, setError] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const { dispatch } = useAuthContext();

  const login = async (email, password) => {
    setError(null);
    setIsPending(true);

    //sign the user out
    try {
      const res = await signInWithEmailAndPassword(Auth, email, password);
      //dispatch login action
      dispatch({ type: "LOGIN", payload: res.user });
      //UPDATE STATE
      if (!isCancelled) {
        setIsPending(false);
        setError(null);
      }
    } catch (err) {
      if (!isCancelled) {
        console.log(err.message);
        setError(err.message);
        setIsPending(false);
      }
    }
  };
  useEffect(() => {
    return () => setIsCancelled(true);
  }, []);
  return { login, error, isPending };
};
