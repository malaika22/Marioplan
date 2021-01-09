import React, {useContext, useState} from 'react';
import { Menu } from 'antd';
import { Link } from 'react-router-dom';


const SignedOutLinks = () =>{
    return(
        <Menu className="nav-menu" >
                <Menu.Item className="nav-menu-item" key="signup" >
                <Link to='/signup' >
                    Signup
                    </Link>
                </Menu.Item>
                <Menu.Item className="nav-menu-item" key="login" >
                <Link to='/signin'>
                        Login
                </Link>
                </Menu.Item>
        </Menu>
    );
};

export default SignedOutLinks; 