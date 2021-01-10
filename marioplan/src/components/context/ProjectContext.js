import React, {createContext, useEffect, useState, useContext} from 'react';
import firebase from '../config/fbConfig'
import {UserContext} from '../context/UserContext'


export const ProjectContext = createContext()
export const ProjectContextProvider = ({children}) =>{
    const {currentUser, user} = useContext(UserContext)
    console.log(currentUser)
    const db = firebase.firestore()
    const [projects, setProjects] = useState([]) 
    console.log(firebase)
    const [loading,setLoading] =useState(true)
    useEffect(()=>{
        console.log('again in projects')
        db.collection('projects').onSnapshot( snapshot => {
                console.log('added project')
                const dataArr = []
                snapshot.forEach( doc => {
                    dataArr.push({...doc.data()})
                })
                fetchingData(dataArr)
                setLoading(false)
                console.log(projects)
        })

    },[])

    const fetchingData = (userProjects) =>{
        setProjects([...projects, ...userProjects])
        console.log(projects)
    }

    const createProject = (project) => {
        db.collection('projects').add({
            ...project,
            authorFirstName : currentUser.firstName ,
            authorLastName: currentUser.lastName ,
            authorId: user.uid,
            createdAt: new Date()
        }).then((res)=> console.log(res))
    }
    console.log(projects)
    return(
        <ProjectContext.Provider value={{
            projects: projects, 
            createProject : createProject,
            loading:loading
            } }>
            {children}
        </ProjectContext.Provider>
    )
}