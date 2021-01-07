import React, {useState, useContext} from 'react';
import {Link} from 'react-router-dom'
import {Menu} from 'antd';
import CreateProject from '../projects/CreateNewProject';
import {UserContext} from '../context/UserContext'

const SignedInLinks = () =>{
    const [showCreateProjectModal, setShowCreateProjectModal] = useState(false)
    const {signOut} = useContext(UserContext)
    return(
        <>
        <Menu className="nav-menu">
            <Menu.Item className="nav-menu-item" onClick={() => setShowCreateProjectModal(!showCreateProjectModal)} >
                    New projects
            </Menu.Item>
            <Menu.Item className="nav-menu-item" onClick={signOut}>
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