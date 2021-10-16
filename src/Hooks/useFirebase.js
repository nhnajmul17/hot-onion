import initializeAuthentication from "../pages/Login/Firebase/firebase.init";
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged, GithubAuthProvider, signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";
import { useEffect, useState } from "react";


initializeAuthentication();


const useFirebase = () => {
    const [user, setUser] = useState({})
    const [error, setError] = useState('')
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('')

    const auth = getAuth();

    const handleEmail = e => {
        setEmail(e.target.value);
    }
    const handlePassword = e => {
        setPassword(e.target.value);
    }
    const handleSingIn = e => {
        e.preventDefault();

        signInWithEmailAndPassword(auth, email, password)
            .then(result => {
                console.log(result.user);
                setError('')
            })
            .catch(error => {
                setError(error.message)
            })
    }
    const handleSignUp = e => {
        e.preventDefault();
        if (password.length < 6) {
            setError('password must be 6 characters');
            return;
        }
        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                console.log(result.user);
                setError('')
            })
            .catch(error => {
                setError(error.message)
            })
    }


    const handleGithub = () => {
        const githubProvider = new GithubAuthProvider();
        signInWithPopup(auth, githubProvider)
            .then(result => {
                setUser(result.user)
            })
            .catch(error => {
                setError(error.message)
            })

    }

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
        onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user);

            }
            else {
                setUser({})
            }

        });
    }, [])
    return { user, handleGoogle, handleGithub, handleSingIn, handleSignUp, handleEmail, handlePassword, logOut, error }

}
export default useFirebase;