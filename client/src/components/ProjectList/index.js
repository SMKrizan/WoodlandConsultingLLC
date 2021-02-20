import React from "react";
import { useQuery } from '@apollo/react-hooks';
import { GET_PROJECTS } from "../../utils/queries";

function ProjectList() {
    const { loading, data } = useQuery(GET_PROJECTS);
    const projectData = data?.projects || [];
    console.log("PROJECTS", data?.projects);

    if (loading) {
        return <div>Loading...</div>;
    }
    if (!projectData) {
        console.log("nothing pulled....")
        return <h2>LOADING...</h2>;
    }

    return (
        <section>
            {projectData.map(item => (
                <div>
                    Project name:   {item.projectName}
                </div>
            ))}
        </section>
    );
}
export default ProjectList;