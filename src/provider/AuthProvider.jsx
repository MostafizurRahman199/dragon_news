import React, { createContext, useContext, useEffect, useState } from 'react'
import app from '../firebase/firebase.config';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged } from 'firebase/auth';
import { toast } from 'react-toastify';

// ______________________create context

const AuthContext = createContext();

export const useFirebaseAuth = () => {
  return useContext(AuthContext);
}

const auth = getAuth(app);

// ______________________createUserWithEmailPassword

const createUserWithEmailPassword = async (email, password) => {
    try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        toast.success("User created successfully");
        return userCredential.user;
        
    } catch (error) {
        console.log(error);
        toast.error(error.message);
    }
}


// ______________________onAuthStateChanged



// ______________________AuthProvider

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);

    
useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
        if(user){
            setUser(user);
            console.log("user logged in");
        }else{
            setUser(null);
            console.log("user logged out");
        }
    });
    return () => unsubscribe();
}, []);


    const authInfo ={
        user, 
        setUser,
        createUserWithEmailPassword
    };



// ______________________return

  return (
    <AuthContext.Provider value={authInfo}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider