import { useState } from "react";
import { Auth, db } from "../Database/Firebase-config";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { doc, addDoc, collection, setDoc } from "firebase/firestore";

export const useSignup = (dispatch) => {
  const [error, setError] = useState(null);
  const [isPending, setIsPending] = useState(false);

  const Signup = async (email, password, name, category) => {
    setError(null);
    setIsPending(true);

    try {
      // signup user method
      const { user } = await createUserWithEmailAndPassword(
        Auth,
        email,
        password
      );

      // update user's display name
      await updateProfile(user, { Name: name });

      // create user document

      const docRef = doc(db, "users", user.uid);
      await setDoc(docRef, {
        Name: name,
        email: email,
        category: category,
        createdAt: new Date(),
      });

      console.log("Document written with ID: ", docRef.id);

      console.log();
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
