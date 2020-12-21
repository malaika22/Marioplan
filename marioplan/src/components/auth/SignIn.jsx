import React, { useState } from 'react';
import {Modal} from 'antd'
import { Form, Input, Button, Checkbox } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';

const SignIn = ({showSignInModal, setSignInShowModal}) =>{
        const [userName, setUserName] = useState('');
        const [password, setPassword] = useState('');
        console.log('showModal')

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
            >
            <Form.Item
                name="username"
                rules={[{ required: true, message: 'Please input your Username!' }]}
            >
                <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" name="userName" onChange={e=>setUserName(e.target.value)} />
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
                onChange={e=>setPassword(e.target.value)}
                />
            </Form.Item>
            <Form.Item>
                <Button type="primary" htmlType="submit" className="login-form-button">
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