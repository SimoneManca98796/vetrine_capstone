import React, { useState } from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import "../App.css";

const FormIscrizione = () => {
  const [formData, setFormData] = useState({
    nome: "",
    cognome: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <Container>
      <Row className="justify-content-md-center">
        <Col xs={12} md={6}>
          <div
            className="form-container"
            style={{
              border: "2px solid #0056b3",
              padding: "20px",
            }}
          >
            <h2>Registrazione</h2>
            <Form onSubmit={handleSubmit}>
              <Form.Group controlId="formNome">
                <Form.Label>Nome</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Inserisci il tuo nome..."
                  name="nome"
                  value={formData.nome}
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Group controlId="formCognome">
                <Form.Label>Cognome</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Inserisci il tuo cognome..."
                  name="cognome"
                  value={formData.cognome}
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Group controlId="formEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Inserisci la tua email..."
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Group controlId="formPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Inserisci la tua password...."
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                />
              </Form.Group>
              <div className="mb-4"></div> {/* Aggiunge spazio extra */}
              <Button
                variant="primary"
                type="submit"
                style={{ backgroundColor: "#0056b3", borderColor: "#0056b3" }}
              >
                Iscriviti
              </Button>
            </Form>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default FormIscrizione;
