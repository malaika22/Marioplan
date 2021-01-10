import React, {createContext, useState, useEffect} from 'react';
import firebase from '../config/fbConfig'


export const UserContext = createContext()

export const UserContextProvider = ({children}) =>{
    const [user, setUser] = useState(null)
    const [currentUser, setCurrentUser] = useState(null)
    const firebaseAuth = firebase.auth()
    const firestore = firebase.firestore()

    useEffect(()=>{
        firebase.auth().onAuthStateChanged(userAuth => {
           setUser(userAuth)
           if(userAuth){
                firestore.collection('users').doc(userAuth.uid).get().then(res=> 
                  {  console.log(res)
                    setCurrentUser(res.data())}
                ).catch(err => console.log(err))
        } 
        else {
                console.log('not user')
        }
        })
        
    }, [])
    
     const signIn = (credentials) =>{  
        firebaseAuth.signInWithEmailAndPassword(
          credentials.email,
          credentials.password
        ).then(() => {
                console.log('logged in')
        }).catch((err) => {
           console.log(err)
        });
    }

    const signOut = () =>{
        firebaseAuth.signOut().then(() => console.log('successful  logged out'))
    }

    const signUp = (newUser) =>{
        firebaseAuth.createUserWithEmailAndPassword(
            newUser.email,
            newUser.password
        ).then(resp =>{
            //console.log(resp) 
            console.log(resp.user.uid)
            firestore.collection('users').doc(resp.user.uid).set({
                firstName: newUser.firstName,
                lastName: newUser.lastName,
                initials: newUser.firstName[0] + newUser.lastName[0]
            })
        }).then(()=>{
            console.log('signup successful')
        }).catch(err=>console.log(err))
    }
    console.log(firestore.collection('users'))

    return (
        <UserContext.Provider value={{
            signIn : signIn,
            signOut: signOut,
            signUp: signUp,
            user: user,
            currentUser: currentUser
        }}>
            {children}
        </UserContext.Provider>
    )
}



      