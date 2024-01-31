import { Navbar as NavbarBs , Nav, Modal } from "react-bootstrap";
import Logo from "../assets/logo.png";
import ThIcon from "../assets/th.jpg";
import Usg from "../assets/user.png";
import { Button } from "react-bootstrap";
import { useState } from "react";
import Loginform from "../features/login/components/Loginform";

function Navbar() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
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
        <Nav.Link onClick={handleShow}><Button variant="light">Sign-in</Button></Nav.Link>
        <Nav.Link href="#home"><Button variant="light">Sign-up</Button></Nav.Link>
      </div>
    </NavbarBs>
    <Modal show={show} onHide={handleClose}>
      <Loginform/>

    </Modal>
    </>
  );
}

export default Navbar;
