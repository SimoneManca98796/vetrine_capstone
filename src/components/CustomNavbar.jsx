import React, { useState, useEffect } from "react";
import { useSelector, useDispatch, shallowEqual } from "react-redux";
import {
  Container,
  Navbar,
  Nav,
  Dropdown,
  Image,
  Modal,
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
    "/mercati": "rgb(156,139,139)",
    "/prodotti": "#0044cc",
    // Aggiungi altri percorsi e colori qui
  };

  // Ottieni il colore in base al percorso attuale
  const navbarColor = navbarColors[location.pathname] || "#0085B5";

  // Handler per il login
  const handleLogin = () => {
    //const credentials = { username: "user@example.com", password: "password" };
    //dispatch(loginUser(credentials));
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

  return (
    <Navbar
      expand="lg"
      className="shadow-sm fixed-top pb-0"
      style={{ backgroundColor: navbarColor }}
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
                  <Dropdown.Item onClick={() => navigate("/profile")}>
                    Profilo
                  </Dropdown.Item>
                  <Dropdown.Item
                    as="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      setShowAvatarUpload(!showAvatarUpload); // Cambia lo stato per mostrare/nascondere AvatarUpload
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
