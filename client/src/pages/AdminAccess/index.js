import React, { useState } from "react";
import { Link } from "react-router-dom";

import Auth from "../../utils/auth";
import LoginForm from "../../components/LoginForm";
import { Card, Modal, Button, Tab } from "react-bootstrap";

function AdminAccess() {
  const [showModal, setShowModal] = useState(false);

  return (
    <section>
      <Link to="/">
        ← Go to Homepage
      </Link>

      <div className="flex-ceround">
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
              className="modal-admin-login"
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
                  <LoginForm handleModalClose={() => setShowModal(false)} />
                </Tab.Pane>
              </Modal.Body>
            </Modal>
          </Card>
        </div>
      </div>
    </section>

  );
};
export default AdminAccess;