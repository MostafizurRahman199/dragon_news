import React, { 
    createContext, 
    useContext, 
    useEffect, 
    useState } from 'react'
import app from '../firebase/firebase.config';
import { 
    createUserWithEmailAndPassword, 
    getAuth, 
    onAuthStateChanged, 
    GoogleAuthProvider, 
    signInWithPopup, 
    signInWithEmailAndPassword , 
    signOut,
    updateProfile} from 'firebase/auth';
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
        // console.log(error);
        toast.error(error.message);
    }
}




// 2. create user with google

const createUserWithGoogle = async () => {
   try {
    const result = await signInWithPopup(auth, googleProvider);
    toast.success("User logged in with Google");
    return result;
   } catch (error) {
    // console.log(error);
    if (error.code === "auth/invalid-credential" || 
        error.code === "auth/invalid-email" || 
        error.code === "auth/wrong-password") {
      toast.error("Invalid email or password");
    } else {
      toast.error(error.message);
    }
    throw error;
   }
}




//3. sign in with email and password

const signInWithEmailPassword = async (email, password) => {
    try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        toast.success("User logged in successfully");
        return userCredential.user;
    } catch (error) {
        // console.log(error);
        if (error.code === "auth/invalid-credential" || 
            error.code === "auth/invalid-email" || 
            error.code === "auth/wrong-password") {
          toast.error("Invalid email or password");
        } else {
          toast.error(error.message);
        }
        throw error;
    }
}



//4. sign out

const signOutUser = async () => {
    try {
        await signOut(auth);
        toast.success("User logged out successfully");
    } catch (error) {
        // console.log(error);
        toast.error(error.message);
    }
}


// 5. update user profile

const updateUserProfile = async (user, name, photoUrl) => {
    try {
        await updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: photoUrl
        });
        
        await auth.currentUser.reload();
        
        setUser(auth.currentUser);
        
        return auth.currentUser;
    } catch (error) {
        console.error("Error updating profile:", error);
        throw error;
    }
}







// ______________________AuthProvider

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    




// ______________________onAuthStateChanged

useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
        setUser(currentUser);
        setLoading(false);
    });

    return () => unsubscribe();
}, []);





// ______________________authInfo

    const authInfo ={
        user, 
        setUser,
        createUserWithEmailPassword,
        createUserWithGoogle,
        signInWithEmailPassword,
        signOutUser,
        loading,
        updateUserProfile
    };



// ______________________return

  return (
    <AuthContext.Provider value={authInfo}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider