import React, { createContext, useEffect, useState } from 'react';
import { getAuth, onAuthStateChanged, signInWithPopup} from 'firebase/auth';
import app from './../../firebase/firebase.config';


const auth = getAuth(app)
export const AuthContext = createContext();


const AuthProvider = ({children}) => {
const [user, setUser] = useState(null);
    const googleLogin = (googleProvider) =>{
        return signInWithPopup(auth, googleProvider);
    }

    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth, (currentUser) =>{
            setUser(currentUser);
        })
        return ()=> unSubscribe();
    }, [])

const authInfo = {user, googleLogin}
    return (
       <AuthContext.Provider value={authInfo}>
        {children}
       </AuthContext.Provider>
    );
};


export default AuthProvider;
