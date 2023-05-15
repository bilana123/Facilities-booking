import { useState } from "react";
import { Auth, db } from "../Database/Firebase-config";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { doc, setDoc, addDoc, collection } from "firebase/firestore";

export const useSignup = (dispatch) => {
  const [error, setError] = useState(null);
  const [isPending, setIsPending] = useState(false);

  const Signup = async (email, password, username, department) => {
    setError(null);
    setIsPending(true);

    console.log(email);

    try {
      // signup user method
      const { user } = await createUserWithEmailAndPassword(
        Auth,
        email,
        password
      );

      // update user's display name
      await updateProfile(user, { displayName: username });

      await addDoc(collection(db, "users"), {
        displayName: username,
        email: email,
        department: department,
        createdAt: new Date(),
      });

      // create role document
      const roleDocRef = doc(db, "roles", user.uid);
      await setDoc(roleDocRef, { role: "subadmin" });

      // dispatch login action
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
