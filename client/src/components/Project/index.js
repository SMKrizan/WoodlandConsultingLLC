import React from "react";
import { Card, CardHeader, CardTitle, CardBody } from 'reactstrap';

const Project = ({ project }) => {
    console.log("PROJECTS", project)

    return (
        <div>
            { project &&
                project.map((project) => (
                    <Card outline color='secondary' key={project._id}>
                        <CardHeader> {project.projectName}</CardHeader>
                        <CardBody>
                            <CardTitle> {project.description}</CardTitle>
                        </CardBody>
                    </Card>
                    // { projects.location }
                ))}
        </div>
    );
};
export default Project;