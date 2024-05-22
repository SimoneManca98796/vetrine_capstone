import React, { useState } from "react";
import { Form, Button, Container, Row, Col, Alert } from "react-bootstrap";
import { FaCreditCard, FaLock } from "react-icons/fa";
import "../PaymentForm.css";

const PaymentForm = () => {
  const [paymentSuccess, setPaymentSuccess] = useState(false);

  const handlePayment = (e) => {
    e.preventDefault();
    setPaymentSuccess(true);
  };

  return (
    <Container className="payment-form-container">
      <h3>
        Pagamento Sicuro <FaLock />
      </h3>
      {paymentSuccess && (
        <Alert variant="success">Pagamento effettuato con successo!</Alert>
      )}
      <Form onSubmit={handlePayment}>
        <Form.Group controlId="formCardNumber">
          <Form.Label>Numero di Carta</Form.Label>
          <Form.Control
            type="text"
            placeholder="1234 5678 9012 3456"
            required
          />
        </Form.Group>

        <Form.Group controlId="formCardHolder">
          <Form.Label>Nome Intestatario Carta</Form.Label>
          <Form.Control type="text" placeholder="Nome e Cognome" required />
        </Form.Group>

        <Row>
          <Col md={6}>
            <Form.Group controlId="formExpirationDate">
              <Form.Label>Data di Scadenza</Form.Label>
              <Form.Control type="text" placeholder="MM/YY" required />
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group controlId="formCVV">
              <Form.Label>CVV</Form.Label>
              <Form.Control type="text" placeholder="123" required />
            </Form.Group>
          </Col>
        </Row>

        <Button variant="success" type="submit" className="payment-button">
          Paga Ora
        </Button>
      </Form>
    </Container>
  );
};

export default PaymentForm;
