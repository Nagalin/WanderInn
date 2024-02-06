import React, { useState } from "react";
import { Form, Button, Col, Modal, ModalHeader, Alert } from "react-bootstrap";
import useLogin from "../../hooks/useLogin";
const containerStyle = {
  backgroundColor: "#ffffff",
  backgroundOpacity: "0.13",
  borderRadius: "10px",
  backdropFilter: "blur(10px)",
  border: "2px solid #ffffff",
  borderOpacity: "0.1",
  boxShadow: "0 0 40px #61CFFF",
  boxShadowOpacity: "0.6",
  padding: "50px 35px",
};

const inputStyle = {
  display: "block",
  height: "50px",
  width: "100%",
  border: "2px solid #97E9FF",
  backgroundColor: "#ffffff",
  backgroundOpacity: "0.07",
  borderRadius: "3px",
  padding: "0 10px",
  marginTop: "8px",
  marginBottom: "8px",
};
const buttonStyle = {
  marginTop: "10px",
  width: "100%",
  padding: "15px 0",
  fontSize: "18px",
  fontWeight: "600",
  borderRadius: "5px",
};

// const errorStyle = {
//   width: "325px",
//   marginTop: "10px",
// };
type LoginFormProps = {
  handleShowSignUp: () => void;
  showSignIn: boolean;
  handleCloseSignIn: () => void;
};

export default function LoginForm({
  handleShowSignUp,
  showSignIn,
  handleCloseSignIn,
}: LoginFormProps) {
  //assign type for parameter
  const { username, password, err, handleLogin } = useLogin();
  return (
    <Modal show={showSignIn} onHide={handleCloseSignIn}>
      <Modal.Body style={containerStyle}>
        <Form onSubmit={handleLogin}>
          <div className="d-flex align-items-center mb-5">
            <Form.Label className="h1 mb-0">Sign-in</Form.Label>
          </div>
          <Form.Group controlId="formUsername">
            <Form.Label>Username</Form.Label>
            <Form.Control
              style={inputStyle}
              type="text"
              placeholder="Enter username"
              required
              ref={username}
            />
          </Form.Group>

          <Form.Group controlId="formPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              style={inputStyle}
              type="password"
              placeholder="Enter password"
              required
              ref={password}
            />
          </Form.Group>
          {err && (
            <Alert variant="danger">
              <center>{err}</center>
            </Alert>
          )}
          <Form.Group>
            <Button variant="primary" type="submit" style={buttonStyle}>
              Sign-in
            </Button>
            <center>
              <p
                onClick={() => {
                  handleCloseSignIn();
                  handleShowSignUp();
                }}
                style={{
                  marginTop: "20px",
                  textDecoration: "none",
                  cursor: "pointer",
                  color: "blue",
                }}
              >
                New User? Sign-up
              </p>
            </center>
          </Form.Group>
        </Form>
      </Modal.Body>
    </Modal>
  );
}
