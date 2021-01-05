import React, { useContext, useEffect, useState } from 'react';
import {ProjectContext} from '../context/ProjectContext'
export const ProjectDetails = ({match}) =>{
    const   {projects=[]}= useContext(ProjectContext)
    console.log(typeof(match.params.id))
    console.log(projects)
    const projectDetails= projects.filter(project => project.id==match.params.id)[0]
    //const [projectId, setProjectID] = useState('');
    // console.log(projectDetails)
    // console.log(projectDetails.title)
    // console.log(projectDetails.content)
    // console.log(projectDetails.authorFirstName)
    // useEffect(()=>{
    //     const projectDetails= projects.filter(project => project.id==match.params.id)
    //     console.log(projectDetails)
    //     setProjectID(projectDetails.id)
    // },[projectId])
    if (projectDetails) {
        return(
            <div className="project-container">
                <div className="project-details">
                    <h1 className="project-heading">
                        {projectDetails.title}
                    </h1>
                    <p className="project-description">
                        {projectDetails.content}
                    </p>
                </div>
                <div className="project-details-footer">
                    <p className="project-posted-by">
                        {projectDetails.authorFirstName} 
                    </p>
                    <p className="project-post-time">
                      September 22, 2020
                    </p>
                </div>
            </div>
    
        ) 
    } else{
        return (
            <h1>Loading...</h1>
        )

    }

       
 }
