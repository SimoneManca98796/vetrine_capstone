import React, { useState } from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
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
    dispatch(loginUser(loginData, navigate, setErrorMessage));
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
            <div className="register-link">
              Non hai un account? <a href="/register">Registrati</a>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default FormLogin;
