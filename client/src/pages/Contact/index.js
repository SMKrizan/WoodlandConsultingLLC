// import React, { useState } from "react";
// import { Form, FormGroup, Label, Input, Button, Col } from "reactstrap";
// import { validateEmail } from "../../utils/helpers";
import ContactForm from '../../components/ContactForm'
import './contact.css'

function Contact() {

  return (
    <section>
        <div className="pad">
            <ContactForm />
        </div>
    </section>
  )
};

export default Contact;
