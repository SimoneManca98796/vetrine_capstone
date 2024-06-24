import React, { useState } from "react";
import { Form, Button, Container, Row, Col, Modal } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import axios from "axios";
import { loginUser } from "../redux/actions";
import logo from "/Vetrine.png";
import "../LoginForm.css";

const FormLogin = () => {
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [modalMessage, setModalMessage] = useState("");
  const [showForgotPasswordModal, setShowForgotPasswordModal] = useState(false);
  const [forgotPasswordEmail, setForgotPasswordEmail] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      loginUser(
        loginData,
        navigate,
        setErrorMessage,
        setShowLoginModal,
        setModalMessage
      )
    );
  };

  const handleForgotPassword = async () => {
    try {
      // Invia richiesta per recuperare la password
      await axios.post("http://localhost:8080/api/users/forgot-password", {
        email: forgotPasswordEmail,
      });
      setModalMessage(
        "Le istruzioni per il recupero della password sono state inviate alla tua email."
      );
      setShowForgotPasswordModal(false);
      setShowLoginModal(true);
    } catch (error) {
      setModalMessage(
        "Impossibile inviare le istruzioni per il recupero della password. Per favore riprova."
      );
      setShowForgotPasswordModal(false);
      setShowLoginModal(true);
    }
  };

  const handleCloseLoginModal = () => {
    setShowLoginModal(false);
    navigate("/");
  };

  return (
    <Container className="spaziatura">
      <Row className="justify-content-md-center">
        <Col xs={12} md={6}>
          <div className="login-container">
            <img src={logo} alt="Logo" />
            <h2>Accedi</h2>
            <p>Benvenuto! Accedi al tuo account per continuare.</p>
            <Form onSubmit={handleSubmit}>
              <Form.Group controlId="formEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Inserisci la tua email..."
                  name="email"
                  value={loginData.email}
                  onChange={handleChange}
                />
              </Form.Group>

              <Form.Group controlId="formPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type={showPassword ? "text" : "password"}
                  placeholder="Inserisci la tua password..."
                  name="password"
                  value={loginData.password}
                  onChange={handleChange}
                />
                <Button
                  variant="link"
                  className="show-password"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? "Nascondi" : "Mostra"} password
                </Button>
              </Form.Group>

              {errorMessage && (
                <div className="error-message">{errorMessage}</div>
              )}

              <Button variant="primary" type="submit">
                Accedi
              </Button>
            </Form>
            <div className="forgot-password-link">
              <a href="#" onClick={() => setShowForgotPasswordModal(true)}>
                Hai dimenticato la password?
              </a>
            </div>
            <div className="register-link">
              Non hai un account? <a href="/FormIscrizione">Registrati</a>
            </div>
          </div>
        </Col>
      </Row>

      <Modal show={showLoginModal} onHide={handleCloseLoginModal}>
        <Modal.Header closeButton>
          <Modal.Title>Accesso</Modal.Title>
        </Modal.Header>
        <Modal.Body>{modalMessage}</Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleCloseLoginModal}>
            Chiudi
          </Button>
        </Modal.Footer>
      </Modal>

      <Modal
        show={showForgotPasswordModal}
        onHide={() => setShowForgotPasswordModal(false)}
      >
        <Modal.Header closeButton>
          <Modal.Title>Recupero Password</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group controlId="formForgotPasswordEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="Inserisci la tua email..."
              value={forgotPasswordEmail}
              onChange={(e) => setForgotPasswordEmail(e.target.value)}
            />
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="secondary"
            onClick={() => setShowForgotPasswordModal(false)}
          >
            Annulla
          </Button>
          <Button variant="primary" onClick={handleForgotPassword}>
            Recupera Password
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
};

export default FormLogin;
