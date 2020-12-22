import React, { useContext } from 'react';
import ProjectSummaryCard from './ProjectSummaryCard'
import {GlobalContext} from '../context/GlobalState'


const ProjectList = () =>{
    const {projects} = useContext(GlobalContext)
    console.log(projects)
    return (
        <div>
            {projects.map(project => <ProjectSummaryCard key={project.id} project={project}/>)}
        </div>
    )
}

export default ProjectList;