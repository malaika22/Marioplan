import React, { useContext, useState } from 'react';
import {UserContext} from '../context/UserContext'
import { Form, Input, Button } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { Redirect } from 'react-router-dom';

const SignIn = () =>{
    const {signIn , user} = useContext(UserContext)
    const [userLogin, setUserLogin] =  useState({
        email: '' ,
        password: '',
        error: ''
    })

        const onHandleChange = (e) => {
            console.log('in handle')
            setUserLogin({
                ...userLogin,
                [e.target.name] : e.target.value,
            })
            console.log(userLogin)

        }
        console.log('showModal')

        const handleSubmit = () =>{
            console.log('checking handlesubmit')
            signIn(userLogin)
        }
        if (user) return <Redirect to='/' />
    return (
        <Form 
            name="normal_login"
            className="login-form"
            id="loginForm"
            >
            <Form.Item
                name="username"
                rules={[{ required: true, message: 'Please input your Email!' }]}
            >
                <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Email" name="email" onChange={e=>onHandleChange(e)} type='email' value={userLogin.email} />
            </Form.Item>
            <Form.Item
                name="password"
                rules={[{ required: true, message: 'Please input your Password!' }]}
            >
                <Input
                prefix={<LockOutlined className="site-form-item-icon" />}
                type="password"
                placeholder="Password"
                name="password"
                onChange={e=>onHandleChange(e)}
                value={userLogin.password}
                />
            </Form.Item>
            <Form.Item>
                <Button form="loginForm" htmlType="submit" className="login-form-button" key="submit" onClick={handleSubmit} >
                Log in
                </Button>
                <Button >
                    Cancel
                </Button>
            </Form.Item>
            </Form>
    )
}

export default SignIn