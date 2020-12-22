import React from 'react';
import {Link} from 'react-router-dom'
import {Menu} from 'antd';

const SignedInLinks = () =>{
    return(
        <>
        <Menu className="nav-menu">
            <Menu.Item className="nav-menu-item" >
                <Link to='/project/createproject' >
                    New projects
                </Link>

            </Menu.Item>
            <Menu.Item className="nav-menu-item">
                Log Out
            </Menu.Item>
            <Menu.Item className="nav-menu-item">
                MA
            </Menu.Item>
        </Menu>
        </>
    )
}

export default SignedInLinks;