import React from 'react';
import './about.css'
import Example from '../../assets/images/portfolio/UW_SOHE_5.JPG'

function About() {
    return (
    <section className="pad ">
        <div className="about-section">
            <div className="about-img1">
                <img src={require(`../../assets/images/portfolio/UW_SOHE_5.JPG`).default} alt='Jessica Walther'/>
            </div>
            <div className=" box-over">
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
        <div className="about-section">
            <div className=" box-over2">
                <h2>About Jessica Walther</h2>
                <p>The owner, Jessica A. Walther, is a certified, professional lighting designer with
                22 years’ experience. Mrs. Walther offers strong project coordination skills and

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
                <img src={require(`../../assets/images/jess1.jpg`).default} alt='Jessica Walther'/>
            </div>
        </div>

    </section>
    )};
    
    export default About;