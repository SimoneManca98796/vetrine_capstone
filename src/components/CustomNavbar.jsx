import React, { useState, useEffect } from "react";
import { useSelector, useDispatch, shallowEqual } from "react-redux";
import {
  Container,
  Navbar,
  Nav,
  Dropdown,
  Image,
  Modal,
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
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "/Vetrine.png";
import { loginUser, logoutUser } from "../redux/actions/index";
import { useNavigate } from "react-router-dom";
import AvatarUpload from "./AvatarUpload";
import "../CustomNavbar.css";

const CustomNavbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation(); // percorso per cambio navbar
  const [mostraDropdown, setMostraDropdown] = useState(false);
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  const avatarUrl = useSelector((state) => state.auth.avatarUrl, shallowEqual); // l'URL dell'avatar

  const [showAvatarUpload, setShowAvatarUpload] = useState(false);

  useEffect(() => {
    console.log("L'URL dell'avatar è cambiato:", avatarUrl);
  }, [avatarUrl]);

  // Definisci colori per le diverse pagine
  const navbarColors = {
    "/": "#0085B5",
  };
  {
    /* "/mercati": "rgb(156,139,139)",
  "/prodotti": "#0044cc",
  "/PrezziLatte": "#DADDE2",
  "/PrezziOvini": "#9E2A2B",
  "/PrezziSuini": "#881B80",
  "/PrezziBovini": "#007200", */
  }

  // Ottieni il colore in base al percorso attuale
  const navbarColor = navbarColors[location.pathname] || "#0085B5";

  // Handler per il login
  const handleLogin = () => {
    navigate("/FormLogin");
  };

  // Handler per il logout
  const handleLogout = () => {
    dispatch(logoutUser());
    localStorage.removeItem("avatarUrl");
    navigate("/");
  };

  const handleToggleDropdown = () => {
    setMostraDropdown(!mostraDropdown);
    console.log("Dropdown state after click:", !mostraDropdown); // Monitora lo stato del dropdown
  };

  // Funzione per ottenere il colore delle icone attive
  const getIconColor = (path) => {
    return location.pathname === path ? "rgba(255, 255, 255, 0.7)" : "white";
  };

  return (
    <Navbar
      expand="lg"
      className="shadow-sm fixed-top pb-0"
      style={{ backgroundColor: navbarColor }}
    >
      <Container>
        <Navbar.Brand as={Link} to="/">
          <img src={logo} width="68" height="68" alt="Agri App" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/"
                className={`text-center ${
                  location.pathname === "/" ? "active" : ""
                }`}
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
              >
                <BellFill size={20} color={getIconColor("/notifiche")} />
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
                  onClick={handleLogin}
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
                >
                  Registrati
                </Button>
              </>
            ) : (
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
                      style={{ width: "30px", height: "30px" }}
                    />
                  ) : (
                    <PersonCircle size={24} className="text-white" />
                  )}
                </Dropdown.Toggle>
                <Dropdown.Menu className="nav-dropdown-menu">
                  <Dropdown.Item as={Link} to="/ProfilePage">
                    Profilo
                  </Dropdown.Item>
                  <Dropdown.Item
                    as="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      setShowAvatarUpload(!showAvatarUpload);
                    }}
                  >
                    Carica Avatar
                  </Dropdown.Item>
                  {showAvatarUpload && <AvatarUpload />}
                  <Dropdown.Item
                    onClick={handleLogout}
                    style={{ color: "gold" }}
                  >
                    Logout
                  </Dropdown.Item>
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
