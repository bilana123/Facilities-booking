import {AuthErrorCodes} from "firebase/auth";
import {setDoc, doc} from "firebase/firestore";
import React, {useContex, useEffect, useState} from "react";

import {
    auth, 
    db,
    onAuthStateChange,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
} from "./firebase-config";

const AuthContext = React.createContext();
export const useAuth = () => {
    return useContex(AuthContext);
};
const UserAuthContex = ({children}) => {
    const [error, seterror] = useState("");
    const [currentUser, setcurrentuser] = useState();
    useEffect(() => {
        onAuthStateChange(auth, (user) => {
            if (user) {
                setcurrentuser(user);
                console.log(user.uid);

            }else console.log("no user avaliable");
        });

    }, []);
    const register = (email, password, username) => {
        seterror("");
        createUserWithEmailAndPassword(auth, email, password)
        .then(async (result) =>{
            console.log(result.user);
            const ref = doc(db, "usersinformation", result.user.uid);
            const docRef = await setDoc(ref, {username})
            .then ((re) => {
                alert("yes the data has been enter");
            })
            .catch((e) => {
                console.log(e.message);
            });
        })
        .catch((error) => {
            if (error.code == "auth/email-already-in-use"){

                seterror("email is already in use try another email");

            }else if (error.code === AuthErrorCodes.WEAK_PASSWORD) {
                seterror("pasword must be 6 character");
            }else {
                seterror(error.message);
            }
        });
    };
    const value = {
        currentUser,
        signUp,
        error,
    };
    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
export default UserAuthContex;