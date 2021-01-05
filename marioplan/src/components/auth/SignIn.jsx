import React, { useContext, useState } from 'react';
import {UserContext} from '../context/UserContext'
import {Modal} from 'antd'
import { Form, Input, Button, Checkbox } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';

const SignIn = ({showSignInModal, setSignInShowModal}) =>{

    const {userLogin, setUserLogin,signIn} = useContext(UserContext)
    console.log(userLogin)


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

        console.log(userLogin)
    return (
        <Modal 
        visible={showSignInModal}
        footer={null}
        onCancel={()=>setSignInShowModal(!showSignInModal)}
        title={'Sign In'}>
        <Form onFinish={()=>setSignInShowModal(!showSignInModal)}
            name="normal_login"
            className="login-form"
            initialValues={{ remember: true }}
            onSubmit={handleSubmit}
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
                <Button form="loginForm" onSubmit={handleSubmit} htmlType="submit" className="login-form-button" key="submit" onClick={handleSubmit} >
                Log in
                </Button>
                <Button onClick={()=>setSignInShowModal(!showSignInModal)}>
                    Cancel
                </Button>
            </Form.Item>
            </Form>
        </Modal>
    )
}

export default SignIn