import React, {createContext, useEffect, useState} from 'react';
import firebase from '../config/fbConfig'

export const ProjectContext = createContext()
export const ProjectContextProvider = ({children}) =>{
    const db = firebase.firestore()
    const [projects, setProjects] = useState([]) 
    console.log(firebase)
    const [loading,setLoading] =useState(true)
    useEffect(()=>{
        db.collection('projects').onSnapshot( snapshot => {
                console.log(snapshot)
                const dataArr = []
                for (let i in snapshot){
                    console.log(i)
                }
                snapshot.forEach( doc => {
                    dataArr.push({...doc.data()})
                })
                fetchingData(dataArr)
                setLoading(false)
                
        })
    },[])

    const fetchingData = (userProjects) =>{
        setProjects([...projects, ...userProjects])
        console.log(projects)
    }

    const createProject = (project) => {
        db.collection('projects').add({
            ...project,
            authorFirstName : 'Malaika' ,
            authorLastName: 'Afridi' ,
            authorId: 1234,
            createdAt: new Date()
        }).then(()=> setProjects([...projects, project]))
    }
    
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