import React from 'react'
import { Button, Col, FloatingLabel, Form, Row } from 'react-bootstrap'

const SearchBar = () => {
  return (
    <div>
      <center>
        <h2>Searching for room Below</h2>
        <FloatingLabel
          controlId="floatingInput"
          label="Location for your hotels"
          className="mb-3"
        >
          <Form.Control
            type="email"
            placeholder="Location for your hotels"
          />
        </FloatingLabel>
      </center>
      <Row>
        <Col>
          <FloatingLabel
            controlId="floatingTextarea"
            label="Check-In Date"
            className="mb-3"
          >
            <Form.Control type="date" />
          </FloatingLabel>
        </Col>

        <Col>
          <FloatingLabel
            controlId="floatingTextarea"
            label="Check-Out Date"
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
            label="Number of guests"
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
            Find your Hotels
          </Button>
        </Col>
      </Row>
    </div>
  )
}

export default SearchBar
