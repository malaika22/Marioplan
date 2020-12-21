import React from 'react';
import {Menu} from 'antd';

const SignedInLinks = () =>{
    return(
        <>
        <Menu className="nav-menu">
            <Menu.Item className="nav-menu-item" >
              New projects
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