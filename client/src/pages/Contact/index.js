import React, { useState } from "react";
import { Form, FormGroup, Label, Input, Button, Col } from "reactstrap";
import { validateEmail } from "../../utils/helpers";
import './contact.css'

function Contact() {
  const [characterCount, setCharacterCount] = useState(0);
  const [formState, setFormState] = useState({
    name: "",
    company: "",
    email: "",
    message: "",
  });
  const [errorMessage, setErrorMessage] = useState(" ");
  const { name, company, email, message } = formState;

  function handleSubmit(e) {
    e.preventDefault();
    if (!errorMessage) {
      console.log(formState);
    }
  }

  function handleChange(e) {
    if (e.target.name === "email") {
      const isValid = validateEmail(e.target.value);
      console.log(isValid);
      if (!isValid) {
        setErrorMessage("Your email is invalid.");
      } else {
        setErrorMessage("");
      }
    } else {
      if (!e.target.value.length) {
        setErrorMessage(`${e.target.name} is required.`);
      } else {
        setErrorMessage("");
      }
    }
    if (!errorMessage) {
      setFormState({ ...formState, [e.target.name]: e.target.value });
    }
  }
    // if (event.target.value.length <=280) {
    //   setCharacterCount(event.target.value.length);
    // }
  

  return (
    <div className="pad"> 
      <h2>Contact</h2>
      <Form>
        {/* style={{ padding: "20px", margin: "auto" }}> */}
        {/* <div style={{ color: "darkslategrey", fontWeight: "bold", fontSize: "20px", paddingLeft: "20px" }}> </div>*/}

        <form id="contact-form" onSubmit={handleSubmit}>
          <FormGroup row style={{ fontWeight: "bold", fontSize: "20px" }}>
            <Label for="name" sm={2} size="lg">Name:</Label>
            <Col sm={10}>
            <Input style={{ width: "75%"}}
              type="text"
              name="name"
              id="nameInput"
              defaultValue={name}
              onBlur={handleChange}
              placeholder="Enter your name"
              bsSize="lg"
            />
            </Col>
          </FormGroup>
          <FormGroup row style={{ fontWeight: "bold", fontSize: "20px" }}>
            <Label for="company" sm={2} size="lg">Company:</Label>
            <Col sm={10}>
            <Input style={{ width: "75%"}}
              type="text"
              name="company"
              id="companyInput"
              defaultValue={company}
              onBlur={handleChange}
              placeholder="Company name, if applicable"
              bsSize="lg"
            />
            </Col>
          </FormGroup>
          <FormGroup row style={{ fontWeight: "bold", fontSize: "20px" }}>
            <Label for="email" sm={2} size="lg">Email Address:</Label>
            <Col sm={10}>
            <Input style={{ width: "75%"}}
              type="email"
              name="email"
              id="emailInput"
              defaultValue={email}
              onBlur={handleChange}
              placeholder= "Enter your preferred email"
              bsSize="lg"
              
            />
            </Col>
          </FormGroup>
          <div style={{}}>
          <FormGroup check>
            <Label check>
              <Input type="radio" name="radio1" /> Ask a Question
            </Label>
          </FormGroup>
          <FormGroup check>
            <Label check>
              <Input type="radio" name="radio2" /> Leave a comment
            </Label>
          </FormGroup>
          <FormGroup check>
            <Label check>
              <Input type="radio" name="radio3" /> Request a quote
            </Label>
          </FormGroup>
          <FormGroup check>
            <Label check>
              <Input type="radio" name="radio4" /> Provide a testimonial
            </Label>
          </FormGroup>
          </div>
          {/* <p className={`m-0 ${characterCount === 280 || error ? 'text-error' : ''}`}>
          Character Count: {characterCount}/280
          </p> */}
          <FormGroup row style={{ fontWeight: "bold", fontSize: "20px" }}>
            <Label for="exampleText" sm={2} size="lg">Message:</Label>
            <Col sm={10}>
            <Input style={{ width: "75%"}}
              type="textarea"
              name="text"
              rows="5"
              id="messageInput"
              defaultValue={message}
              onBlur={handleChange}
              bsSize="lg"
            />
            </Col>
          </FormGroup>
          {errorMessage && (
            <div>
              <p className="error-text">{errorMessage}</p>
            </div>
          )}
          <Button type="submit" style={{ margin: "auto" }}>
            Submit
          </Button>
        </form>
      </Form>
    </div>
  );
}

export default Contact;
