import React, {createContext, useState} from 'react';
import firebase from '../config/fbConfig'


export const UserContext = createContext()

export const UserContextProvider = ({children}) =>{
    console.log('start')
    const [userLogin, setUserLogin] =  useState({
        email: '' ,
        password: '',
        error: ''
    })
    console.log('after coming')
    console.log(userLogin)

    const db = firebase.auth()

    //signing in users
     const signIn = (credentials) =>{  
        db.signInWithEmailAndPassword(
          credentials.email,
          credentials.password
        ).then(() => {
            console.log(userLogin)
        }).catch((err) => {
            setUserLogin({
                ...userLogin,
                error:err
            })
            console.log(userLogin.email)
          //  console.log(userLogin.error)
            console.log(userLogin ,err)
           
        });
    }

    const signOut = () =>{
        db.signOut.then(() => console.log('successful  logged out'))
    }

    return (
        <UserContext.Provider value={{
            userLogin: userLogin,
            signIn : signIn,
            setUserLogin: setUserLogin,

        }}>
            {children}
        </UserContext.Provider>
    )
}



      