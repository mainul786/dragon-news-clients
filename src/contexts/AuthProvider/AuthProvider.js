import React, { createContext, useEffect, useState } from 'react';
import { getAuth, onAuthStateChanged, signInWithPopup, signOut} from 'firebase/auth';
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

    const logOut =  () =>{
        return signOut()
    }

const authInfo = {user, googleLogin, logOut}
    return (
       <AuthContext.Provider value={authInfo}>
        {children}
       </AuthContext.Provider>
    );
};


export default AuthProvider;
