import React, {useState, useContext} from 'react';
import {Link} from 'react-router-dom'
import {Menu} from 'antd';
import CreateProject from '../projects/CreateNewProject';
import {UserContext} from '../context/UserContext'
import firebase from '../config/fbConfig'

const SignedInLinks = () =>{
    const {signOut, currentUser} = useContext(UserContext)
    const firestore = firebase.firestore();
    const [userInfo, setUserInfo] = useState('')

    return(
        <>
        <Menu className="nav-menu">
            <Menu.Item className="nav-menu-item">
                <Link to='/create' >
                    New projects
                </Link>
            </Menu.Item>
            <Menu.Item className="nav-menu-item" onClick={signOut}>
                Log Out
            </Menu.Item>
            <Menu.Item className="nav-menu-item">
                {currentUser ? currentUser.initials  : <>MM</> }
            </Menu.Item>
        </Menu>
        </>
    )
}

export default SignedInLinks;