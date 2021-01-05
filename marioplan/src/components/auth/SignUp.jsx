import React, { useState } from 'react';
import { Form, Input, Button, Modal } from 'antd';

const SignUp = ({showSignUpModal, setSignUpShowModal}) =>{
    console.log(showSignUpModal)
    const [singUpUserName, setSignUpUserName] = useState('')
    const [signUpPassword, setSignUpPassword] = useState('')
    const [signUpFirstName, setSignUpFirstName] = useState('')
    const [signUpLastName, setSignUpLastName] =useState('')
    return(
        <Modal 
        visible={showSignUpModal}
        onCancel={()=>setSignUpShowModal(!showSignUpModal)}
        title={'Sign up'}
        footer={null}>
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
                    Login
                </Button>
                <Button onClick={()=>setSignUpShowModal(!showSignUpModal)}>
                    Cancel
                </Button>
                </Form.Item>
            </Form>
        </Modal>
    )
}

export default SignUp;