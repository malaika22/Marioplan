import React, { useContext, useEffect, useState } from 'react';
import {Layout} from 'antd'
import SignedInLinks from './SignedInLinks';
import SignedOutLinks from './SignedOutLinks';
import './styles.scss'
import { UserContext } from '../context/UserContext';
import firebase from '../config/fbConfig'
import { Link } from 'react-router-dom';

const {Header} = Layout

const NavBar = () =>{
    const {user} = useContext(UserContext)
    console.log(user)
    if(user) {
        console.log(user.uid)
    }
    return(
        <Header className="nav-header">
            <Link to='/' >
            <h1 className="nav-title">MarioPlan</h1>
            </Link>
            <div className="nav-actions">
                {user ? <SignedInLinks /> :   <SignedOutLinks /> }
            </div>
        </Header>
    )
}

export default NavBar;