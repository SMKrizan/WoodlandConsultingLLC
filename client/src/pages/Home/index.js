import React from 'react';
import { useQuery} from '@apollo/react-hooks';
import {GET_TESTIMONIALS} from '../../utils/queries';
import ContactForm from '../../components/ContactForm'
import './home.css'

function Home(props) {

    const { loading, data} = useQuery(GET_TESTIMONIALS);
    const testimonialData = data?.testimonials ;
    console.log(data?.testimonials)
    if (loading) {
        return <div>Loading...</div>;
    }
    if (!testimonialData) {
        console.log("no testimonials pulled....")
        return <h2>LOADING...</h2>;
    }

      let randomQuote = function(testimonialData){
         console.log("running randomQuote")
         const chosenQuote = testimonialData[Math.floor(Math.random()*testimonialData.length)]
        return chosenQuote
       }
    const quote = randomQuote(testimonialData)



    return (
        <section>
            <div className="feature-home-image">
                <div className="glow feature-box">

                    <h4><i>"{quote.tstMessage}"</i></h4>
                    <p>{quote.tstName} - {quote.tstCompany}</p>
                    <div className="flex-left">
                        <div>
                            <a
                                href={'# portfolio'}
                                onClick={() => props.handlePageChange('Portfolio')}
                            >
                                <button><h3>View Portfolio</h3></button>
                             </a>
                        </div>
                        <div>
                        <a
                                href={'# portfolio'}
                                onClick={() => props.handlePageChange('Contact')}
                            >
                                <button><h3>Contact</h3></button>
                             </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="pad-b80 about-home">
                <div >
                    <img src={require(`../../assets/images/portfolio/UW_SOHE_6-min.JPG`).default} alt='Jessica Walther'/>
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
                    <div className="maps-home pad flex1 flex-center">
                        Woodland Consulting's Founder has work located across the United States. Click to see a map showing where you can find her work nearest to you.
            </div>
            <div className="hover-glow flex-center  glow maps-img">
                    <a
                        href={'# portfolio'}
                        onClick={() => props.handlePageChange('Map')}>
                        <button><h3>View Map</h3></button>
                    </a>
            </div>
        </div >
    </div>
            <div className="feature-home-image">
                <div className="glow feature-box">
                 <ContactForm />
                 </div>
            </div>
    </section>
    )};
    
    export default Home;
