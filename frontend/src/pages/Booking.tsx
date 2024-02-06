// rafce create fast component
import React, { useState } from "react";
import Navbar from "../components/Navbar";
import { Container } from "react-bootstrap";
import SearchBar from "../features/booking/components/SearchBar";
import SearchResult from "../features/booking/components/SearchResult";
import Carousel from 'react-bootstrap/Carousel';
import greenScreen from '../assets/green.png'
const Booking = () => {
  return (
    <Container>
      <SearchBar/>
      <div className="mt-3">
      <center>
    <Carousel fade>
      <Carousel.Item>
      <img
                style={{width:"1300px",height:"320px"}}
                src={greenScreen}
                alt="First slide"
              />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img
                style={{width:"1300px",height:"350px"}}
                src={greenScreen}
                alt="First slide"
              />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img
                style={{width:"1300px",height:"350px"}}
                src={greenScreen}
                alt="First slide"
              />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </center>
    </div>
    </Container>
  );
};

export default Booking;
