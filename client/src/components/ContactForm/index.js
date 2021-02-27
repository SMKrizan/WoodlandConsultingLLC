import React, { useState, useEffect } from "react";
import { useMutation } from "@apollo/react-hooks";
import { FormGroup, Label, Input, Button, Col } from "reactstrap";
import { validateEmail } from "../../utils/helpers";
import { ADD_MESSAGE } from "../../utils/mutations";
import { GET_MESSAGES } from "../../utils/queries";
import { useStoreContext } from "../../utils/GlobalState";
import { idbPromise } from "../../utils/helpers";
import { SUBMIT_MESSAGE } from "../../utils/actions";

const ContactForm = (props) => {
    const [option, selectedOption] = useState();
    const [state, dispatch] = useStoreContext();

    const addToAdmin = (message) => {
        dispatch({
            type: SUBMIT_MESSAGE,
            messages: { ...message}
        });
        console.log("in addToAdmin")
        idbPromise('messages', 'put', {...message})
    }
//   useEffect(() => {
//     async function submitMessage() {
//       const message = await idbPromise('messages', 'get');
//       dispatch({ type: SUBMIT_MESSAGE, messages: [...message] });
//     };
  
//     if (!state.messages.length) {
//       submitMessage();
//     }
//   }, [state.messages.length, dispatch]);

  const [formState, setFormState] = useState({
    userName: "",
    userEmail: "",
    userCompany: "",
    userMessage: "",
  });

  const [addMessage, { error }] = useMutation(ADD_MESSAGE, {
    update(cache, { data: { addMessage } }) {
      console.log(addMessage);
      try {
        const { messages } = cache.readQuery({ query: GET_MESSAGES });
        cache.writeQuery({
          query: GET_MESSAGES,
          data: { messages: [addMessage, ...messages] },
        });
        console.log(messages);
      } catch (e) {
        console.log(e);
      }
    },
  });

  const [errorMessage, setErrorMessage] = useState("");

  const setRadio = (event) => {
    const useRadio = selectedOption({ radio: event.target.value });
    setFormState({ ...formState, purpose: event.target.value });
    console.log(event.target.value, useRadio);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(formState);
    try {
      // adds messages to database
      await addMessage({
        variables: {
          userName: formState.userName,
          userCompany: formState.userCompany,
          userEmail: formState.userEmail,
          userMessage: formState.userMessage,
          purpose: formState.purpose,
        },
      });
      return alert("Thanks for the message."), window.location.assign("/");
    } catch (e) {
      console.error(e);
    }
  };

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
    console.log(e.target.value, formState);
  }

  return (
    <div className="pad">
      <h2>Contact</h2>
      <p>{error && <span className="ml-2">Something went wrong...</span>}</p>

      <form id="contact-form" onSubmit={handleSubmit}>
        <FormGroup row style={{ fontWeight: "bold", fontSize: "20px" }}>
          <Label for="userName" sm={2} size="lg">
            Name:
          </Label>
          <Col sm={10}>
            <Input
              style={{ width: "90%" }}
              type="text"
              name="userName"
              id="nameInput"
              defaultValue={formState.userName}
              onBlur={handleChange}
              placeholder="Enter your name"
              bsSize="lg"
            />
          </Col>
        </FormGroup>
        <FormGroup row style={{ fontWeight: "bold", fontSize: "20px" }}>
          <Label for="userCompany" sm={2} size="lg">
            Company:
          </Label>
          <Col sm={10}>
            <Input
              style={{ width: "90%" }}
              type="text"
              name="userCompany"
              id="companyInput"
              defaultValue={formState.userCompany}
              onBlur={handleChange}
              placeholder="Company name, if applicable"
              bsSize="lg"
            />
          </Col>
        </FormGroup>
        <FormGroup row style={{ fontWeight: "bold", fontSize: "20px" }}>
          <Label for="userEmail" sm={2} size="lg">
            Email Address:
          </Label>
          <Col sm={10}>
            <Input
              style={{ width: "90%" }}
              type="email"
              name="userEmail"
              id="emailInput"
              defaultValue={formState.userEmail}
              onBlur={handleChange}
              placeholder="Enter your preferred email"
              bsSize="lg"
            />
          </Col>
        </FormGroup>

        <div onChange={setRadio}>
          <FormGroup check>
            <Label check>
              <Input
                type="radio"
                name="radio"
                label="Ask a question"
                value="Ask a question"
              />{" "}
              Ask a Question
            </Label>
          </FormGroup>
          <FormGroup check>
            <Label check>
              <Input
                type="radio"
                name="radio"
                value="Leave a comment"
              />
              Leave a comment
            </Label>
          </FormGroup>
          <FormGroup check>
            <Label check>
              <Input
                type="radio"
                name="radio"
                value="Request a quote"
              />{" "}
              Request a quote
            </Label>
          </FormGroup>
          <FormGroup check>
            <Label check>
              <Input
                type="radio"
                name="radio"
                value="Provide a testimonial"
              />{" "}
              Provide a testimonial
            </Label>
          </FormGroup>
        </div>
        <FormGroup row style={{ fontWeight: "bold", fontSize: "20px" }}>
          <Label for="userMessage" sm={2} size="lg">
            Message:
          </Label>
          <Col sm={10}>
            <Input
              style={{ width: "90%" }}
              type="textarea"
              name="userMessage"
              rows="5"
              id="messageInput"
              defaultValue={formState.userMessage}
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
        <Button type="submit" style={{ margin: "auto" }}
        // onClick = {() => addToAdmin} 
        onClick={addToAdmin}
        >
          Submit
        </Button>
      </form>
    </div>
  );
};

export default ContactForm;
