import React, { useState } from "react";
import { Form, FormGroup, Label, Input } from 'reactstrap';
import { validateEmail } from "../../utils/helpers";

function Contact() {
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

  return (
    <div>
      <h2>Contact</h2>
      <Form>
      {/* style={{ padding: "20px", margin: "auto" }}> */}
                {/* <div style={{ color: "darkslategrey", fontWeight: "bold", fontSize: "20px", paddingLeft: "20px" }}> </div>*/}
                
        <form id="contact-form" onSubmit={handleSubmit}>
          <FormGroup style={{ fontWeight: "bold", fontSize: "20px" }}>
            <Label for="name">Name:</Label>
            <Input
              type="text"
              name="name"
              defaultValue={name}
              onBlur={handleChange}
            />
          </FormGroup>
          <FormGroup style={{ fontWeight: "bold", fontSize: "20px" }}>
            <Label for="company">Company:</Label>
            <Input
              type="text"
              name="name"
              defaultValue={company}
              onBlur={handleChange}
            />
          </FormGroup>
          <FormGroup style={{ fontWeight: "bold", fontSize: "20px" }}>
            <Label for="email">Email Address:</Label>
            <Input
              type="email"
              name="email"
              defaultValue={email}
              onBlur={handleChange}
            />
          </FormGroup>
          <FormGroup style={{ fontWeight: "bold", fontSize: "20px" }}>
            <Label for="exampleText">Message:</Label>
            
            <Input
              type="textarea"
              name="text"
              rows="5"
              defaultValue={message}
              onBlur={handleChange}
            />
          </FormGroup>
          {errorMessage && (
            <div>
              <p className="error-text">{errorMessage}</p>
            </div>
          )}
          <button type="submit" style={{ margin: "auto" }}>
            Submit
          </button>
        </form>
      </Form>
    </div>
  );
}

export default Contact;
