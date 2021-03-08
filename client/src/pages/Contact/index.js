import ContactForm from '../../components/ContactForm'
import './contact.css'
import {useSpring, animated} from 'react-spring'

function Contact() {
  const propsMove = useSpring(
    {opacity: 1, 
    from: {opacity: 0},
    config: { duration: 1000 }});

  return (
    <section>
      <animated.div style={propsMove}>
        <div className="pad">
            <ContactForm />
        </div>
      </animated.div>
    </section>
  )
};

export default Contact;
