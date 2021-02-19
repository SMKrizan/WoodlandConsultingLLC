import React from 'react';
import './home.css'

function Home() {
    return (
    <section>
            <div className="feature-home-image">
                <div className="glow feature-box">
                    <h4><i>"Jess's work was impecable and striking. I would reconend working with her to anyone."</i></h4>
                    <p>Ipsum Facto - UW Chairman</p>
                    <div className="flex-left">
                        <div className="padlr">
                            <button className=""><h3>View Works</h3></button>
                        </div>
                        <div className="padlr">
                            <button className="flex1"><h3>Contact</h3></button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="pad-b80 about-home">
                <div >
                    <img src={require(`../../assets/images/portfolio/UW_SOHE_5.JPG`).default} alt='Jessica Walther'/>
                </div>
                <div className="about-home-box glow3">
                    <h2>About Woodland Consulting LLC</h2>
                    <p>Woodland Consulting, LLC, established in August 2016, provides electrical
                    lighting design consulting services. Woodland implements comprehensive
                    lighting designs including—but not limited to—aesthetic and functional layout;
                    line and low voltage lighting control systems; fixture and lamp
                    recommendations as well as all respective schedules and specifications. To
                    coordinate designs, Woodland works closely with architects, interior designers,
                    owners, contractors, and engineers. Woodland’s priority is to provide energy
                    efficient designs and documentation in compliance with local, state, and federal
                    building and energy codes.</p>
                </div>
            </div>
    <div className="darkplumbg pad">
        <h2>Project Map</h2>
        <div className="flex-center">
            <div className="maps-home flex1 pad40lr flex-center ">
                Woodland Consulting's Founder has work located across the United States. Click to see a map showing where you can find her work nearest to you.  
            </div>
            <div className="hover-glow flex-center  glow maps-img">
                <button><h3>Contact</h3></button>
            </div>
        </div>
            Signup
        </div>
    </section>
    )};
    
    export default Home;