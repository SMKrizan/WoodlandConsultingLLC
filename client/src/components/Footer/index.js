import "./footer.css";
import React, { useState } from "react";
import { useQuery} from '@apollo/react-hooks';

// import ReactDom from "react-dom";
import linkedin from "../../assets/images/linkedin.png";
import facebook from "../../assets/images/facebook3.png";

import Auth from "../../utils/auth";
// import { validateEmail } from "../../utils/helpers";
// import { Link } from 'react-router-dom';
import LoginForm from "../LoginForm";
import { Card, Modal, Button, Tab } from "react-bootstrap";
import { GET_OWNER } from '../../utils/queries';


function Footer(props) {
  const [showModal, setShowModal] = useState(false);

      //get projects 
      const { loading, data} = useQuery(GET_OWNER);
      const ownerData = data?.owner || [];
      console.log("ownerdata", ownerData);
  
  
      if (loading) {
          return <div>Loading...</div>;
      }
      if (!ownerData) {
          console.log("no testimonials pulled....")
          return <h2>No Projects Currently Available</h2>;
        }

  return (
    <footer>
      <div className="w100">
        <div>
          {Auth.loggedIn() ? (
            <>
              <Button onClick={Auth.logout}>Logout</Button>
            </>
          ) : (
              <Button onClick={() => setShowModal(true)}>Admin Login</Button>
            )}
          <Card>
            <Modal
              style={{ margin: "150px", padding: "30px", border: "solid" }}
              size="lg"
              show={showModal}
              onHide={() => setShowModal(false)}
              backdrop="static"
              keyboard={false}
              aria-labelledby="signup-modal"
            >
              <Modal.Header
                style={{ fontWeight: "bold", fontSize: "25px", padding: "20px" }}
                closeButton
              >
                <Modal.Title id="signup-modal">Admin login </Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <Tab.Pane eventKey="login">
                  <LoginForm handleModalClose={() => setShowModal(false)} handlePageChange={props.handlePageChange} />
                </Tab.Pane>
              </Modal.Body>
            </Modal>
          </Card>
        </div>
          <div>
              <p>
                Woodland Consulting LLC
              </p>
          </div>
          <a
            href="https://www.facebook.com/woodlandconsultingllc/"
            target="_blank"
            rel="noreferrer"
          >
              <img alt="facebook link" src={facebook} />
          </a>
          <a
            href="https://www.linkedin.com/company/woodland-consulting-llc/about/"
            target="_blank"
            rel="noreferrer"
          >
              <img alt="linkedin link" src={linkedin} />
          </a>
      </div>
      <div className="w100">
                <a className="padlr">{ownerData.ownerName}</a>
                <a className="padlr">{ownerData.ownerEmail}</a>
                <a className="padlr">{ownerData.address}</a>
      </div>
    </footer>
  );
}

export default Footer;
