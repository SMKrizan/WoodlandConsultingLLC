// import React, { useState } from "react";
import React from "react";
// import { Link } from "react-router-dom";
import { useAuth0 } from '@auth0/auth0-react';
// import Auth from "../../utils/auth";
import Login from "../../components/Login";
import Logout from "../../components/Logout";
import AdminPage from "../AdminPage";
// import { Card, Modal, Button, Tab } from "react-bootstrap";

function AdminAccess() {
  // const [showModal, setShowModal] = useState(false);
  const { isLoading } = useAuth0();

  if (isLoading) return <div>Loading..</div>

  return (
    <>
      {/* <Link to="/">
        ← Go to Homepage
      </Link> */}

      <Login />
      <Logout />
      <AdminPage />
    </>
  );
};
export default AdminAccess;

/* <div className="flex-ceround">
        <div>
          {Auth.loggedIn() ? (
            <>
              <Logout>
                <Button onClick={Auth.logout}>Logout</Button>
              </Logout>
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
                  <Login handleModalClose={() => setShowModal(false)} />
                </Tab.Pane>
              </Modal.Body>
            </Modal>
          </Card>
        </div>
      </div> */