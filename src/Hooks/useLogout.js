import { useEffect, useState } from "react";
import { Auth } from "../Database/Firebase-config";
import { useAuthContext } from "./useAuthContex";
import { signOut } from "firebase/auth";

const useLogout = () => {
  const [isCancelled, setIsCancelled] = useState(false);
  const [error, setError] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const { dispatch } = useAuthContext();

  const Logout = async () => {
    setError(null);
    setIsPending(true);

    //SIGN THE USER OUT

    try {
      await signOut(Auth);
      //dispatch logout action
      dispatch({ type: "LOGOUT" });

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
  return { Logout, error, isPending };
};

export default useLogout;
