import React, { useState } from 'react';
import { Form, FormGroup, Input, Button, Col, Label } from 'reactstrap';
import { useMutation } from '@apollo/react-hooks';
import { OWNER_LOGIN } from '../../utils/mutations';
import Auth from '../../utils/auth';
// import { validateEmail  } from '../../utils/helpers';

function LoginForm(props) {
  // const [characterCount, setCharacterCount] = useState(0);
  const [formState, setFormState] = useState({
  ownerEmail: "",
  password: ""
  })

  const[ownerLogin, { error }] = useMutation(OWNER_LOGIN);
  // const [errorMessage, setErrorMessage] = useState(" ");
  // const { ownerEmail, password } = formState;

  const handleFormSubmit = async event => {
  event.preventDefault();

  try {
    const mutationResponse = await ownerLogin({ variables: { ownerEmail: formState.ownerEmail, password: formState.password } })
    const token = mutationResponse.data.login.token;
    Auth.login(token);
  } catch (e) {
    console.log(e)
  }
  }
  function handleChange(e) {
      setFormState({ ...formState, [e.target.name]: e.target.value });
}

  return (
    <>
    <form id="contact-form" onSubmit={handleFormSubmit} style={{ padding: "20px"}}>
            <FormGroup row style={{ fontWeight: "bold", fontSize: "20px" }}>
            <Label for="email" sm={2} size="lg">Email Address:</Label>
            <Col sm={10}>
            <Input style={{ width: "90%"}}
                type="email"
                name="email"
                id="emailInput"
                // defaultValue={ownerEmail}
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
                // defaultValue={password}
                onBlur={handleChange}
                placeholder="Enter your password"
                bsSize="lg"
            />
            <div>
              {
                error ? <div>
                  <p>The provided credentials are incorrect.</p>
                  </div> : null
              }
            </div>
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

