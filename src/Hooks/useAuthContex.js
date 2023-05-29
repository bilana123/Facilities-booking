import { AuthContext } from "../Component/Context/AuthContex";
import { useContext } from "react";

export const useAuthContext = () => {
  const context = useContext(AuthContext);

  if (!context) {
    throw Error("useAuthContext must be inside an AuthContextprovider");
  }
  return context;
};
