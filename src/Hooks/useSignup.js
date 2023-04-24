import { useState } from "react";
import { Auth } from "../Database/Firebase-config";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";

export const useSignup = (dispatch) => {
  const [error, setError] = useState(null);
  const [isPending, setIsPending] = useState(false);

  const Signup = async (email, password, username, department) => {
    setError(null);
    setIsPending(true);

    try {
      console.log(department);
      //signup user methodg
      const { user } = await createUserWithEmailAndPassword(
        Auth,
        email,
        password
      );

      await updateProfile(user, {
        displayName: department,
      });

      console.log(user);
      //DISPATCH LOGIN ACTION
      dispatch({ type: "LOGIN", payload: user });

      setIsPending(false);
      setError(null);
    } catch (err) {
      console.log(err.message);
      setError(err.message);
      setIsPending(false);
    }
  };

  return { error, isPending, Signup };
};
