import React from 'react';
import "./portfolio.css";
import Gallery from '../../components/Gallery';
import CategoryList from '../../components/CategoryList';
import {useSpring, animated} from 'react-spring'


function Portfolio() {
    const propsMove = useSpring(
        {opacity: 1, 
        from: {opacity: 0},
        config: { duration: 2000 }});
    const propsMove2 = useSpring(
        {opacity: 1, 
        from: {scale:10,transform: 'scale(0.5)'},
        to: { scale: 150, transform: 'scale(1)', freq: '0.0, 0.0' },
        config: { duration: 2000 }});
        
    return (
        <section>

        <div className="feature-image">
        <animated.div style={propsMove}>
            <h2>"Dark is not the opposite of light, it's the absence of light."</h2>
            <h4> - Adam Yauch</h4>
            </animated.div>
        </div>

        <div className="darkplumbg pad">
            <h3>
                View Projects: Click to see larger views
            </h3>
            <h5>
                View Projects: Click to see larger views
            </h5>
        </div>
        <animated.div style={propsMove2}>
        <Gallery />
        </animated.div>
        <div className=" darkplumbg project-category-bg">
            <div>
                <h3>
                    List of Projects by Category
                </h3>
            </div>
            < CategoryList/>
        </div>
    </section>
    )};
    
    export default Portfolio;