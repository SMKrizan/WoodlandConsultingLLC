import React from 'react'
import image1 from '../../assets/images/portfolio/Colliers_1.JPG';



function Gallery() {
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
