// rafce create fast component
import React from "react";
import { Button, Image, Ratio, Spinner } from "react-bootstrap";
import homeBg from "../assets/homeBg.jpg";
import Carousel from "react-bootstrap/Carousel";
import greenScreen from "../assets/green.png";

const Homepage = () => {
  return (
    <>
      <center>
        <div
          className="bg-image d-flex justify-content-center align-items-center"
          style={{
            backgroundImage: `url(${homeBg})`,
            backgroundSize: "cover",
            backgroundPosition: "center center",
            backgroundRepeat: "no-repeat",
            height: "100vh", // Ensure the container takes up the full height of the viewport
          }}
        >
          <div className="insideBg">
            <h1 className="text-white">WanderInn</h1>
            <h2 className="text-white">เริ่มต้นการท่องเที่ยวของคุณได้ที่นี่</h2>
            <Button variant="info">เข้าสู่ระบบ</Button>{' '}
            <a href="">
              <p
                style={{
                  marginTop: "15px",
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
                className="d-block w-50"
                src={greenScreen}
                alt="First slide"
              />
              <Carousel.Caption>
                <h5>First slide label</h5>
                <p>
                  Nulla vitae elit libero, a pharetra augue mollis interdum.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-50"
                src={greenScreen}
                alt="First slide"
              />
              <Carousel.Caption>
                <h5>Second slide label</h5>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-50"
                src={greenScreen}
                alt="First slide"
              />
              <Carousel.Caption>
                <h5>Third slide label</h5>
                <p>
                  Praesent commodo cursus magna, vel scelerisque nisl
                  consectetur.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>

        <div className="container mt-3">
          <div className="row">
            <div className="col-md">
              <div
                className="bg-image card shadow-1-strong"
                style={{ backgroundImage: `url(${greenScreen})` }}
              >
                <div className="card-body text-white">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Dolorum eligendi doloribus eius sint qui ullam ducimus sunt
                    in laborum quae labore, autem, quos incidunt tenetur, ex et
                    repellendus error dolore.
                  </p>
                  <a
                    href="#!"
                    className="btn btn-outline-light"
                    data-mdb-ripple-init
                  >
                    ดูเพิ่มเติม
                  </a>
                </div>
              </div>
              
            </div>
            <div className="col-md">
            <div
                className="bg-image card shadow-1-strong"
                style={{ backgroundImage: `url(${greenScreen})` }}
              >
                <div className="card-body text-white">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Dolorum eligendi doloribus eius sint qui ullam ducimus sunt
                    in laborum quae labore, autem, quos incidunt tenetur, ex et
                    repellendus error dolore.
                  </p>
                  <a
                    href="#!"
                    className="btn btn-outline-light"
                    data-mdb-ripple-init
                  >
                    ดูเพิ่มเติม
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md">
            <div
                className="bg-image card shadow-1-strong"
                style={{ backgroundImage: `url(${greenScreen})` }}
              >
                <div className="card-body text-white">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Dolorum eligendi doloribus eius sint qui ullam ducimus sunt
                    in laborum quae labore, autem, quos incidunt tenetur, ex et
                    repellendus error dolore.
                  </p>
                  <a
                    href="#!"
                    className="btn btn-outline-light"
                    data-mdb-ripple-init
                  >
                    ดูเพิ่มเติม
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </center>
    </>
  );
};

export default Homepage;
