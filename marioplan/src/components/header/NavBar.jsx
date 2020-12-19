import React from 'react';
import {Layout} from 'antd'
import SignedInLinks from './SignedInLinks';
import SignedOutLinks from './SignedOutLinks';

const {Header} = Layout
const NavBar = () =>{
    return(
        <Header>
            <h1>MarioPlan</h1>
            <SignedInLinks />
            <SignedOutLinks />
        </Header>
    )
}

export default NavBar;