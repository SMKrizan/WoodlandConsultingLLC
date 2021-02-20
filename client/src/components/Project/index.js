
import React from "react";
// import mapStyles from '../../pages/Map/mapStyles';

// import { useStoreContext } from "../../utils/GlobalState";
// import { GET_PROJECTS } from "../../utils/actions";
// import { useQuery } from '@apollo/react-hooks';
// import { idbPromise } from "../../utils/helpers";
// import { useQuery } from '@apollo/react-hooks';
// import { idbPromise } from "../../utils/helpers";
import { Card, CardHeader, CardTitle, CardBody } from 'reactstrap';

const Project = ({ projects }) => {
    // ({ projectName, description, location, _id = '' }) => {
    return (
        <div>
            { projects &&
                projects.map((project) => (
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