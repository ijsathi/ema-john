import { useState } from "react";
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut } from "firebase/auth";
import { useEffect } from "react";
import initializeAuthentication from "../components/Firebase/firebase.init";

initializeAuthentication();

const useFirebase = () => {
    const [user, setUser] = useState({});

    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    const signInUsingGoogle = () => {
        signInWithPopup(auth, googleProvider)
            .then(result => {
                console.log(result.user);
            })
    }
    // ===============================================logOut
    const logOut = () => {
        signOut(auth)
            .then(() => {
                setUser({})
            })
            .catch((error) => {
                // An error happened.
            });
    }

    // observe user auth state changed or not 
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
            }
        });
    }, []);


    return {
        user,
        signInUsingGoogle,
        logOut
    }
}

export default useFirebase;