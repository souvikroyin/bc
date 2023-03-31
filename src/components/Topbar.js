import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";
import Offcanvas from "react-bootstrap/Offcanvas";

const Topbar = () => {
  const navigate = useNavigate();

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleClick = () => {
    console.log("wellcome to sign in page");
    navigate("/Login");
  };

  return (
    <>
      <Navbar
        style={{ zIndex: "100" }}
        collapseOnSelect
        expand="lg"
        bg="dark"
        variant="dark"
      >
        <Container>
          <Button variant="primary" className="menu" onClick={handleShow}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              fill="currentColor"
              class="bi bi-list"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
              />
            </svg>
          </Button>

          <Offcanvas show={show} onHide={handleClose}>
            <Offcanvas.Header closeButton>
              <Offcanvas.Title>VHO</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <div class="sidebar">
                <a className="active" href="/">
                  Home
                </a>
                <a href="/men">Men</a>

                <a className="default" href="/women">
                  Women
                </a>
                <a href="/kids">Kids</a>
                <a href="/homefurnishing">Home Furnishing</a>
                <a href="/kitchendinings">Kitchen & Dinings</a>
                <a href="/giftpacks">Gift Packs</a>
                <a href="/incensesticks">Incense Sticks</a>
              </div>
            </Offcanvas.Body>
          </Offcanvas>
          <img
            src="https://vhoindia.com/assets/images/logo/VHOlogo.jpg"
            alt="Image"
            className="img-fluid"
          />
          {/* <Navbar.Brand href="#home">VHO</Navbar.Brand> */}
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              {/* <Nav.Link href="#features">Features</Nav.Link> */}
            </Nav>
            <Nav className="button">
              <Button variant="info" onClick={handleClick}>
                Sign In
              </Button>{" "}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Topbar;
