import React, { useEffect, useState } from 'react';
import app from '../firebase/firebase.config';
import {createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut} from 'firebase/auth'
import { createContext } from 'react';

export const AuthContext = createContext();

const auth = getAuth(app)

const UserContext = ({children}) => {
    const [user, setUser] = useState();
    const [error, setError] = useState();
    const [loading, setLoading] = useState(true);

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const googleProvider = new GoogleAuthProvider();
    const registerWithGoogle = () => {
        return signInWithPopup(auth, googleProvider)
    }
    const githubProvider = new GoogleAuthProvider();
    const registerWithgithub = () => {
        return signInWithPopup(auth, githubProvider)
    }

    const signIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logOut = () => {
        return signOut(auth);
    }

    useEffect( () => {
       const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            setLoading(false)
            console.log('state changed', currentUser)
        })
        return () => {
            unsubscribe();
        }
    }, [])

    const authInfo = {createUser, error, setError, registerWithGoogle, signIn, setUser, user, logOut, loading, registerWithgithub}

   return (
        <div>
            <AuthContext.Provider value={authInfo}>
            {children}
            </AuthContext.Provider>
        </div>
    );
};

export default UserContext;