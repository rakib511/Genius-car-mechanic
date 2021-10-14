import { useEffect, useState } from "react";

import { getAuth, signInWithPopup, GoogleAuthProvider,signOut,onAuthStateChanged  } from "firebase/auth";
import initializeAuthentication from "../Pages/Login/Firebase/firebase.init";


initializeAuthentication()
const Usefirebase = () =>{
    const [user,setUser] = useState({});
    const [isLoading,setIsLoading] = useState(true);
    useEffect( () =>{

    }, [])
    const auth = getAuth();

    const signInUsingGoogle = () =>{
        setIsLoading(true)
        const googleProvider = new GoogleAuthProvider();

        signInWithPopup(auth, googleProvider)
            .then( result => {
                setUser(result.user)
            })
            .finally(() => setIsLoading(false))
    }


    useEffect( () =>{
        const unsubscribed = onAuthStateChanged(auth,user =>{
            if (user) {
                setUser(user)
              } else {
                setUser({})
              }
             setIsLoading(false)
        });
       
        return () => unsubscribed;
    }, [])


    const logOut = () =>{
        setIsLoading(true)
        signOut( auth)
        .then( ()=> { })
        .finally( () => setIsLoading(false));
    }


    return {
        user,
        isLoading,
        signInUsingGoogle,
        logOut
    }
}  

export default Usefirebase;