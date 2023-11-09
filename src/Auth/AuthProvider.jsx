import { useEffect, useState } from "react";
import { createContext } from "react";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth";
import app from "../Firebase/firebase.config";
import axios from "axios";



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
    setLoading(true)
    return signOut(auth)
   }

   useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth, currentUser =>{
        const userEmail = currentUser?.email || user?.email;
        const loggedUser = {email : userEmail}
        setUser(currentUser)
        setLoading(false)
        // If user exists then issue a token
        if(currentUser){
            axios.post("https://pizzan-server.vercel.app/jwt", loggedUser, {withCredentials:true})
            .then(res => {
                console.log(res.data);
            })
        }else{
            axios.post("https://pizzan-server.vercel.app/logout",loggedUser, {withCredentials:true})
            .then(res=>{
                console.log(res.data);
            })
        }

        console.log('current user ', currentUser);
        
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