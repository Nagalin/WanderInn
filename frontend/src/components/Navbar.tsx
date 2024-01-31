import { Navbar as NavbarBs , Nav, Modal } from "react-bootstrap";
import Logo from "../assets/logo.png";
import ThIcon from "../assets/th.jpg";
import Usg from "../assets/user.png";
import { Button } from "react-bootstrap";
import { useState } from "react";
import Loginform from "../features/login/components/Loginform";
import Signupform from "../features/signup/Signupform";
import { Outlet } from "react-router-dom";

function Navbar() {
  const [showSignIn, setShowSignIn] = useState(false);
  const [showSignUp, setShowSignUp] = useState(false);
  const handleCloseSignIn = () => setShowSignIn(false);
  const handleCloseSignUp = () => setShowSignUp(false);

  const handleShowSignIn = () => setShowSignIn(true);
  const handleShowSignUp = () => setShowSignUp(true);
  return (
    <>
    <NavbarBs
      className="justify-content-between"
      bg="primary"
      data-bs-theme="dark"
    >
      <div className="d-flex align-items-center ms-4">
        <NavbarBs.Brand href="/Homepage">
          <img
            style={{ height: "60px", width: "60px", objectFit: "cover" }}
            alt="Logo"
            src={Logo}
            />
        </NavbarBs.Brand>
        <Nav >
          <Nav.Link href="#home">จองห้อง</Nav.Link>
          <Nav.Link href="#features">ติดตามการจอง</Nav.Link>
        </Nav>
      </div>

      <div>
        <h2>Please Sign-in Esus</h2>
      </div>

      <div className="d-flex align-items-center gap-3 me-4">
      <NavbarBs.Brand href="/Homepage">
          <img
            style={{ height: "40px", width: "40px", objectFit: "cover" }}
            alt="Logo"
            src={ThIcon}
            />
        </NavbarBs.Brand>
        <NavbarBs.Brand href="/Homepage">
          <img
            style={{ height: "40px", width: "40px", objectFit: "cover" }}
            alt="Logo"
            src={Usg}
            />
        </NavbarBs.Brand>
        <h2>Guest555</h2>
        <Nav.Link onClick={handleShowSignIn}><Button variant="light">Sign-in</Button></Nav.Link>
        <Nav.Link onClick={handleShowSignUp}><Button variant="light">Sign-up</Button></Nav.Link>
      </div>
    </NavbarBs>
    <Modal show={showSignIn} onHide={handleCloseSignIn}>
      <Loginform/>

    </Modal>
    <Modal show={showSignUp} onHide={handleCloseSignUp}>
      <Signupform/>
      
    </Modal>
    <Outlet/> 
    {/* children */}
    </>
  );
}

export default Navbar;
