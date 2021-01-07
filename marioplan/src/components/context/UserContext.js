import React, {createContext, useState} from 'react';
import firebase from '../config/fbConfig'


export const UserContext = createContext()

export const UserContextProvider = ({children}) =>{
    console.log('start')


    const [userStatus, setUserStatus] = useState({loggedIn : false})
    console.log('after coming')
   
    const db = firebase.auth()
    const onAuthStateChange = () =>{
        firebase.auth().onAuthStateChanged(user => {
            if(user) {
                setUserStatus({
                    loggedIn : true
                })
            } else {
                setUserStatus({
                    loggedIn : false
                })
            }
        })
    }
    console.log(userStatus)
     const signIn = (credentials) =>{  
      //  const unsubscribe = onAuthStateChange();
        db.signInWithEmailAndPassword(
          credentials.email,
          credentials.password
        ).then(() => {
           onAuthStateChange();
        }).catch((err) => {
           console.log(err)
        });
        // return () => {
        //     unsubscribe();
        //   };
    }

    const signOut = () =>{
        db.signOut().then(() => console.log('successful  logged out'))
        onAuthStateChange()
    }

    return (
        <UserContext.Provider value={{
           // userLogin: userLogin,
            signIn : signIn,
           // setUserLogin: setUserLogin,
            signOut: signOut ,
            userStatus: userStatus

        }}>
            {children}
        </UserContext.Provider>
    )
}



      