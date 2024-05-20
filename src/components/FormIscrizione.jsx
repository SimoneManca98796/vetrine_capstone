import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { registerUser } from "../redux/actions";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import logo from "/Vetrine.png";
import "../FormIscrizione.css";

const FormIscrizione = () => {
  const [formData, setFormData] = useState({
    name: "",
    surname: "",
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({});
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(registerUser(formData, navigate, setErrors))
      .then((response) => {
        console.log(response);
        console.log("Registrazione riuscita:", response.data);
        setErrors({}); // Pulisce gli errori precedenti se la registrazione è riuscita
      })
      .catch((error) => {
        console.error("Errore nella registrazione:", error);
        if (
          error.response &&
          error.response.data &&
          error.response.data.errors
        ) {
          setErrors(error.response.data.errors);
        } else {
          setErrors({ general: "Si è verificato un errore di registrazione." });
        }
      });
  };

  return (
    <Container className="spaziatura">
      <Row className="justify-content-md-center">
        <Col xs={12} md={6}>
          <div className="register-container">
            <img src={logo} alt="Logo" width="100px" height="100px" />
            <h2>Registrazione</h2>
            <Form noValidate onSubmit={handleSubmit}>
              <Form.Group controlId="formNome">
                <Form.Label>Nome</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Inserisci il tuo nome..."
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  isInvalid={!!errors.name}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.name}
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group controlId="formCognome">
                <Form.Label>Cognome</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Inserisci il tuo cognome..."
                  name="surname"
                  value={formData.surname}
                  onChange={handleChange}
                  isInvalid={!!errors.surname}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.surname}
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group controlId="formEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Inserisci la tua email..."
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  isInvalid={!!errors.email}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.email}
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group controlId="formPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Inserisci la tua password..."
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  isInvalid={!!errors.password}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.password}
                </Form.Control.Feedback>
              </Form.Group>
              {errors.general && (
                <div className="error-message">{errors.general}</div>
              )}
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
