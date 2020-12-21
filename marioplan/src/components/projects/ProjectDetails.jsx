import React from 'react';

const ProjectDetails = () =>{
    return(
        <div className="project-container">
            <div className="project-details">
                <h1 className="project-heading">
                    Project Title
                </h1>
                <p className="project-description">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa ullam eius repellat placeat nihil 
                    natus dolore expedita rem, maiores ad sit, voluptas et aut sint at repudiandae, rerum eveniet! Voluptatum!
                </p>
            </div>
            <div className="project-details-footer">
                <p className="project-posted-by">
                    Posted by Malaika Afridi
                </p>
                <p className="project-post-time">
                    2nd September, 2am
                </p>
            </div>
        </div>
    )
}

export default ProjectDetails