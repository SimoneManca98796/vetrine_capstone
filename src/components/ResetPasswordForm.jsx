import React, { useState, useEffect } from "react";
import { Form, Button, Container, Row, Col, Modal } from "react-bootstrap";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";
import logo from "/Vetrine.png";
import "../LoginForm.css";

const ResetPasswordForm = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [modalMessage, setModalMessage] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const token = new URLSearchParams(location.search).get("token");

  useEffect(() => {
    console.log("Current token:", token); // Aggiungi questo per verificare il token
  }, [token]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setErrorMessage("Le password non coincidono.");
      return;
    }

    try {
      await axios.post(
        "https://vetrine-agricole-6d661b03a449.herokuapp.com/api/users/reset-password",
        {
          token,
          newPassword: password,
        }
      );
      setModalMessage("Password aggiornata con successo.");
      setShowModal(true);
    } catch (error) {
      setErrorMessage(
        "Errore durante il reset della password. Per favore riprova."
      );
    }
  };

  const handleCloseModal = () => {
    setShowModal(false);
    navigate("/FormLogin");
  };

  return (
    <Container className="spaziatura">
      <Row className="justify-content-md-center">
        <Col xs={12} md={6}>
          <div className="login-container">
            <img src={logo} alt="Logo" />
            <h2>Reset Password</h2>
            <p>Inserisci la tua nuova password.</p>
            <Form onSubmit={handleSubmit}>
              <Form.Group controlId="formPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type={showPassword ? "text" : "password"}
                  placeholder="Inserisci la tua nuova password..."
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </Form.Group>

              <Form.Group controlId="formConfirmPassword">
                <Form.Label>Conferma Password</Form.Label>
                <Form.Control
                  type={showPassword ? "text" : "password"}
                  placeholder="Conferma la tua nuova password..."
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
              </Form.Group>

              <Form.Group controlId="formShowPassword">
                <Form.Check
                  type="checkbox"
                  label="Mostra password"
                  checked={showPassword}
                  onChange={() => setShowPassword(!showPassword)}
                />
              </Form.Group>

              {errorMessage && (
                <div className="error-message">{errorMessage}</div>
              )}

              <Button variant="primary" type="submit">
                Reset Password
              </Button>
            </Form>
          </div>
        </Col>
      </Row>

      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Reset Password</Modal.Title>
        </Modal.Header>
        <Modal.Body>{modalMessage}</Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleCloseModal}>
            Chiudi
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
};

export default ResetPasswordForm;
