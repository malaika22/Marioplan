import React, {useState} from 'react';
import {Link} from 'react-router-dom'
import {Menu} from 'antd';
import CreateProject from '../projects/CreateNewProject';

const SignedInLinks = () =>{
    const [showCreateProjectModal, setShowCreateProjectModal] = useState(false)
    return(
        <>
        <Menu className="nav-menu">
            <Menu.Item className="nav-menu-item" onClick={() => setShowCreateProjectModal(!showCreateProjectModal)} >
                    New projects
            </Menu.Item>
            <Menu.Item className="nav-menu-item">
                Log Out
            </Menu.Item>
            <Menu.Item className="nav-menu-item">
                MA
            </Menu.Item>
        </Menu>
        {showCreateProjectModal && <CreateProject showCreateProjectModal={showCreateProjectModal} setShowCreateProjectModal={setShowCreateProjectModal}/>}
        </>
    )
}

export default SignedInLinks;