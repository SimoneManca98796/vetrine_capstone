import React, { useState, useEffect } from "react";
import { useSelector, useDispatch, shallowEqual } from "react-redux";
import {
  Container,
  Navbar,
  Nav,
  Dropdown,
  Image,
  Button,
} from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import {
  HouseDoorFill,
  GraphUpArrow,
  Cash,
  BellFill,
  Grid3x3GapFill,
  PersonCircle,
} from "react-bootstrap-icons";
import NotificationIcon from "./NotificationIcon";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "/Vetrine.png";
import { loginUser, logoutUser } from "../redux/actions/index";
import { useNavigate } from "react-router-dom";
import "../CustomNavbar.css";

const CustomNavbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const [mostraDropdown, setMostraDropdown] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const avatarUrl = useSelector((state) => state.auth.avatarUrl, shallowEqual);

  useEffect(() => {
    console.log("L'URL dell'avatar è cambiato:", avatarUrl);
  }, [avatarUrl]);

  const navbarColors = {
    "/": "#0085B5",
  };

  const navbarColor = navbarColors[location.pathname] || "#0085B5";

  const handleLogin = () => {
    navigate("/FormLogin");
  };

  const handleLogout = () => {
    dispatch(logoutUser());
    localStorage.removeItem("avatarUrl");
    navigate("/");
  };

  const handleToggleDropdown = () => {
    setMostraDropdown(!mostraDropdown);
    console.log("Dropdown state after click:", !mostraDropdown);
  };

  const getIconColor = (path) => {
    return location.pathname === path ? "rgba(255, 255, 255, 0.7)" : "white";
  };

  const closeNavbar = () => setExpanded(false);

  return (
    <Navbar
      expand="lg"
      className="shadow-sm fixed-top pb-0"
      style={{ backgroundColor: navbarColor }}
      expanded={expanded}
    >
      <Container>
        <Navbar.Brand as={Link} to="/" onClick={closeNavbar}>
          <img src={logo} width="68" height="68" alt="Agri App" />
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          onClick={() => setExpanded(!expanded)}
        />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/"
                className={`text-center ${
                  location.pathname === "/" ? "active" : ""
                }`}
                onClick={closeNavbar}
              >
                <HouseDoorFill size={20} color={getIconColor("/")} />
                <div className="nav-text">Home</div>
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/mercati"
                className={`text-center ${
                  location.pathname === "/mercati" ? "active" : ""
                }`}
                onClick={closeNavbar}
              >
                <GraphUpArrow size={20} color={getIconColor("/mercati")} />
                <div className="nav-text">Bacheca</div>
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/prodotti"
                className={`text-center ${
                  location.pathname === "/prodotti" ? "active" : ""
                }`}
                onClick={closeNavbar}
              >
                <Cash size={20} color={getIconColor("/prodotti")} />
                <div className="nav-text">Prodotti</div>
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/notifiche"
                className={`text-center ${
                  location.pathname === "/notifiche" ? "active" : ""
                }`}
                onClick={closeNavbar}
              >
                <NotificationIcon />
                <div className="nav-text">Notifiche</div>
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/aziende"
                className={`text-center ${
                  location.pathname === "/aziende" ? "active" : ""
                }`}
                onClick={closeNavbar}
              >
                <Grid3x3GapFill size={20} color={getIconColor("/aziende")} />
                <div className="nav-text">Aziende</div>
              </Nav.Link>
            </Nav.Item>
          </Nav>
          <Nav className="justify-content-end">
            {!isAuthenticated ? (
              <>
                <Button
                  onClick={() => {
                    handleLogin();
                    closeNavbar();
                  }}
                  variant="outline-light"
                  className="mx-2"
                >
                  Accedi
                </Button>
                <Button
                  as={Link}
                  to="/FormIscrizione"
                  variant="warning"
                  className="mx-2"
                  onClick={closeNavbar}
                >
                  Registrati
                </Button>
              </>
            ) : (
              <div className="nav-avatar">
                <Dropdown
                  align="end"
                  show={mostraDropdown}
                  onToggle={() => setMostraDropdown(!mostraDropdown)}
                >
                  <Dropdown.Toggle
                    variant="transparent"
                    style={{
                      border: "none",
                      background: "transparent",
                      cursor: "pointer",
                    }}
                    onClick={handleToggleDropdown}
                  >
                    {avatarUrl ? (
                      <Image
                        src={`${avatarUrl}?${new Date().getTime()}`}
                        roundedCircle
                        className="image-round"
                      />
                    ) : (
                      <PersonCircle size={24} className="text-white" />
                    )}
                  </Dropdown.Toggle>
                  <Dropdown.Menu className="nav-dropdown-menu">
                    <Dropdown.Item
                      as={Link}
                      to="/ProfilePage"
                      onClick={closeNavbar}
                    >
                      Profilo
                    </Dropdown.Item>
                    <Dropdown.Item
                      onClick={() => {
                        handleLogout();
                        closeNavbar();
                      }}
                      style={{ color: "gold" }}
                    >
                      Logout
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </div>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default CustomNavbar;
