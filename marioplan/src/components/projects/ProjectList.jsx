import React, { useContext, useEffect, useState } from 'react';
import ProjectSummaryCard from './ProjectSummaryCard'
import {ProjectContext} from '../context/ProjectContext'
import {Link} from 'react-router-dom'
import firebase from '../config/fbConfig'


const ProjectList = () =>{
    const {projects,fetchingData, loading} = useContext(ProjectContext)

    
    return (
        <div>
            {loading && <h1>loading</h1>}
            {projects.map(project=>
            <Link to={`/projects/${project.id}`} >
                <ProjectSummaryCard project={project}/>
            </Link>
            )}
        </div>
    )
}

export default ProjectList;