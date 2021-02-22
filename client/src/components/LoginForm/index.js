import React, { useState, useEffect } from 'react';
import { Form, FormGroup, Input, Button, Col, Label } from 'reactstrap';
// import { useMutation } from '@apollo/react-hooks';
// import { LOGIN_USER} from '../utils/mutations';
import Auth from '../../utils/auth';
import { validateEmail  } from '../../utils/helpers';

const LoginForm = () => {
  const [characterCount, setCharacterCount] = useState(0);
  const [formState, setFormState] = useState({
  email: "",
  password: ""
  });
  const [errorMessage, setErrorMessage] = useState(" ");
  const { email, password } = formState;

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
    <>
    <form id="contact-form" onSubmit={handleSubmit} style={{ padding: "20px"}}>
            <FormGroup row style={{ fontWeight: "bold", fontSize: "20px" }}>
            <Label for="email" sm={2} size="lg">Email Address:</Label>
            <Col sm={10}>
            <Input style={{ width: "90%"}}
                type="email"
                name="email"
                id="emailInput"
                defaultValue={email}
                onBlur={handleChange}
                placeholder= "Enter your email"
                bsSize="lg" 
            />
            </Col>
            </FormGroup>
            <FormGroup row style={{ fontWeight: "bold", fontSize: "20px" }}>
            <Label for="password" sm={2} size="lg">Password:</Label>
            <Col sm={10}>
            <Input style={{ width: "90%"}}
                type="text"
                name="password"
                id="passwordInput"
                defaultValue={password}
                onBlur={handleChange}
                placeholder="Enter your password"
                bsSize="lg"
            />
            </Col>
            </FormGroup>
            <Button type="submit" style={{ margin: "auto" }}>
            Submit
            </Button>
            </form>
    </>
  );
};

export default LoginForm;

