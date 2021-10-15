import initializeAuthentication from "../pages/Login/Firebase/firebase.init";
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";


initializeAuthentication();


const useFirebase = () => {
    const { user, setUser } = useState({})
    const [error, setError] = useState('')
    const auth = getAuth();

    const handleGoogle = () => {
        const googleProvider = new GoogleAuthProvider();

        signInWithPopup(auth, googleProvider)
            .then(result => {
                setUser(result.user)
            })
            .catch(error => {
                setError(error.message)
            })
    }
    const logOut = () => {
        signOut(auth)
            .then(() => { })
    }
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);

            }
        });
    }, [])
    return { user, handleGoogle, logOut, error }

}
export default useFirebase;