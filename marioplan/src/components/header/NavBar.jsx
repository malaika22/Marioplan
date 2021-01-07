import React, { useContext, useEffect, useState } from 'react';
import {Layout} from 'antd'
import SignedInLinks from './SignedInLinks';
import SignedOutLinks from './SignedOutLinks';
import './styles.scss'
import { UserContext } from '../context/UserContext';
import firebase from '../config/fbConfig'

const {Header} = Layout

const NavBar = () =>{
    const {userStatus} = useContext(UserContext)
    console.log(userStatus)
    return(
        <Header className="nav-header">
            <h1 className="nav-title">MarioPlan</h1>
            <div className="nav-actions">
                {userStatus.loggedIn ? <SignedInLinks /> :   <SignedOutLinks /> }
            </div>

        </Header>
    )
}

export default NavBar;