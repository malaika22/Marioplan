import React, { useContext } from 'react';
import ProjectList from '../projects/ProjectList'
import {Layout} from 'antd'
import Notifications from './Notifications'
import {Redirect} from 'react-router-dom'
import { UserContext } from '../context/UserContext';

const {Content} = Layout

const Dashboard = () =>{
    const {user} = useContext(UserContext)
    if(!user) return <Redirect to="/signin"/>
   
    return (
        <Content>
            <ProjectList />
            <Notifications />
        </Content>
        )

    

}

export default Dashboard;