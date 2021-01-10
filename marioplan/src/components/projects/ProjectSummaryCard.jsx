import React from 'react';
import { Card } from 'antd';
import moment from 'moment'

const ProjectSummaryCard = ({project: {title, content, createdAt}}) =>{
    return(
        <Card>
            <h3>{title}</h3>
            <p>{content}</p>
            <p>{moment(createdAt.toDate()).calendar()}</p> 
        </Card>

    )
}
export default ProjectSummaryCard;