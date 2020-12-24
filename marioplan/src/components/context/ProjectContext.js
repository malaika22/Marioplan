import React, {createContext, useContext ,useReducer, useState} from 'react';
import firebase from '../config/fbConfig'

const initState = {
    projects: [
      {id: '1', title: 'help me find peach', content: 'blah blah blah' , date: '22 Dec, 22'},
      {id: '2', title: 'collect all the stars', content: 'blah blah blah' , date: '22 Dec, 22'},
      {id: '3', title: 'egg hunt with yoshi', content: 'blah blah blah' , date: '22 Dec, 22'}
    ]
}

export const ProjectContext = createContext()


export const ProjectContextProvider = ({children}) =>{
    const db = firebase.firestore()
    const [projects, setProjects] = useState(initState.projects) 

    const createProject = (project) => {
        // setProjects([...projects, project])
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
            createProject : createProject} }>
            {children}
        </ProjectContext.Provider>
    )
}