import React from 'react';
import "./portfolio.css";
import Gallery from '../../components/Gallery';
import CategoryList from '../../components/CategoryList';


function Portfolio() {
    return (
    <section>
        <div className="feature-image">
            <h2>Portfolio</h2>
            <h4>See projects below</h4>
        </div>
        <div className="pad">
            <h3>
                View Projects: Click to see larger views
            </h3>
            <h5>
                View Projects: Click to see larger views
            </h5>
        </div>
        <Gallery />
        <div className=" darkplumbg project-category-bg">
            <div>
                <h3>
                    Full List of Projectsby Category
                </h3>
            </div>
            < CategoryList/>
        </div>
    </section>
    )};
    
    export default Portfolio;