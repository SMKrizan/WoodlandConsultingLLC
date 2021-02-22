import React, {useState} from 'react';
import { useQuery} from '@apollo/react-hooks';

import ImageModal from '../ImageModal'
import image1 from '../../assets/images/portfolio/UW_SOHE_2-min.JPG';
import { GET_PROJECTS } from '../../utils/queries';



function Gallery() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [currentPhoto, setCurrentPhoto] = useState();
  


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


    const toggleModal = (project) => {
        setCurrentPhoto({ ...project});
        setIsModalOpen(!isModalOpen);
    };
    

    return (
        <div>
        {isModalOpen && <ImageModal onClose={toggleModal} currentPhoto={currentPhoto} />}
        <section className="flex-ceround padtb">
        {galleryImages.map(project => 

                <div            
                onClick={() => toggleModal(project)}
                key={project._Id} 
                >
                    <div className="project">
                        <div className="project-img" style={{  backgroundImage: `url(" ${project.image} ")`}}> 
                            <h3>{project.company}</h3>
                            <h4>{project.category.categoryName}</h4>
                        </div>
                    </div>
                </div>
            
          )}
          </section>
          </div>
    )
}

export default Gallery;
