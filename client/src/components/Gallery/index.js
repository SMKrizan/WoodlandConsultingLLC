import React from 'react';
import { useQuery} from '@apollo/react-hooks';


import image1 from '../../assets/images/portfolio/Colliers_1.JPG';
import { GET_PROJECTS } from '../../utils/queries';



function Gallery() {
    const { loading, data} = useQuery(GET_PROJECTS);
    const projectData = data?.projects ;
    console.log(projectData)
    if (loading) {
      return <div>Loading...</div>;
    }
    if (!projectData) {
        console.log("no testimonials pulled....")
        return <h2>LOADING...</h2>;
      }


    return (
        <div className="gallery pad">
            <div className="project">
                <div className="project-img" style={{  backgroundImage: "url(" + image1 + ")"}}>
                    <h3>Project Name</h3>
                    <h4>category</h4>
                </div>
            </div>

            <div className="project">
                <div className="project-img" style={{  backgroundImage: "url(" + image1 + ")"}}>
                    <h3>Project Name</h3>
                    <h4>category</h4>
                </div>
            </div>

            <div className="project">
                <div className="project-img" style={{  backgroundImage: "url(" + image1 + ")"}}>
                    <h3>Project Name</h3>
                    <h4>category</h4>
                </div>
            </div>

            <div className="project">
                <div className="project-img" style={{  backgroundImage: "url(" + image1 + ")"}}>
                    <h3>Project Name</h3>
                    <h4>category</h4>
                </div>
            </div>

            <div className="project">
                <div className="project-img" style={{  backgroundImage: "url(" + image1 + ")"}}>
                    <h3>Project Name</h3>
                    <h4>category</h4>
                </div>
            </div>

            <div className="project">
                <div className="project-img" style={{  backgroundImage: "url(" + image1 + ")"}}>
                    <h3>Project Name</h3>
                    <h4>category</h4>
                </div>
            </div>
        </div>
    )
}

export default Gallery;
