// rafce create fast component
import React, { useState } from "react";
import Navbar from "../components/Navbar";
import "react-datepicker/dist/react-datepicker.css";
import {
  Button,
  Col,
  Container,
  FloatingLabel,
  Form,
  Row,
} from "react-bootstrap";
const Booking = () => {
  const DateStyle = {
    display: "block",
    height: "50px",
    width: "100%",
    backgroundColor: "#ffffff",
    backgroundOpacity: "0.07",
    borderRadius: "3px",
    padding: "0px",
    marginTop: "0px",
    marginBottom: "0px",
  };
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [outDate, setOutDate] = useState<Date | null>(null);

  return (
    <Container className="mb-4">
      <center>
        <h2>ค้นหาโรงแรม และ เริ่มจองห้อง</h2>
        <FloatingLabel
          controlId="floatingInput"
          label="ตำแหน่งห้องพักและโรงแรมที่ต้องการ"
          className="mb-3"
        >
          <Form.Control
            type="email"
            placeholder="ตำแหน่งห้องพักและโรงแรมที่ต้องการ"
          />
        </FloatingLabel>
      </center>
      <Row>
        <Col>
          <FloatingLabel
            controlId="floatingTextarea"
            label="กรุณาเลือกวัน Check-In"
            className="mb-3"
          >
            <Form.Control type="date" />
          </FloatingLabel>
        </Col>

        <Col>
          <FloatingLabel
            controlId="floatingTextarea"
            label="กรุณาเลือกวัน Check-Out"
            className="mb-3"
          >
            <Form.Control type="date" />
          </FloatingLabel>
        </Col>
      </Row>

      <Row>
        <Col>
          {" "}
          <FloatingLabel
            controlId="floatingInput"
            label="จำนวนผู้เข้าพัก"
            className="mt-3"
            style={{zIndex: "0" }}
          >
            <Form.Control
              type="email"
              placeholder="ตำแหน่งห้องพักและโรงแรมที่ต้องการ"
            />
          </FloatingLabel>
        </Col>
        <Col>
          {" "}
          <Button
            className="mt-3"
            style={{ width: "100%", height: "80%",fontSize:"140%"}}
            variant="primary"
          >
            ค้นหา
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default Booking;
