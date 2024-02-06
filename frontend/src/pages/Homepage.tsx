// rafce create fast component
import React, { useEffect, useState } from "react";
import { Button, Fade, Image, Modal, Ratio, Spinner } from "react-bootstrap";
import homeBg from "../assets/homeBg.jpg";
import Carousel from "react-bootstrap/Carousel";
import greenScreen from "../assets/green.png";
import Loginform from "../features/login/components/Loginform";
import Signupform from "../features/signup/Signupform";
const Homepage = () => {
  const [showSignIn, setShowSignIn] = useState(false);
  const [showSignUp, setShowSignUp] = useState(false);
  const handleCloseSignIn = () => setShowSignIn(false);
  const handleCloseSignUp = () => setShowSignUp(false);

  const handleShowSignIn = () => setShowSignIn(true);
  const handleShowSignUp = () => setShowSignUp(true);

  const [open, setOpen] = useState(false);

  useEffect(() => {
    setTimeout(() => setOpen(true),700) 
    
  },[])
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
             <Fade in={open}>
            <h1 className="text-white">WanderInn</h1></Fade>
            <h2 className="text-white">Begin your jorney</h2>
            <Button variant="info" onClick={handleShowSignIn}>เข้าสู่ระบบ</Button>{' '}
              <p onClick={handleShowSignUp}
                style={{
                  color:"skyblue",
                  marginTop: "15px",
                  textDecoration: "none",
                  cursor: "underline",
                  textDecorationLine: 'underline'
                  
                }}
              >
                ยังไม่มีบัญชี? สมัครสมาชิกที่นี่
              </p>

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
      <Modal show={showSignIn} onHide={handleCloseSignIn}>
      <Loginform/>

    </Modal>
    <Modal show={showSignUp} onHide={handleCloseSignUp}>
      <Signupform/>
      
    </Modal>
    </>
  );
};

export default Homepage;
