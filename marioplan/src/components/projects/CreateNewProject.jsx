import React, { useContext, useState } from 'react';
import {Modal} from 'antd'
import { Form, Input, Button } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { ProjectContext } from '../context/ProjectContext';

const CreateProject = ({showCreateProjectModal, setShowCreateProjectModal}) =>{
        const {createProject} = useContext(ProjectContext);
        const [projectTitle, setProjectTitle] = useState('');
        const [projectContent, setProjectContent] = useState('');
     const   handleSubmit = (e) =>{
         e.preventDefault();
         const project={
            id: Math.floor(Math.random() * 100000000),
            title: projectTitle,
            content: projectContent,
        }
        createProject(project);
        setShowCreateProjectModal(!showCreateProjectModal)
     }
    return (
        <Modal
        visible={showCreateProjectModal} 
        onCancel={()=>setShowCreateProjectModal(!showCreateProjectModal)}>
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
                <Button onClick={handleSubmit}>
                    Create
                </Button>
            </Form>
            {/* <form onSubmit={handleSubmit}>
                    <label>Project title</label>
                    <input type="text" name="project-title" id="project-title" value={projectTitle}  onChange={e=>setProjectTitle(e.target.value)} />
                    <label>Project title</label>
                    <input type="text" name="project-content" id="project-content" value={projectContent}  onChange={e=>setProjectContent(e.target.value)} />
                    <button type="submit" >Create</button>
            </form> */}
        </Modal>


    )
}

export default CreateProject;