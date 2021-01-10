import React, { useContext, useState } from 'react';
import { Form, Input, Button, Modal } from 'antd';
import { UserContext } from '../context/UserContext';
import {Redirect} from 'react-router-dom'

const SignUp = () =>{
    const {user, signUp} = useContext(UserContext)
    const [signUpUser, setSignUpUser] = useState({
        email: '' ,
        password: '',
        firstName: '' ,
        lastName: ''
    })
    const handleChange = (e) =>{
        setSignUpUser({
            ...signUpUser,
            [e.target.name] : e.target.value,
        })
    }
    const handleSignUpSubmit =() =>{
        console.log(signUpUser)
        signUp(signUpUser)
    }
    if (user) return <Redirect to='/' />
    return(
            <Form>
                <Form.Item
                label="Username"
                name="username"
                rules={[{ required: true, message: 'Please input your username!' }]}
                >
                <Input  type="email" name='email' value={signUpUser.email} onChange={e=> handleChange(e)}/>
                </Form.Item>
                <Form.Item
                label="Password"
                name="password"
                rules={[{ required: true, message: 'Please input your password!' }]}
                >
                <Input.Password type='password' name='password' value={signUpUser.password} onChange={e=>handleChange(e)}/>
                </Form.Item>
                <Form.Item
                label="First Name"
                name="firstname"
                rules={[{ required: true, message: 'Please input your first name!' }]}
                >
                <Input type="text" name='firstName' value={signUpUser.firstName}  onChange={e=>handleChange(e)}/>
                </Form.Item>
                <Form.Item
                label="Last Name"
                name="lastName"
                rules={[{ required: true, message: 'Please input your last name!' }]}
                >
                <Input type="text" name='lastName' value={signUpUser.lastName}  onChange={e=>handleChange(e)}/>
                </Form.Item>
                <Form.Item >
                <Button type="primary" htmlType="submit" onClick={handleSignUpSubmit}>
                    Signup
                </Button>
                <Button >
                    Cancel
                </Button>
                </Form.Item>
            </Form>
    )
}

export default SignUp;