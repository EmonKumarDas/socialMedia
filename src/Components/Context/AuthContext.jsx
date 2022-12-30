import React, { createContext, useEffect } from 'react';
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { useState } from 'react';
import app from '../Firebase/Firebase';
export const userContext = createContext();
const AuthContext = ({ children }) => {
    const [user, setUser] = useState("");
    const [loading, setLoading] = useState(true);
    const auth = getAuth(app);
    const provider = new GoogleAuthProvider();
    const createUser = (email, password) => createUserWithEmailAndPassword(auth, email, password);

    // google signIn
    const googleSignIn = () => {
        return signInWithPopup(auth, provider)
    };

    const signIn = (email, password) => signInWithEmailAndPassword(auth, email, password);

    const updateUserProfile = (userProfile) => updateProfile(auth.currentUser, userProfile)

    const LogOut = () => signOut(auth);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setLoading(false);
        })
        return unsubscribe;
    }, [])

    const AuthInfo = {
        createUser,
        user,
        loading,
        signIn,
        updateUserProfile,
        googleSignIn,
        LogOut
    };
    return (
        <userContext.Provider value={AuthInfo}>{children}</userContext.Provider>
    );
};

export default AuthContext;