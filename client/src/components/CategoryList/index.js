import React, {useState} from 'react';
import { useQuery} from '@apollo/react-hooks';
import { GET_PROJECTS } from '../../utils/queries';



function CategoryList() {

    const { loading, data} = useQuery(GET_PROJECTS);
    const projectData = data?.projects ;

    if (loading) {
      return <div>Loading...</div>;
    }
    if (!projectData) {
        console.log("no testimonials pulled....")
        return <h2>LOADING...</h2>;
      }

    const [libraries] = [projectData.filter((project) => project.category.categoryName == 'Libraries/Schools')];
    console.log(libraries)

    const [health] = [projectData.filter((project) => project.category.categoryName == 'Healthcare/Hospice')];
    console.log(health)
    let cleanedHealth = [...new Set(health)]
    console.log("health", cleanedHealth)

    const [commercial] = [projectData.filter((project) => project.category.categoryName == 'Commercial/Office')];
    console.log(commercial)
    const [retail] = [projectData.filter((project) => project.category.categoryName == 'Retail/Restaurant')];
    console.log(retail)
    const [industrial] = [projectData.filter((project) => project.category.categoryName == 'Industrial/Transport Hubs')];
    console.log("industial", industrial)

    return (
        <div className="gallery">
            <div className="project-category">
                <h3>Category1</h3>
                <ui>
                {libraries.map(project => 
                    <li>
                        {project.company}
                    </li>
                )}
                </ui>
            </div>
            <div className="project-category">
                <h3>Category1</h3>
                <div>
                    <ul>
                    Map the list here
                        <li></li>
                    </ul>
                </div>
            </div>
            <div className="project-category">
                <h3>Category1</h3>
                <div>
                    <ul>
                    Map the list here
                        <li></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default CategoryList;