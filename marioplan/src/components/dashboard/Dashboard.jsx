import React from 'react';
import ProjectList from '../projects/ProjectList'
import {Layout} from 'antd'
import Notifications from './Notifications'
import SignIn from '../auth/SignIn';

const {Content} = Layout

const Dashboard = () =>{
    return (
        <Content>
            <ProjectList />
            <Notifications />
        </Content>
    )
}

export default Dashboard;