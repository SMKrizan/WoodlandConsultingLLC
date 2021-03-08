import React, { useState } from 'react';
import { FormGroup, Input, Button, Col, Label } from 'reactstrap';
import { useMutation } from '@apollo/react-hooks';
import { OWNER_LOGIN } from '../../utils/mutations';
import Auth from '../../utils/auth';

function LoginForm(props) {
  const [formState, setFormState] = useState({
    ownerEmail: "",
    password: ""
  })

  const [login, { error }] = useMutation(OWNER_LOGIN);

  const handleFormSubmit = async event => {
    event.preventDefault();

    try {
      const mutationResponse = await login({ variables: { ownerEmail: formState.ownerEmail, password: formState.password } })
      const token = mutationResponse.data.login.token;
      Auth.login(token);
    } catch (e) {
      console.log(e)
    }
  }
  function handleChange(e) {
    hidePasswords();
    setFormState({ ...formState, [e.target.name]: e.target.value });
  }
  function hidePasswords() {
    var input = document.getElementById('passwordInput');
    for (var i = 0; i < input.length; ++i)
      if (input[i].type === 'password') input[i].value = '*****';
  }
  function myFunction() {
    var x = document.getElementById("passwordInput");
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
  }

  return (

    <form id="contact-form" onSubmit={handleFormSubmit}>
      <FormGroup row style={{ fontWeight: "bold", fontSize: "20px" }}>
        <Label for="ownerEmail" sm={2} size="lg">Email Address:</Label>
        <Col sm={10}>
          <Input style={{ width: "90%" }}
            type="email"
            name="ownerEmail"
            id="emailInput"
            defaultValue={formState.ownerEmail}
            onBlur={handleChange}
            placeholder="Enter your email"
            bsSize="lg"
          />
        </Col>
      </FormGroup>
      <FormGroup row style={{ fontWeight: "bold", fontSize: "20px" }}>
        <Label for="password" sm={2} size="lg">Password:</Label>
        <Col sm={10}>
          <Input style={{ width: "90%" }}
            type="password"
            name="password"
            id="passwordInput"
            defaultValue={formState.password}
            onBlur={handleChange}
            placeholder="********"
            bsSize="lg"
          />
          <FormGroup>
            <Input type="checkbox" onClick={myFunction}></Input>
            <Label for="showPassword">   Show Password </Label>
          </FormGroup>
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

  );
};

export default LoginForm;

