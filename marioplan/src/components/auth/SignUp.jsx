import React, { useContext, useState } from 'react';
import { Form, Input, Button, Modal } from 'antd';
import { UserContext } from '../context/UserContext';
import {Redirect} from 'react-router-dom'

const SignUp = () =>{
    const {user} = useContext(UserContext)
    const [singUpUserName, setSignUpUserName] = useState('')
    const [signUpPassword, setSignUpPassword] = useState('')
    const [signUpFirstName, setSignUpFirstName] = useState('')
    const [signUpLastName, setSignUpLastName] =useState('')
    if (user) return <Redirect to='/' />
    return(
            <Form>
                <Form.Item
                label="Username"
                name="username"
                rules={[{ required: true, message: 'Please input your username!' }]}
                >
                <Input  type="text" name='username' value={singUpUserName} onChange={e=> setSignUpUserName(e.target.value)}/>
                </Form.Item>
                <Form.Item
                label="Password"
                name="password"
                rules={[{ required: true, message: 'Please input your password!' }]}
                >
                <Input.Password type='password' name='password' value={signUpPassword} onChange={e=>setSignUpPassword(e.target.value)}/>
                </Form.Item>
                <Form.Item
                label="First Name"
                name="firstname"
                rules={[{ required: true, message: 'Please input your first name!' }]}
                >
                <Input type="text" name='firstName' value={signUpFirstName} onChange={e=>setSignUpFirstName(e.target.value)}/>
                </Form.Item>
                <Form.Item
                label="Last Name"
                name="lastName"
                rules={[{ required: true, message: 'Please input your last name!' }]}
                >
                <Input type="text" name='lastName' value={signUpLastName} onChange={e=>setSignUpLastName(e.target.value)}/>
                </Form.Item>
                <Form.Item >
                <Button type="primary" htmlType="submit">
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