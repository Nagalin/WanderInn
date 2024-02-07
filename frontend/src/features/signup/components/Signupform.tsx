import React, { useContext, useState } from "react";
import {
  Form,
  Button,
  Col,
  Modal,
  Nav,
  Container,
  Row,
  Alert,
} from "react-bootstrap";
import useSignUp from "../hooks/useSignUp";
import { useModalContext } from "../../../contexts/ModalContext";

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
  marginBottom: "14px",
};

const Nameinput = {
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
  showSignUp: boolean;
};

export default function Signupform({ showSignUp }: LoginFormProps) {
  const {handleCloseSignUp} = useModalContext();
  const {
    username,
    password,
    lname,
    email,
    role,
    fname,
    phoneNum,
    confirmPassword,
    handleSignUp,
    err,
  } = useSignUp();
  return (
    <Modal show={showSignUp} onHide={handleCloseSignUp}>
      <Modal.Body style={containerStyle}>
        <Form onSubmit={handleSignUp}>
          <div className="d-flex align-items-center mb-5">
            <Form.Label className="h1 mb-0">Sign-Up</Form.Label>
          </div>
          <Form.Select
            aria-label="Default select example"
            defaultValue=""
            className="mb-3"
            ref={role}
            required
          >
            <option value="" disabled hidden>
              Select Role
            </option>
            <option value="member">Member</option>
            <option value="provider">Provider</option>
          </Form.Select>
          <Row>
            <Col>
              <Form.Group controlId="formUsername">
                <Form.Control
                  style={Nameinput}
                  type="text"
                  placeholder="First Name"
                  required
                  ref={fname}
                />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group controlId="formUsername">
                <Form.Control
                  style={Nameinput}
                  type="text"
                  placeholder="Last Name"
                  required
                  ref={lname}
                />
              </Form.Group>
            </Col>
          </Row>

          <Form.Group controlId="formUsername">
            <Form.Control
              style={inputStyle}
              type="tel"
              placeholder="Phone Number"
              required
              pattern="[0-9]{3}[0-9]{2}[0-9]{5}"
              ref={phoneNum}
            />
          </Form.Group>

          <Form.Group controlId="formUsername">
            <Form.Control
              style={inputStyle}
              type="text"
              placeholder="Username"
              required
              ref={username}
            />
          </Form.Group>

          <Form.Group>
            <Form.Control
              style={inputStyle}
              type="text"
              placeholder="Email"
              required
              ref={email}
            />
          </Form.Group>

          <Form.Group controlId="formPassword">
            <Form.Control
              style={inputStyle}
              type="password"
              placeholder="Password"
              required
              ref={password}
            />
          </Form.Group>

          <Form.Group controlId="formPassword">
            <Form.Control
              style={inputStyle}
              type="password"
              placeholder="Confirm Password"
              required
              ref={confirmPassword}
            />
          </Form.Group>

          {err && (
            <Alert variant="danger">
              <center>{err}</center>
            </Alert>
          )}

          <Form.Group>
            <Button variant="primary" type="submit" style={buttonStyle}>
              Sign-Up
            </Button>
          </Form.Group>
        </Form>
      </Modal.Body>
    </Modal>
  );
}
