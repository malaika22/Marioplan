import React, {createContext, useState, useEffect} from 'react';
import firebase from '../config/fbConfig'


export const UserContext = createContext()

export const UserContextProvider = ({children}) =>{
    const [user, setUser] = useState(null)
    const db = firebase.auth()

    useEffect(()=>{
        firebase.auth().onAuthStateChanged(userAuth => {
           setUser(userAuth)
        })
    }, [])
    
     const signIn = (credentials) =>{  
        db.signInWithEmailAndPassword(
          credentials.email,
          credentials.password
        ).then(() => {
                console.log('logged in')
        }).catch((err) => {
           console.log(err)
        });
    }

    const signOut = () =>{
        db.signOut().then(() => console.log('successful  logged out'))
    }

    return (
        <UserContext.Provider value={{
            signIn : signIn,
            signOut: signOut ,
            user: user
        }}>
            {children}
        </UserContext.Provider>
    )
}



      