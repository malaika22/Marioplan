import React, { useContext, useEffect, useState } from 'react';
import { Redirect } from 'react-router-dom';
import {ProjectContext} from '../context/ProjectContext'
import { UserContext } from '../context/UserContext';
import moment from 'moment'
export const ProjectDetails = ({match}) =>{
    const   {projects=[]}= useContext(ProjectContext)
    const {user} = useContext(UserContext)
    const projectDetails= projects.filter(project => project.id==match.params.id)[0]

    if (!user) return <Redirect to = "/signin" />
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
                    {moment(projectDetails.createdAt.toDate()).calendar()}
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
