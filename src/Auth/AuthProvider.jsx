import { useEffect, useState } from "react";
import { createContext } from "react";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth";
import app from "../Firebase/firebase.config";



export const AuthContext = createContext(null);


const auth = getAuth(app)

const AuthProvider = ({children}) => {
    const [user, setUser] = useState([])
    const [isLoading, setLoading] = useState(true)

    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }

   const login = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
   }

   const logOut = () =>{
    return signOut(auth)
   }

   useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
        console.log('observing the user',  user);
        setUser(currentUser)
        setLoading(false)
    })

    return () => {
        unsubscribe()
    }


   },[])

    const info = {
        user,
        isLoading,
        createUser,
        login,
        logOut,
    }

    return (
        <AuthContext.Provider value={info}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;