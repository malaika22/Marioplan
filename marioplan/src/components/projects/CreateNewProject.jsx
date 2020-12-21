import React, { useState } from 'react';
import {Modal} from 'antd'
import { Form, Input, Button } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';

const CreateProject = () =>{
        const [projectTitle, setProjectTitle] = useState('');
        const [projectContent, setProjectContent] = useState('');

    return (
            <Form 
                name="create-project"
                className="project-form"
                labelAlign={'left'}
                style={{display: 'block'}}
            >
                <Form.Item 
                label="Project Title"
                rules={[{ required: true, message: 'Please enter title' }]}
                className="project-form-label"
                >
                    <Input type="text" placeholder="Enter project title" name="project-title" onChange={e=>setProjectTitle(e.target.value)}/>
                </Form.Item>
                <Form.Item 
                label="Project Content"
                rules={[{ required: true, message: 'Please enter project content' }]}
                className="project-form-label"
                >
                    <Input type="text" placeholder="Enter project content" name="project-content" onChange={e=>setProjectContent(e.target.value)}/>
                </Form.Item>
                <Button>
                    Create
                </Button>
            </Form>
    )
}

export default CreateProject;