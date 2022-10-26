import React from 'react';
import app from '../firebase/firebase.config';
import {createUserWithEmailAndPassword, getAuth} from 'firebase/auth'
import { createContext } from 'react';

export const AuthContext = createContext();

const auth = getAuth(app)

const UserContext = ({children}) => {

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }


    const authInfo = {createUser}

   return (
        <div>
            <AuthContext.Provider value={authInfo}>
            {children}
            </AuthContext.Provider>
        </div>
    );
};

export default UserContext;