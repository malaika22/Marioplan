import React from 'react';
import { Card } from 'antd';

const ProjectSummaryCard = ({project: {title, content, date}}) =>{
    return(
        <Card>
            <h3>{title}</h3>
            <p>{content}</p>
            <p>{date}</p>
        </Card>

    )
}
export default ProjectSummaryCard;