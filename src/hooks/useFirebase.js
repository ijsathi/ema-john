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
        return signInWithPopup(auth, googleProvider)
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
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
            }
        });
        return unsubscribe;
    }, []);


    return {
        user,
        signInUsingGoogle,
        logOut
    }
}

export default useFirebase;