import React from 'react';
import { Menu } from 'antd';
import {Link} from 'react-router-dom'


const SignedOutLinks = () =>{
    return(
        <Menu>
            <Menu.Item>
                <Link to="/">Signup</Link>
            </Menu.Item>
            <Menu.Item>
                <Link to="/">Login</Link>
            </Menu.Item>
        </Menu>
    );
};

export default SignedOutLinks;