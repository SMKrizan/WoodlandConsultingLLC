import React from 'react';
import { useQuery} from '@apollo/react-hooks';


import image1 from '../../assets/images/portfolio/UW_SOHE_2-min.JPG';
import { GET_PROJECTS } from '../../utils/queries';



function Gallery() {
    const { loading, data} = useQuery(GET_PROJECTS);
    const projectData = data?.projects ;

    if (loading) {
      return <div>Loading...</div>;
    }
    if (!projectData) {
        console.log("no testimonials pulled....")
        return <h2>LOADING...</h2>;
      }

      const [galleryImages] = [projectData.filter((project) => project.image != '')];
      console.log(galleryImages)
    return (
        <section>
        {galleryImages.map(project => 
            <div key={project._Id}>
                <div className="gallery pad">
                    <div className="project">
                        {/* <div className="project-img" style={{  backgroundImage: "url(" + {project.image} + ")"}}> */}
                            <h3>{project.projectName}</h3>
                            <h4>{project.category.categoryName}</h4>
                        {/* </div> */}
                    </div>
                </div>
            </div>
            
          )}
          </section>
    )
}

export default Gallery;
