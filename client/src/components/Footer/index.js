import "./footer.css";
import React, { useState } from "react";
import ReactDom from "react-dom";
import linkedin from "../../assets/images/linkedin.png";
import Auth from '../../utils/auth';
import { validateEmail } from "../../utils/helpers";
import { Link } from 'react-router-dom';
import LoginForm from '../LoginForm';
import { Card, Modal, Button, Tab, Nav } from 'react-bootstrap';


function Footer() {

const [showModal, setShowModal] = useState(false);

  return (
    <footer>
        {Auth.loggedIn() ? (
            <>
            <Button onClick={Auth.logout}>Logout</Button>
            </>
        ) : (
            <Button onClick={() => setShowModal(true)}>Admin Login</Button>
        )}
        <Card>
        <Modal style={{margin: "150px", padding: "30px", border: "solid"}}
        size='lg'
        show={showModal}
        onHide={() => setShowModal(false)}
        backdrop="static"
        keyboard={false}
        aria-labelledby='signup-modal'>


          <Modal.Header style={{fontWeight: "bold", fontSize: "25px", padding: "20px"}} closeButton>
            <Modal.Title  
            id='signup-modal'>Admin login </Modal.Title>
            
          </Modal.Header>
          <Modal.Body>
              <Tab.Pane eventKey='login'>
                <LoginForm handleModalClose={() => setShowModal(false)} />
              </Tab.Pane>
          </Modal.Body>
        </Modal>
        </Card>
      <a
        href="https://www.linkedin.com/in/catherine-sibley-93677926/"
        target="_blank"
        rel="noreferrer"
      >
        <img alt="linkedin link" src={linkedin} />
      </a>

      <a> Woodland Consulting LLC</a>
    </footer>
  );
}

export default Footer;
