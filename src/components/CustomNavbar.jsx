import React, { useState } from "react";
import { Container, Navbar, Nav, Dropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import {
  HouseDoorFill,
  GraphUpArrow,
  Cash,
  BellFill,
  Grid3x3GapFill,
  PersonCircle,
} from "react-bootstrap-icons";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "/Vetrine.png";

const CustomNavbar = () => {
  const [mostraDropdown, setMostraDropdown] = useState(false);

  return (
    <Navbar
      expand="lg"
      className="shadow-sm fixed-top"
      style={{ backgroundColor: "#0085B5" }}
    >
      <Container>
        <Navbar.Brand href="/">
          <img src={logo} width="68" height="68" alt="Agri App" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Item>
              <Link to="/" className="nav-link text-white">
                <HouseDoorFill size={20} />
                <div>Home</div>
              </Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="#bacheca" className="text-white">
                <GraphUpArrow size={20} />
                <div>Bacheca</div>
              </Nav.Link>
            </Nav.Item>
            <Link to="/prodotti" className="text-decoration-none">
              <Nav.Item>
                <Nav.Link href="#prodotti" className="text-white">
                  <Cash size={20} />
                  <div>Prodotti</div>
                </Nav.Link>
              </Nav.Item>
            </Link>
            <Nav.Item>
              <Nav.Link href="#notifiche" className="text-white">
                <BellFill size={20} />
                <div>Notifiche</div>
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="#aziende" className="text-white">
                <Grid3x3GapFill size={20} />
                <div>Aziende</div>
              </Nav.Link>
            </Nav.Item>
          </Nav>
          <Nav className="justify-content-end">
            <Dropdown align="end">
              <Dropdown.Toggle
                variant="transparent"
                style={{
                  border: "none",
                  background: "transparent",
                  cursor: "pointer",
                }}
                onClick={() => setMostraDropdown(!mostraDropdown)}
              >
                <PersonCircle size={24} />
              </Dropdown.Toggle>
              <Dropdown.Menu show={mostraDropdown}>
                <Dropdown.Item href="/profile">Profilo</Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item href="#settings">
                  Impostazioni e privacy
                </Dropdown.Item>
                <Dropdown.Item href="#help">Guida</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default CustomNavbar;
