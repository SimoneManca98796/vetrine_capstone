import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
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
import { loginUser, logoutUser } from "../redux/actions/index";
import { useNavigate } from "react-router-dom";

const CustomNavbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [mostraDropdown, setMostraDropdown] = useState(false);
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  // Handler per il login (esempio con dati statici, sostituire con dati reali)
  const handleLogin = () => {
    //const credentials = { username: "user@example.com", password: "password" };
    //dispatch(loginUser(credentials));
    navigate("/FormLogin");
  };

  // Handler per il logout
  const handleLogout = () => {
    dispatch(logoutUser());
    navigate("/");
  };

  return (
    <Navbar
      expand="lg"
      className="shadow-sm fixed-top pb-0"
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
              <Link to="/" className="nav-link text-white text-center">
                <HouseDoorFill size={20} />
                <div>Home</div>
              </Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="/mercati" className="text-white text-center">
                <GraphUpArrow size={20} />
                <div>Bacheca</div>
              </Nav.Link>
            </Nav.Item>
            <Link to="/prodotti" className="text-decoration-none">
              <Nav.Item>
                <Nav.Link href="/prodotti" className="text-white text-center">
                  <Cash size={20} />
                  <div>Prodotti</div>
                </Nav.Link>
              </Nav.Item>
            </Link>
            <Nav.Item>
              <Nav.Link href="/notifiche" className="text-white text-center">
                <BellFill size={20} />
                <div>Notifiche</div>
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="/aziende" className="text-white text-center">
                <Grid3x3GapFill size={20} />
                <div>Aziende</div>
              </Nav.Link>
            </Nav.Item>
          </Nav>
          <Nav className="justify-content-end">
            {!isAuthenticated ? (
              <>
                <Nav.Link onClick={handleLogin} className="text-white">
                  Accedi
                </Nav.Link>
                <Nav.Link href="/FormIscrizione" className="text-white">
                  Registrati
                </Nav.Link>
              </>
            ) : (
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
                  <PersonCircle size={24} className="text-white" />
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item href="/profile">Profilo</Dropdown.Item>
                  <Dropdown.Divider />
                  <Dropdown.Item onClick={handleLogout}>Logout</Dropdown.Item>
                  <Dropdown.Item href="#settings">
                    Impostazioni e privacy
                  </Dropdown.Item>
                  <Dropdown.Item href="#help">Guida</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default CustomNavbar;
