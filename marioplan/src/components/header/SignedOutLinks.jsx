import React, {useContext, useState} from 'react';
import { Menu } from 'antd';
import SignIn from '../auth/SignIn'
import SignUp from '../auth/SignUp'

const renderActions = (key, showSignInModal, setSignInShowModal, showSignUpModal, setSignUpShowModal) => {
    console.log(key)
        switch(key) {
            case "login" :
                return <SignIn showSignInModal={showSignInModal} setSignInShowModal={setSignInShowModal}/>
            case "signup" :
                return <SignUp showSignUpModal={showSignUpModal} setSignUpShowModal={setSignUpShowModal} />
            default:
        }
}

const SignedOutLinks = () =>{
    const [showSignInModal, setSignInShowModal] = useState(false);
    const [showSignUpModal, setSignUpShowModal] = useState(false)
    const [currentKey, setCurrentKey] = useState('');

    return(
        <>
        <Menu className="nav-menu" onClick={e=>setCurrentKey(e.key)}>
            <Menu.Item className="nav-menu-item" key="signup" onClick={()=>setSignUpShowModal(!showSignUpModal)} >
                Signup
            </Menu.Item>
            <Menu.Item className="nav-menu-item" key="login" onClick={()=>setSignInShowModal(!showSignInModal)}>
                Login
            </Menu.Item>
        </Menu>
        {renderActions(currentKey, showSignInModal,setSignInShowModal, showSignUpModal, setSignUpShowModal)}
            </> 
    );
};

export default SignedOutLinks; 