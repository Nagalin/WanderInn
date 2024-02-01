// rafce create fast component
import React from "react";
import Navbar from "../components/Navbar";
import { Button, Image, Ratio, Spinner } from "react-bootstrap";
import homeBg from "../assets/homeBg.jpg";
import Carousel from "react-bootstrap/Carousel";
import { useState } from "react";

const Homepage = () => {
  return (
    <>
      <center>
        <div
          className="top-content"
          style={{
            backgroundImage: `url(${homeBg})`,
            backgroundSize: "cover",
            backgroundPosition: "center center",
            backgroundRepeat: "no-repeat",
            height: "100vh", // Ensure the container takes up the full height of the viewport
          }}
        >
          <div className="insideBg">
            <h1>WanderInn</h1>
            <h2>เริ่มต้นการท่องเที่ยวของคุณได้ที่นี่</h2>
            <Button variant="info">เข้าสู่ระบบ</Button>
            <a href="">
              <p
                style={{
                  marginTop: "20px",
                  textDecoration: "none",
                  cursor: "underline",
                }}
              >
                ยังไม่มีบัญชี? สมัครสมาชิกที่นี่
              </p>
            </a>
          </div>
        </div>

        <div className="mid-content">
          <h1 className="mb-7">พบกับโรงแรมมากมาย</h1>
          <Carousel data-bs-theme="dark">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="holder.js/800x400?text=First slide&bg=f5f5f5"
          alt="First slide"
        />
        <Carousel.Caption>
          <h5>First slide label</h5>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="holder.js/800x400?text=Second slide&bg=eee"
          alt="Second slide"
        />
        <Carousel.Caption>
          <h5>Second slide label</h5>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="holder.js/800x400?text=Third slide&bg=e5e5e5"
          alt="Third slide"
        />
        <Carousel.Caption>
          <h5>Third slide label</h5>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
        </div>

        <div className="bot-content">
          <h1 className="revealUp">im bot-content</h1>
        </div>
      </center>
    </>
  );
};

export default Homepage;
