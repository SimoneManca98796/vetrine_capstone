import React, { useState } from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import "../App.css";

const FormLogin = () => {
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(loginData);
  };

  return (
    <Container>
      <Row className="justify-content-md-center">
        <Col xs={12} md={6}>
          <div
            className="form-container"
            style={{
              backgroundColor: "#B9D4F0", // Colore chiaro blu per lo sfondo del form
              border: "3px solid #0056b3", // Bordo blu
              borderRadius: "20px",
              padding: "20px",
              maxWidth: "450px",
              margin: "auto",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
            }}
          >
            <h2>Accedi</h2>
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
                  type="password"
                  placeholder="Inserisci la tua password..."
                  name="password"
                  value={loginData.password}
                  onChange={handleChange}
                />
              </Form.Group>

              <div style={{ marginTop: "15px" }}></div>

              <Button
                variant="primary"
                type="submit"
                style={{
                  backgroundColor: "#0056b3",
                  borderColor: "#0056b3",
                  padding: "8px 16px",
                  borderRadius: "10px",
                  display: "block", // Mostra il pulsante come blocco
                  width: "auto",
                  margin: "0 auto",
                }}
              >
                Accedi
              </Button>
            </Form>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default FormLogin;
