import React from 'react';
import {Layout} from 'antd'
import SignedInLinks from './SignedInLinks';
import SignedOutLinks from './SignedOutLinks';
import './styles.scss'

const {Header} = Layout
const NavBar = () =>{
    return(
        <Header className="nav-header">
            <h1 className="nav-title">MarioPlan</h1>
            <div className="nav-actions">
                <SignedInLinks />
                <SignedOutLinks />
            </div>

        </Header>
    )
}

export default NavBar;