import { useState, useEffect } from "react";
import { Auth } from "../Database/Firebase-config";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useAuthContext } from "./useAuthContex";

export const useSignup = () => {
  const [isCancelled, setIsCancelled] = useState(false)
  const [error, setError] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const Signup = async (email, password, username) => {
    const { dispatch } = useAuthContext;
    setError(null);
    setIsPending(true);

    try {
      //signup user methodg
      const res = await createUserWithEmailAndPassword(Auth, email, password);

      if (!res) {
        throw new Error("could not complete signup");
      }
      //add username to user
      await res.user.updateProfile({ username });

      //DISPATCH LOGIN ACTION
      dispatch({ type: "LOGIN", payload: res.user });
      //update state
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

  return { error, isPending, Signup };
};
