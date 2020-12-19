import React from 'react';
import {Menu} from 'antd';
import { Link } from 'react-router-dom';

const SignedInLinks = () =>{
    return(
        <Menu>
            <Menu.Item>
               <Link to='/' >New projects </Link>
            </Menu.Item>
            <Menu.Item>
                <Link to='/' > Log Out</Link>
            </Menu.Item>
            <Menu.Item>
                <Link to='/' >MA</Link>
            </Menu.Item>
        </Menu>
    )
}

export default SignedInLinks;