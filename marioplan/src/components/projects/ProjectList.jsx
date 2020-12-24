import React, { useContext } from 'react';
import ProjectSummaryCard from './ProjectSummaryCard'
import {ProjectContext} from '../context/ProjectContext'


const ProjectList = () =>{
    const {projects} = useContext(ProjectContext)
    console.log(projects)
    console.log(projects)
    return (
        <div>
            {projects.map(project => <ProjectSummaryCard key={project.id} project={project}/>)}
        </div>
    )
}

export default ProjectList;