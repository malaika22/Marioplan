import React, { useContext } from 'react';
import ProjectList from '../projects/ProjectList'
import {Layout} from 'antd'
import Notifications from './Notifications'
import {Redirect} from 'react-router-dom'
import { UserContext } from '../context/UserContext';
import { ProjectContext } from '../context/ProjectContext';

const {Content} = Layout

const Dashboard = () =>{
    console.log('in dashboard')
    const {user} = useContext(UserContext)
    const {projects} = useContext(ProjectContext)
    console.log('in dashboard')
    if(!user) return <Redirect to="/signin"/>
   
    return (
        <Content>
            <ProjectList projects={projects}/>
            <Notifications />
        </Content>
        )

    

}

export default Dashboard;