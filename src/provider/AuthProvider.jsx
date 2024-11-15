import React, { createContext, useContext, useEffect, useState } from 'react'
import app from '../firebase/firebase.config';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, GoogleAuthProvider, signInWithPopup, signInWithEmailAndPassword , signOut} from 'firebase/auth';
import { toast } from 'react-toastify';


// ______________________create context

const AuthContext = createContext();

export const useFirebaseAuth = () => {
  return useContext(AuthContext);
}

const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();


// ______________________SignIn and SignUp functions

//1. create user with email and password

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


// 2. create user with google

const createUserWithGoogle = async () => {
   try {
    const result = await signInWithPopup(auth, googleProvider);
    toast.success("User logged in with Google");
    return result.user;
   } catch (error) {
    console.log(error);
    toast.error(error.message);
   }
}


//3. sign in with email and password

const signInWithEmailPassword = async (email, password) => {
    try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        toast.success("User logged in successfully");
        return userCredential.user;
    } catch (error) {
        console.log(error);
        toast.error(error.message);
    }
}

//4. sign out

const signOutUser = async () => {
    try {
        await signOut(auth);
        toast.success("User logged out successfully");
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
        createUserWithEmailPassword,
        createUserWithGoogle,
        signInWithEmailPassword,
        signOutUser
    };



// ______________________return

  return (
    <AuthContext.Provider value={authInfo}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider