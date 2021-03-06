import React from 'react';
import './about.css'
import {useSpring, animated} from 'react-spring'

function About() {
        const propsMove2 = useSpring(
            {opacity: 1, 
            from: {scale:10,transform: 'scale(0.5)'},
            to: { scale: 150, transform: 'scale(1)', freq: '0.0, 0.0' },
            config: { duration: 1000 }});    
    return (
        <section>
            <div className="about-section bg-about pad ">
                <div className="box-over2 glow3">
                    <h2>About Jessica Walther</h2>
                    <p>Jessica A. Walther, principal and founder, is a certified, professional lighting designer with
                    22 years’ experience. Ms. Walther offers strong project coordination skills and

                    has served as Project Manager and Construction Administrator on many large-
                    scale lighting projects. Her skill set includes performing photometric analysis,

                    producing technical documents, providing electrical circuiting recommendations
                    and record drawings.
                    Jessica’s project experience includes interior and exterior lighting design for
                    Industrial, Commercial and Office buildings, Educational (K-12 and higher
                    education), Healthcare, Libraries, Religious, Financial, Retail, Assisted Living /
                    Nursing Home, Hospice Care, Historical Renovation, Lighting Retrofit and
                Airport projects throughout Wisconsin and the United States.</p>
                </div>
                <div className="about-img2">
                    <animated.div style={propsMove2}>
                        <img src={require(`../../assets/images/jess1sq.jpg`).default} alt='Jessica Walther' />
                    </animated.div>
                </div>
            </div>

            <div className="pad margin-b80 about-section">
                <div className="about-img1">
                    <animated.div style={propsMove2}>
                        <img src={require(`../../assets/images/portfolio/UW_SOHE_4-min.JPG`).default} alt='Jessica Walther' />
                    </animated.div>
                </div>
                <div className="box-over glow3 margin-b80">
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
        </section>
    )
};

export default About;